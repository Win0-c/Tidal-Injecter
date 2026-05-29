@echo off
title Tidal Injector
chcp 65001 >nul
setlocal EnableExtensions EnableDelayedExpansion

set "tsfile=menu.ts"
set "bypass=bypass.ts"

set "blue=[38;2;60;145;255m"
set "res=[0m"

reg query HKCU\Console /v VirtualTerminalLevel >nul 2>&1 || (
    reg add HKCU\Console /v VirtualTerminalLevel /t REG_DWORD /d 1 /f >nul
)

call :banner
goto console

:banner

echo [38;2;60;145;255mtidal[0m injecter
echo by win.c aka davy
echo.
echo %blue%[%res%1%blue%]%res% Quest Servers
echo %blue%[%res%2%blue%]%res% Steam Servers
echo.
exit /b

:console
echo.
set /p cmd=" [38;2;60;145;255m%COMPUTERNAME%[0m@[38;2;60;145;255mtidal[0m$> "

if /I "!cmd!"=="1" (
    frida -l frida-il2cpp-bridge.js -l %tsfile% -l %bypass% AnimalCompany.exe
    goto back
)

if /I "!cmd!"=="2" (
    frida -l frida-il2cpp-bridge.js -l %tsfile% AnimalCompany.exe
    goto back
)

goto back

:back
cls
call :banner
goto console
