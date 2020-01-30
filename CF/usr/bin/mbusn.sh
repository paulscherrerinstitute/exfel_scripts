#!/bin/sh
#
# Prepared by: Waldemar Koprek
#
# The script reads/writes MBU serial number and backplane and front panel version

function_help()
{
  echo
  echo "The script reads/writes MBU serial number                 "
  echo
  echo "Usage: mbusn.sh mbu_sn magic_word                         "
  echo "  mbu_sn     - MBU serial number                          "
  echo "  magic_word - magic word type 0xABCD                     "
  echo 
  echo "Example: mbusn.sh CR0900 0xABCD                        "
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

if [ "$#" -eq 2 ] 
then
  if [ "$2" == "0xABCD" ]
  then
    echo "mmc2prog 7 0x000 FP2.0A"
    mmc2prog 7 0x000 FP2.0A
    sleep 1
    echo "mmc2prog 7 0x200 BP1.0B"
    mmc2prog 7 0x200 BP1.0B
    sleep 1
    echo "mmc2prog 7 0x400 $1"
    mmc2prog 7 0x400 $1
  else
    echo "ERROR: Invalid magic word"
    exit 2
  fi
  exit 0
else
  echo "ERROR: Missing parameters"
  function_help
  exit 2
fi


