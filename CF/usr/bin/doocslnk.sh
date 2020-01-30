#!/bin/sh
#
# Prepared by: Waldemar Koprek
#
# The script read/writes state of the TX_DISABLE in SFP2 on the front panel.
# This is the link to DOOCS

function_help()
{
  echo
  echo "The script reads/writes TX_DISABLE in SFP2 on the front   "
  echo "panel connected to DOOCS                                  "
  echo
  echo "Usage: doocslnk.sh [value magic]                          "
  echo "  no params   - displays current register value           "
  echo "  start/stop  - enables disables the link                 "
  echo "  magic       - magic word type 0xAB                      "
  echo 
  echo "Example: doocslnk.sh stop 0xAB                            "
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
  revision=$(/mnt/cf/usr/bin/mrd 0x8000002C | tail -c 10 | cut -c1-2)  
  if [ $revision == "01" ]
  then
	printf "SFP2 link to DOOCS disabled\n" 
  else
	printf "SFP2 link to DOOCS enabled\n" 
  fi
  exit 0
else		
	if [ "$#" -eq 2 ] 
  then
	if [ "$2" == "start" ]
	then
		/mnt/cf/usr/bin/mwr 0x8000002C 4 0x0
		echo "Done"
		exit 0
	fi
	if [ "$2" == "stop" ]
	then
		/mnt/cf/usr/bin/mwr 0x8000002C 4 0x01000000
		echo "Done"
		exit 0
	fi
	printf "Invalid parameter %s\n" $2
    exit 3
  else
    echo "ERROR: Missing parameters"
    function_help
    exit 2
  fi
fi


