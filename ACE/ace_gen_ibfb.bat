REM Copyright(c) PSI
@echo off
REM Set path to Xilinx installation directory
set XILINX=C:\Xilinx\14.7
REM Attach Xilinx programs to PATH environment variable
set PATH=%XILINX%\ISE_DS\ISE\bin\nt64;%XILINX%\ISE_DS\ISE\lib\nt64;%PATH%


if [%1%]==[] (
  set selace=all
) else (
  set selace=%1%	
)

if %selace% == all (
  set ibfbctrl=true
) else (
  set ibfbctrl=false
)
if %selace% == all (
  set ibfbsw=true
) else (
  set ibfbsw=false
)
if %selace% == all (
  set ibfbmon=true
) else (
  set ibfbmon=false
)
if %selace% == all (
  set ibfbplay=true
) else (
  set ibfbplay=false
)
if %selace% == all (
  set ibfbcav=true
) else (
  set ibfbcav=false
)
if %selace% == all (
  set ibfbcav2=true
) else (
  set ibfbcav2=false
)
if %selace% == all (
  set ibfbcavb=true
) else (
  set ibfbcavb=false
)
if %selace% == all (
  set ibfbcav2=true
) else (
  set ibfbcav2=false
)

if %selace% == ibfbctrl   set ibfbctrl=true
if %selace% == ibfbsw     set ibfbsw=true
if %selace% == ibfbmon    set ibfbmon=true
if %selace% == ibfbplay   set ibfbplay=true
if %selace% == ibfbcav    set ibfbcav=true
if %selace% == ibfbcav2   set ibfbcav2=true
if %selace% == ibfbcavb   set ibfbcavb=true
if %selace% == ibfbcav2   set ibfbcav2=true


REM Start ace files generation
if "%ibfbctrl%"   == "true" impact.exe -batch ace_ibfb_ctrl.cmd
if "%ibfbsw%"     == "true" impact.exe -batch ace_ibfb_sw.cmd
if "%ibfbmon%"    == "true" impact.exe -batch ace_ibfb_mon.cmd
if "%ibfbplay%"   == "true" impact.exe -batch ace_ibfb_play.cmd
if "%ibfbcav%"    == "true" impact.exe -batch ace_ibfb_cav.cmd
if "%ibfbcav2%"   == "true" impact.exe -batch ace_ibfb_cav2.cmd
if "%ibfbcavb%"   == "true" impact.exe -batch ace_ibfb_cavb.cmd
if "%ibfbcav2%"   == "true" impact.exe -batch ace_ibfb_cav2.cmd

