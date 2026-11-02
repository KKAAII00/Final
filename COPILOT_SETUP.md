# Connect SkillGap to GitHub Copilot

The local Python backend serves the app and connects the Growth Coach to the
official GitHub Copilot SDK. It runs only on `127.0.0.1`; chat messages and the
skill context sent to Copilot are processed through the Copilot CLI on this
computer.

## Start the app

1. Install Python 3.11 or later.
2. Double-click `run.bat`. It installs the pinned SDK dependency if needed,
   starts the app, and opens it in your browser. If port 8080 is already in use,
   it selects port 8081 automatically.
3. If Copilot is not signed in, install GitHub Copilot CLI with
   `winget install GitHub.Copilot`, launch `copilot` in PowerShell, and run
   `/login`. An active Copilot subscription and access to Copilot CLI are
   required.
4. Open **Growth Coach** in the app and send a message.

You can also install the dependency and start the server from PowerShell:

```powershell
py -m pip install -r requirements.txt
py server.py
```

Press Ctrl+C in the server window to stop it. If both ports 8080 and 8081 are
already in use, close another local web server or set `SKILLGAP_PORT` to a free
port before starting SkillGap. Always open the address served by this backend;
the static VS Code preview does not provide the `/api` endpoints.

## Notes

- The backend uses the Copilot SDK's bundled runtime when it is first needed.
  An internet connection may be required for the initial runtime download.
- Do not put Copilot tokens or other secrets in source files. The app uses the
  local Copilot CLI sign-in.
- The Growth Coach receives the current target role, skill ratings, goals, and
  recent chat history. Avoid sending sensitive employee information.
- The Python SDK's managed runtime is not an interactive sign-in window. Sign in
  through the Copilot CLI before sending chat messages.
- This prototype binds to loopback and does not provide production
  authentication, multi-user access, or persistent server-side chat storage.
