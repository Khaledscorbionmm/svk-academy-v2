@echo off
title SVK Academy Control Center
color 0A
echo ====================================================
echo      SVK Academy Smart Control Center
echo ====================================================
echo [INFO] Starting Control Center Server...
echo [INFO] Opening control panel in your default browser...
echo.
cd /d "%~dp0"
node control-center.js
pause
