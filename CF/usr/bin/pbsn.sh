#!/bin/sh
#
# Prepared by: Waldemar Koprek
#
# The script reads/writes PB serial number
# The value is written to 1-Wire EEPROM of PB

function_help()
{
  echo
  echo "The script reads/writes PB type "
  echo "The value is written to 1-Wire EEPROM of PB"
  echo
  echo "Usage: pbsn.sh [pb sn magic]                            "
  echo "  no params - displays current serial nubmers           "
  echo "  pb    - pb selection 1 for PB1, 2 for PB2             "
  echo "  sn    - 8 characters serial number                    "
  echo "  magic - magic word type 0xABCD                        "
  echo 
  echo "Example: pbsn.sh 1 IPPA0024 0xABCD                      "
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
  value=$(/mnt/cf/usr/bin/mrd 0x80003870 8 1 | tail -c 25)
  printf "PB1: "
  for c in $value
  do
    printf "\x$c"
  done
  value=$(/mnt/cf/usr/bin/mrd 0x80003878 8 1 | tail -c 25)
  printf "\nPB2: "
  for c in $value
  do
    printf "\x$c"
  done   
  printf "\n"
  exit 0
else		
	if [ "$#" -eq 3 ] 
  then
    if [ $1 -le 0 ] || [ $1 -ge 3 ]
    then
    	echo "ERROR: Invalid PB number"
      exit 3
    fi
    if [ $(expr length $2) -ne 8 ]
    then
    	echo "ERROR: Serial number must have eight characters"
      exit 4
    fi
    sn=$2
    sn1=$(printf "0x%02X%02X%02X%02X\n" "'${sn:0:1}" "'${sn:1:1}" "'${sn:2:1}" "'${sn:3:1}")
    sn2=$(printf "0x%02X%02X%02X%02X\n" "'${sn:4:1}" "'${sn:5:1}" "'${sn:6:1}" "'${sn:7:1}")
    cmd=$(printf "0x%08X" $((($3<<16)+($1<<8))))
    /mnt/cf/usr/bin/mwr 0x80003094 4 $sn1
    /mnt/cf/usr/bin/mwr 0x80003098 4 $sn2
    /mnt/cf/usr/bin/mwr 0x8000309C 4 $cmd
    echo "Done"
    exit 0
  else
    echo "ERROR: Missing parameters"
    function_help
    exit 2
  fi
fi


