@echo off
setlocal
cd /d "%~dp0"

if not defined SKILLGAP_PORT (
    set SKILLGAP_PORT=8080
    set SKILLGAP_PORT_AUTOMATIC=1
)

py -m pip show github-copilot-sdk >nul 2>nul
if errorlevel 1 (
    echo Installing the GitHub Copilot SDK...
    py -m pip install -r requirements.txt
    if errorlevel 1 (
        echo.
        echo SDK installation failed. Check your Python and internet connection.
        pause
        exit /b 1
    )
)

powershell -NoProfile -Command "if (Get-NetTCPConnection -State Listen -LocalPort %SKILLGAP_PORT% -ErrorAction SilentlyContinue) { exit 1 }"
if errorlevel 1 (
    if defined SKILLGAP_PORT_AUTOMATIC (
        echo Port 8080 is already in use. Checking port 8081...
        powershell -NoProfile -Command "if (Get-NetTCPConnection -State Listen -LocalPort 8081 -ErrorAction SilentlyContinue) { exit 1 }"
        if errorlevel 1 (
            echo Ports 8080 and 8081 are both in use.
            echo Close another server or set SKILLGAP_PORT to a free port, then try again.
            pause
            exit /b 1
        )
        set SKILLGAP_PORT=8081
    ) else (
        echo Port %SKILLGAP_PORT% is already in use.
        echo Close the server using that port or choose another SKILLGAP_PORT.
        pause
        exit /b 1
    )
)

set SKILLGAP_OPEN_BROWSER=1
py server.py
if errorlevel 1 (
    echo.
    echo The SkillGap server stopped with an error.
    pause
    exit /b 1
)
endlocal