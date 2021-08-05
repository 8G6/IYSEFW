@echo off

IF EXIST "c:\temp". (
     echo found
) ELSE (
     mkdir "c:\temp"
)
echo %cd% > "c:\temp\temp.txt"
:: ------- Self-elevating.bat --------------------------------------
@whoami /groups | find "S-1-16-12288" > nul && goto :admin
set "ELEVATE_CMDLINE=cd /d "%~dp0" & call "%~f0" %*"
findstr "^:::" "%~sf0">temp.vbs
cscript //nologo temp.vbs & del temp.vbs & exit /b

::: Set objShell = CreateObject("Shell.Application")
::: Set objWshShell = WScript.CreateObject("WScript.Shell")
::: Set objWshProcessEnv = objWshShell.Environment("PROCESS")
::: strCommandLine = Trim(objWshProcessEnv("ELEVATE_CMDLINE"))
::: objShell.ShellExecute "cmd", "/c " & strCommandLine, "", "runas"
:admin -------------------------------------------------------------


IF EXIST "c:\Program Files\IYSEFW". (
     echo installed
) ELSE (
     mkdir "c:\Program Files\IYSEFW"
)
set /p P=<c:\temp\temp.txt
xcopy /s %P% "c:\Program Files\IYSEFW"
"C:\Program Files\IYSEFW\main.exe"

