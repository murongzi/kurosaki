@echo off

tasklist|find "nginx.exe"

cd E:\workspace\nginx
if ERRORLEVEL 1 (nginx.exe) else (nginx.exe -s reload)