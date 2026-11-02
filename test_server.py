import http.client
import json
import threading
import unittest

import server


class FakeCopilotService:
    def reply(self, request: dict) -> str:
        return f"Reply for {request['message']}"


class UnauthenticatedCopilotService:
    def reply(self, request: dict) -> str:
        raise RuntimeError("No GitHub OAuth token or Copilot HMAC key provided")


class ChatPayloadTests(unittest.TestCase):
    def test_valid_payload_is_sanitized_and_keeps_recent_context(self) -> None:
        request = server.validate_chat_payload(
            {
                "message": "Help me grow",
                "profile": {
                    "target": "Analyst",
                    "readiness": 120,
                    "skills": {"Data analysis": 3, "Invalid": 8, "Boolean": True},
                    "priorityGaps": ["Python"],
                },
                "history": [{"role": "assistant", "content": "What would you like to learn?"}],
            }
        )

        self.assertEqual(request["message"], "Help me grow")
        self.assertEqual(request["profile"]["readiness"], 100)
        self.assertEqual(request["profile"]["skills"], {"Data analysis": 3})
        self.assertIn("Assistant: What would you like to learn?", server.build_prompt(request))

    def test_empty_message_is_rejected(self) -> None:
        with self.assertRaisesRegex(ValueError, "Enter a message"):
            server.validate_chat_payload({"message": "  "})

    def test_invalid_history_role_is_rejected(self) -> None:
        with self.assertRaisesRegex(ValueError, "user or assistant"):
            server.validate_chat_payload(
                {"message": "Hello", "history": [{"role": "system", "content": "ignored"}]}
            )

    def test_oversized_message_is_rejected(self) -> None:
        with self.assertRaisesRegex(ValueError, "characters or fewer"):
            server.validate_chat_payload({"message": "x" * (server.MAX_MESSAGE_CHARS + 1)})

    def test_authentication_error_is_actionable(self) -> None:
        message = server.copilot_error_message(
            RuntimeError("No GitHub OAuth token or Copilot HMAC key provided")
        )
        self.assertIn("winget install GitHub.Copilot", message)
        self.assertIn("run `/login`", message)


class LocalHTTPTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.original_port = server.PORT
        cls.httpd = server.SkillGapHTTPServer(("127.0.0.1", 0), server.SkillGapHandler)
        server.PORT = cls.httpd.server_address[1]
        server.SkillGapHandler.copilot = FakeCopilotService()
        cls.thread = threading.Thread(target=cls.httpd.serve_forever, daemon=True)
        cls.thread.start()

    @classmethod
    def tearDownClass(cls) -> None:
        cls.httpd.shutdown()
        cls.httpd.server_close()
        cls.thread.join(timeout=5)
        server.PORT = cls.original_port

    def request(self, method: str, path: str, body: dict | None = None):
        connection = http.client.HTTPConnection("127.0.0.1", server.PORT, timeout=5)
        headers = {}
        encoded = None
        if body is not None:
            encoded = json.dumps(body)
            headers["Content-Type"] = "application/json"
        connection.request(method, path, body=encoded, headers=headers)
        response = connection.getresponse()
        content = response.read()
        status = response.status
        connection.close()
        return status, content

    def test_serves_frontend(self) -> None:
        status, content = self.request("GET", "/")
        self.assertEqual(status, 200)
        self.assertIn(b"SkillGap Analyzer", content)

    def test_chat_endpoint_returns_reply(self) -> None:
        status, content = self.request("POST", "/api/chat", {"message": "Hello"})
        self.assertEqual(status, 200)
        self.assertEqual(json.loads(content), {"reply": "Reply for Hello"})

    def test_chat_endpoint_explains_missing_copilot_sign_in(self) -> None:
        server.SkillGapHandler.copilot = UnauthenticatedCopilotService()
        try:
            status, content = self.request("POST", "/api/chat", {"message": "Hello"})
        finally:
            server.SkillGapHandler.copilot = FakeCopilotService()
        self.assertEqual(status, 502)
        self.assertIn("/login", json.loads(content)["error"])

    def test_cross_origin_request_is_rejected(self) -> None:
        connection = http.client.HTTPConnection("127.0.0.1", server.PORT, timeout=5)
        connection.request(
            "GET",
            "/api/status",
            headers={"Origin": "http://example.com"},
        )
        response = connection.getresponse()
        self.assertEqual(response.status, 403)
        connection.close()


if __name__ == "__main__":
    unittest.main()
