@echo off

tasklist|find "nginx.exe"

if ERRORLEVEL 1 (nginx.exe) else (nginx.exe -s reload)