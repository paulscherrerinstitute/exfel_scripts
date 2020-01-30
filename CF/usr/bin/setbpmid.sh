#!/bin/sh
#
# Prepared by: Waldemar Koprek
#
#

function_help()
{
  echo "The script sets/reads BPM ID for the IBFB Cavity BPMs "
  echo "The value is written to BPM FPGA EEPROM"
  echo
  echo "Usage: setbpmid.sh <bpm_fpga> [bpmid router ena_mode]"
  echo "  <bpm_fpga> - select the BPM FPGA"
  echo "               1 - BPM1 FPGA"
  echo "               2 - BPM2 FPGA"
  echo "  [bpmid]    - if the argument is missing then the function reads"
  echo "               the actual BPM ID"
  echo "               if the argument is given then the function sets new"
  echo "               BPM ID. "
  echo "  [router]   - router configuration:"
  echo "                   upstream BPM1 FPGA: 10"
  echo "                   upstream BPM2 FPGA:  1"
  echo "                 downstream BPM1 FPGA: 42"
  echo "                 downstream BPM2 FPGA:  1"
  echo "                       SASE BPM1 FPGA: 42"
  echo "                       SASE BPM2 FPGA: 42"
  echo "                 collimator BPM  FPGA:  2"
  echo "  [ena_mode] - changes mode of enabling "
  echo "               0 - enabled by ping packet"
  echo "               1 - always enabled"
  echo 
}

#### Script start ##############################################################
# BPM ID in the router is under     0x00000404
# The router configuration is under 0x00000426
# The BPM enable is under           0x00000427
# EEPROM control:
#   0x00000800          REG_TRG
#   0x00000804		      REG_ADDR
#   0X00000808          REG_DATA
#   
# EEPROM content:
#       0x0080          BPM ID
#       0x0081		      router configuration
#       0X0082          BPM enable mode
#
if [ "$#" -lt 1 ] || [ "$#" -gt 4 ]  
then
  function_help
  exit 1
else
  if [ $1 -ge 1 ] && [ $1 -le 3 ]
  then
    if [ "$#" -eq 4 ]
    then
      if [ $1 -eq 1 ]  # BPM1 FPGA
      then
        # BPM ID
        /mnt/cf/usr/bin/mwr 0x80800804 4 0x0080 >> /dev/null      # address
        /mnt/cf/usr/bin/mwr 0x80800808 4 $2 >> /dev/null          # data
        /mnt/cf/usr/bin/mwr 0x80800800 4 0x0 >> /dev/null         # trigger write
        # router configuration
        /mnt/cf/usr/bin/mwr 0x80800804 4 0x0082 >> /dev/null      # address
        /mnt/cf/usr/bin/mwr 0x80800808 4 $3 >> /dev/null          # data
        /mnt/cf/usr/bin/mwr 0x80800800 4 0x0 >> /dev/null         # trigger write
        # BPM enable
        /mnt/cf/usr/bin/mwr 0x80800804 4 0x0084 >> /dev/null      # address
        /mnt/cf/usr/bin/mwr 0x80800808 4 $4 >> /dev/null          # data
        /mnt/cf/usr/bin/mwr 0x80800800 4 0x0 >> /dev/null         # trigger write
      else  # BPM2 FPGA
        # BPM ID
        /mnt/cf/usr/bin/mwr 0x81000804 4 0x0080 >> /dev/null      # address
        /mnt/cf/usr/bin/mwr 0x81000808 4 $2 >> /dev/null          # data
        /mnt/cf/usr/bin/mwr 0x81000800 4 0x0 >> /dev/null         # trigger write
        # router configuration
        /mnt/cf/usr/bin/mwr 0x81000804 4 0x0082 >> /dev/null      # address
        /mnt/cf/usr/bin/mwr 0x81000808 4 $3 >> /dev/null          # data
        /mnt/cf/usr/bin/mwr 0x81000800 4 0x0 >> /dev/null         # trigger write
        # BPM enable
        /mnt/cf/usr/bin/mwr 0x81000804 4 0x0084 >> /dev/null      # address
        /mnt/cf/usr/bin/mwr 0x81000808 4 $4 >> /dev/null          # data
        /mnt/cf/usr/bin/mwr 0x81000800 4 0x0 >> /dev/null         # trigger write
      fi
      echo "BPM ID of BPM$1 FPGA changed to $2"
      exit 0
    else
      if [ $1 -eq 1 ]  # BPM1 FPGA
      then
        /mnt/cf/usr/bin/mwr 0x80800804 4 0x0081 >> /dev/null      
        /mnt/cf/usr/bin/mwr 0x80800800 4 0x0    >> /dev/null
        bpmid=0x$(/mnt/cf/usr/bin/mrd 0x80800808 | tail -c 4)  
        /mnt/cf/usr/bin/mwr 0x80800804 4 0x0083 >> /dev/null      
        /mnt/cf/usr/bin/mwr 0x80800800 4 0x0    >> /dev/null
        router=0x$(/mnt/cf/usr/bin/mrd 0x80800808 | tail -c 4)  
        /mnt/cf/usr/bin/mwr 0x80800804 4 0x0085 >> /dev/null      
        /mnt/cf/usr/bin/mwr 0x80800800 4 0x0    >> /dev/null
        enable=$(/mnt/cf/usr/bin/mrd 0x80800808 | tail -c 3)  
      else
        /mnt/cf/usr/bin/mwr 0x81000804 4 0x0081 >> /dev/null
        /mnt/cf/usr/bin/mwr 0x81000800 4 0x0    >> /dev/null
        bpmid=0x$(/mnt/cf/usr/bin/mrd 0x81000808 | tail -c 4)  
        /mnt/cf/usr/bin/mwr 0x81000804 4 0x0083 >> /dev/null
        /mnt/cf/usr/bin/mwr 0x81000800 4 0x0    >> /dev/null
        router=0x$(/mnt/cf/usr/bin/mrd 0x81000808 | tail -c 4)  
        /mnt/cf/usr/bin/mwr 0x81000804 4 0x0085 >> /dev/null
        /mnt/cf/usr/bin/mwr 0x81000800 4 0x0    >> /dev/null
        enable=$(/mnt/cf/usr/bin/mrd 0x81000808 | tail -c 3)  
      fi
      printf "BPM%d FPGA:\n" $1 
      printf "  BPM ID: %d\n" $bpmid 
      printf "  router configuration: %d\n" $router
      if [ $enable -eq 1 ]; then
        printf "  BPM enable mode: always\n"
      fi
      if [ $enable -eq 0 ]; then
        printf "  BPM enable mode: on ping packet\n"
      fi
    fi
  else
    echo "ERROR: Invalid BPM number"
    echo 
    function_help
    exit 2
  fi
fi


