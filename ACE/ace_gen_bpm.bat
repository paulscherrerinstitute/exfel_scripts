@echo off
REM Copyright(c) PSI
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
  set but2=true
) else (
  set but2=false
)
if %selace% == all (
  set but=true
) else (
  set but=false
)
if %selace% == all (
  set butcav=true
) else (
  set butcav=false
)
if %selace% == all (
  set butren=true
) else (
  set butren=false
)
if %selace% == all (
  set cav=true
) else (
  set cav=false
)
if %selace% == all (
  set ren2=true
) else (
  set ren2=false
)
if %selace% == all (
  set ren=true
) else (
  set ren=false
)
if %selace% == all (
  set cav2=true
) else (
  set cav2=false
)
if %selace% == all (
  set ibfbcav=true
) else (
  set ibfbcav=false
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
if %selace% == all (
  set golden=true
) else (
  set golden=false
)

if %selace% == but2 set but2=true
if %selace% == but set but=true
if %selace% == butcav set butcav=true
if %selace% == butren set butren=true
if %selace% == cav set cav=true
if %selace% == ren2 set ren2=true
if %selace% == ren set ren=true
if %selace% == cav2 set cav2=true
if %selace% == ibfbcav set ibfbcav=true
if %selace% == ibfbcavb set ibfbcavb=true
if %selace% == ibfbcav2 set ibfbcav2=true
if %selace% == golden set golden=true

REM if "%but%" == "true" echo "but:" %but%
REM exit /B

REM Start ace files generation
if "%but2%" == "true" impact.exe -batch ace_but2.cmd
if "%but%" == "true" impact.exe -batch ace_but.cmd
if "%butcav%" == "true" impact.exe -batch ace_butcav.cmd
if "%butren%" == "true" impact.exe -batch ace_butren.cmd
if "%cav%" == "true" impact.exe -batch ace_cav.cmd
if "%ren2%" == "true" impact.exe -batch ace_ren2.cmd
if "%ren%" == "true" impact.exe -batch ace_ren.cmd
if "%cav2%" == "true" impact.exe -batch ace_cav2.cmd
if "%ibfbcav%" == "true" impact.exe -batch ace_ibfb_cav.cmd
if "%ibfbcavb%" == "true" impact.exe -batch ace_ibfb_cavb.cmd
if "%ibfbcav2%" == "true" impact.exe -batch ace_ibfb_cav2.cmd
if "%golden%" == "true" impact.exe -batch ace_golden.cmd
