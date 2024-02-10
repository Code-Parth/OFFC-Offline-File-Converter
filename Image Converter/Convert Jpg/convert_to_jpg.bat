@echo off
setlocal enabledelayedexpansion

REM Get the full path of the input file
set "input_file=%~dp1%~nx1"

REM Get the directory of the input file
set "input_dir=%~dp1"

REM Remove trailing backslash from input_dir
if "%input_dir:~-1%"=="\" set "input_dir=%input_dir:~0,-1%"

REM Convert the input file to JPG in the same directory
start /min python "C:\Image Converter\Convert Jpg\convert_to_jpg.py" "%input_file%" "%input_dir%"

PAUSE