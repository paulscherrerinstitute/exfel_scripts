#!/bin/sh
#
# Prepared by: Waldemar Koprek
#
# The script reads/writes MBU power failure register from MMC2 EEPROM

function_help()
{
  echo
  echo "The script reads/writes MBU power supply failure register "
  echo "The value is stored in MMC2 EEPROM                        "
  echo
  echo "Usage: mbupsrst.sh [value magic]                          "
  echo "  no params - displays current register value             "
  echo "  value     - new register value                          "
  echo "  magic - magic word type 0xAB                            "
  echo 
  echo "Example: mbupsrst.sh 0 0xAB                               "
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
  revision=$(/mnt/cf/usr/bin/mrd 0x80003B0C | tail -c 6 | cut -c1-2)  
  printf "MMC2 power supply failure: 0x%s\n" $revision
  exit 0
else		
	if [ "$#" -eq 2 ] 
  then
  	value=$(printf "0x%08X" $(((0xA8<<24)+(0x10<<16)+($1<<8)+($2))))
    /mnt/cf/usr/bin/mwr 0x800030B8 4 $value
    echo "Done"
    exit 0
  else
    echo "ERROR: Missing parameters"
    function_help
    exit 2
  fi
fi


