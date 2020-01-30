#!/bin/sh
#
# Prepared by: Waldemar Koprek
#
# The script reads/writes PB type 
# The value is written to 1-Wire EEPROM of PB
#
# pbtype <pb> [type]
# 
#   pb - pb selection 1 for PB1, 2 for PB2
#   type - when ommited then the function reads PB type
#          when given, the the value is written to PB
#          possible values are:
#                               1 - 

function_help()
{
  echo "The script reads/writes PB type "
  echo "The value is written to 1-Wire EEPROM of PB"
  echo
  echo "Usage: pbtype.sh [pb type magic]                           "
  echo "  pb - pb selection 1 for PB1, 2 for PB2                "
  echo "  type - when ommited then the function reads PB type   "
  echo "         when given, the the value is written to PB     "
  echo "         possible values are:                           "
  echo "                              1 - ADC12FL               "
  echo "                              2 - ADC16HL               "
  echo "                              3 - DAC16HL               "
  echo "                              4 - QSFP                  "
  echo "  magic - magic word type 0xABCD                        "
  echo 
  echo "Example: pbtype.sh 1 2 0xABCD                           "
  echo 
}

#### Script start ##############################################################
if [ "$#" -eq 1 ] && [ "$1" == "-h" ]
then
  function_help
  exit 0
fi

if [ "$#" -eq 1 ] && [ "$1" == "--help" ]
then
  function_help
  exit 0
fi

if [ "$#" -eq 0 ] 
then
  value=0x$(/mnt/cf/usr/bin/mrd 0x80003864 | tail -c 10)
  printf "PB1 present: %d, type: %d\n" $(((value>>24)&0xFF)) $(((value>>8)&0xFF))
  printf "PB2 present: %d, type: %d\n" $(((value>>16)&0xFF)) $((value&0xFF))
  exit 0
else		
	if [ "$#" -eq 3 ] 
  then
    if [ $1 -le 0 ] || [ $1 -ge 3 ]
    then
    	echo "ERROR: Invalid PB number"
      exit 3
    fi
    if [ $2 -le 0 ] || [ $2 -ge 5 ]
    then
    	echo "ERROR: Invalid type number"
      exit 4
    fi
  	value=$(printf "0x%08X" $((($3<<16)+($1<<8)+($2))))
    /mnt/cf/usr/bin/mwr 0x80003090 4 $value
    echo "Done"
    exit 0
  else
    echo "ERROR: Missing parameters"
    function_help
    exit 2
  fi
fi


