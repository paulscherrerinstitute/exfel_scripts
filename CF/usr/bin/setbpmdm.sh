#!/bin/sh
#
# Prepared by: Waldemar Koprek, Radoslaw Rybaniec
#
#

function_help()
{
  echo "The script sets/reads destination mask for the Cavity and Reentrant BPMs"
  echo "The value is written to BPM FPGA EEPROM"
  echo
  echo "Usage: setbpmdm.sh <bpm_fpga> [destmask]"
  echo "  <bpm_fpga> - select the BPM FPGA"
  echo "               1 - BPM1 FPGA"
  echo "               2 - BPM2 FPGA"
  echo "  [destmask]   - if the argument is missing then the function reads"
  echo "               the actual destination mask"
  echo "               if the argument is given then the function sets new"
  echo "               destination mask. "
  echo 
}

#### Script start ##############################################################
# BPM ID in the router is under     0x00000404
# The router configuration is under 0x00000426
# The BPM enable is under           0x00000427
# The destination mask is under     0x000004
# EEPROM control:
#   0x00000800          REG_TRG
#   0x00000804          REG_ADDR
#   0X00000808          REG_DATA
#   
# EEPROM content:
#       0x0040          BPM ID
#       0x0041          router configuration
#       0X0042          BPM enable mode
#       0X0048          destination mask LSB
#       0x0049          destination mask MSB

if [ "$#" -lt 1 ] || [ "$#" -gt 2 ]  
then
  function_help
  exit 1
else
  if [ $1 -ge 1 ] && [ $1 -le 3 ]
  then
    if [ "$#" -eq 2 ]
    then
      b=$2
      printf "b=%x\n" $b
      b0=$(( $b & 0xFF ))
      b1=$(( ($b >> 8) & 0xFF ))
      printf "b=0x%x b0=0x%x b1=0x%x\n" $b $b0 $b1
      if [ $1 -eq 1 ]  # BPM1 FPGA
      then
        # destination mask LSB
        /mnt/cf/usr/bin/mwr 0x80800804 4 0x0090 >> /dev/null      # address
        /mnt/cf/usr/bin/mwr 0x80800808 4 $b0 >> /dev/null          # data
        /mnt/cf/usr/bin/mwr 0x80800800 4 0x0 >> /dev/null         # trigger write
        # destination mask MSB
        /mnt/cf/usr/bin/mwr 0x80800804 4 0x0092 >> /dev/null      # address
        /mnt/cf/usr/bin/mwr 0x80800808 4 $b1 >> /dev/null          # data
        /mnt/cf/usr/bin/mwr 0x80800800 4 0x0 >> /dev/null         # trigger write
      else  # BPM2 FPGA
        # destination mask MSB
        /mnt/cf/usr/bin/mwr 0x81000804 4 0x0090 >> /dev/null      # address
        /mnt/cf/usr/bin/mwr 0x81000808 4 $b0 >> /dev/null          # data
        /mnt/cf/usr/bin/mwr 0x81000800 4 0x0 >> /dev/null         # trigger write
        # destination mask LSB
        /mnt/cf/usr/bin/mwr 0x81000804 4 0x0092 >> /dev/null      # address
        /mnt/cf/usr/bin/mwr 0x81000808 4 $b1 >> /dev/null          # data
        /mnt/cf/usr/bin/mwr 0x81000800 4 0x0 >> /dev/null         # trigger write
      fi
      printf "destination mask of BPM$1 FPGA changed to 0x%02x%02x\n" $b1 $b0
      exit 0
    else
      if [ $1 -eq 1 ]  # BPM1 FPGA
      then
        # destination mask LSB
        /mnt/cf/usr/bin/mwr 0x80800804 4 0x0091 >> /dev/null      
        /mnt/cf/usr/bin/mwr 0x80800800 4 0x0    >> /dev/null
        destmask0=0x$(/mnt/cf/usr/bin/mrd 0x80800808 | tail -c 6)  
        # destination mask MSB
        /mnt/cf/usr/bin/mwr 0x80800804 4 0x0093 >> /dev/null      
        /mnt/cf/usr/bin/mwr 0x80800800 4 0x0    >> /dev/null
        destmask1=0x$(/mnt/cf/usr/bin/mrd 0x80800808 | tail -c 6)  
      else
        # destination mask LSB
        /mnt/cf/usr/bin/mwr 0x81000804 4 0x0091 >> /dev/null      
        /mnt/cf/usr/bin/mwr 0x81000800 4 0x0    >> /dev/null
        destmask0=0x$(/mnt/cf/usr/bin/mrd 0x81000808 | tail -c 6)  
        # destination mask MSB
        /mnt/cf/usr/bin/mwr 0x81000804 4 0x0093 >> /dev/null      
        /mnt/cf/usr/bin/mwr 0x81000800 4 0x0    >> /dev/null
        destmask1=0x$(/mnt/cf/usr/bin/mrd 0x81000808 | tail -c 6)  
      fi
      printf "BPM%d FPGA:\n" $1 
      printf "Destmask : 0x%02x%02x\n" $destmask1 $destmask0

    fi
  else
    echo "ERROR: Invalid BPM number"
    echo 
    function_help
    exit 2
  fi
fi


