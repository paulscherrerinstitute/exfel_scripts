#!/bin/sh
#
# Prepared by: Waldemar Koprek
#
# The script reads/writes MMC2 software revision

function_help()
{
  echo
  echo "The script reads/writes revision of currently running     "
  echo " revision of MMC2 software                                "
  echo
  echo "Usage: mmc2rev.sh [value magic]                           "
  echo "  no params - displays currently running revision         "
  echo "  value     - new revision version, 0-production, 1-fallback"
  echo "  magic - magic word type 0xAB                            "
  echo 
  echo "Example: mmc2rev.sh 0 0xAB                                "
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
  # check the magic word 0xAB
	if [ "$2" -ne 171  ] 
  then
    echo "Invalid or missing magic byte"
    exit 1
  fi
  # production revision 
	if [ "$1" -eq 0 ] 
  then
    /mnt/cf/usr/bin/mwr 0x800030B8 4 0x7C0D43AB
    sleep .5
    /mnt/cf/usr/bin/mwr 0x800030B8 4 0x7C0D4DAB
    sleep .5
    /mnt/cf/usr/bin/mwr 0x800030B8 4 0x7C0D44AB
    sleep .5
    echo "Set production revision"
    exit 0
  fi
  # fallback revision
	if [ "$1" -eq 1 ] 
  then
    /mnt/cf/usr/bin/mwr 0x800030B8 4 0x7C0C43AB
    sleep .5
    /mnt/cf/usr/bin/mwr 0x800030B8 4 0x7C0C4DAB
    sleep .5
    /mnt/cf/usr/bin/mwr 0x800030B8 4 0x7C0C44AB
    sleep .5
    echo "Set fallback revision"
    exit 0
  fi
  # MBU reset
	if [ "$1" -eq 2 ] 
  then
    /mnt/cf/usr/bin/mwr 0x800030B8 4 0x7C0643AB
    sleep .5
    /mnt/cf/usr/bin/mwr 0x800030B8 4 0x7C064DAB
    sleep .5
    /mnt/cf/usr/bin/mwr 0x800030B8 4 0x7C0644AB
    sleep .5
    echo "MBU reset"
    exit 0
  fi
  # MBU CMD 9 - test purpose
	if [ "$1" -eq 3 ] 
  then
    /mnt/cf/usr/bin/mwr 0x800030B8 4 0x7C0943AB
    sleep .5
    /mnt/cf/usr/bin/mwr 0x800030B8 4 0x7C094DAB
    sleep .5
    /mnt/cf/usr/bin/mwr 0x800030B8 4 0x7C0944AB
    sleep .5
    echo "MBU test CMD 0x09"
    exit 0
  fi
fi


