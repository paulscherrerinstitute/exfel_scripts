#!/bin/sh
#
# Prepared by: Waldemar Koprek
#
# The script changes revision of the ACE file 
# The value is written to 1-Wire EEPROM of GPAC
#

function_help()
{
  echo "The script changes revision of the ACE file "
  echo "The value is written to 1-Wire EEPROM of GPAC"
  echo
  echo "Usage: acerev [rev_num]"
  echo "  [rev_num] - if the argument is missing then the function reads"
  echo "              the running revision number "
  echo "              if the argument is given then the function sets new"
  echo "              revision number. There are three possible values:"
  echo "              0: golden image"
  echo "              1: production image 1"
  echo "              2: production image 2"
  echo 
}

#### Script start ##############################################################
if [ "$#" -ne 1 ] 
then
  revision=$(/mnt/cf/usr/bin/mrd 0x80003884 | tail -c 3)  
  printf "Running hardware revision: %d\n" $revision
  exit 0
else
  if [ $1 -ge 0 ] && [ $1 -le 2 ]
  then
    /mnt/cf/usr/bin/mwr 0x80003084 4 $1
    echo "SystemACE revision number changed to " $1
    exit 0
  else
    echo "ERROR: Invalid revision number"
    function_help
    exit 2
  fi
fi


