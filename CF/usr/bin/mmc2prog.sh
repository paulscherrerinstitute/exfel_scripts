#!/bin/sh
#
# Prepared by: Waldemar Koprek
#
# The scripts executes programming sequence for MMC2
#
# mmc2prog <programming_sequence>
# 
#   programming_sequence - is a chain of string for different 
#      programming actions. The allowed actions are:
#        sw0 - program software image 0 to SPI memory
#        sw1 - program software image 1 to SPI memory
#        fw0 - program firmware image 0 to SPI memory
#        fw1 - program firmware image 1 to SPI memory
#        fu0 - update FPGA with firmware 0 
#        fu1 - update FPGA with firmware 1 



function_help()
{
  echo "The scripts executes programming sequence for MMC2          "
  echo ""
  echo "mmc2prog.sh [-b] <programming_sequence>                     "
  echo "   "
  echo "  -b - optional parameter to run programming sequence in  "
  echo "       background                                         "
  echo "  programming_sequence - is a list of strings for different "
  echo "     programming actions. The allowed actions are:          "
  echo "       sw0 - program software image 0 to SPI memory         "
  echo "       sw1 - program software image 1 to SPI memory         "
  echo "       fw0 - program firmware image 0 to SPI memory         "
  echo "       fw1 - program firmware image 1 to SPI memory         "
  echo "       fu0 - update FPGA with firmware 0                    "
  echo "       fu1 - update FPGA with firmware 1                    "
  echo "       rst - hard reset of the MBU                          "
  echo 
  echo "Example: mmc2prog.sh sw0 fw0 fu0                            "
  echo 
}

#### Command execution ############################################################
function_program()
{
  case $1 in
    "fw0")
      echo "mmc2prog 0 /mnt/cf/fpga/mmc2_fw.dat" >> $2
      #mmc2prog 0 /mnt/cf/fpga/mmc2_fw.dat
      ;;
    "fw1")
      echo "mmc2prog 1 /mnt/cf/fpga/mmc2_fw.dat" >> $2
      #mmc2prog 1 /mnt/cf/fpga/mmc2_fw.dat
      ;;
    "sw0")
      echo "mmc2prog 2 /mnt/cf/fpga/mmc2_sw.bin" >> $2
      #mmc2prog 2 /mnt/cf/fpga/mmc2_sw.bin
      ;;
    "sw1")
      echo "mmc2prog 3 /mnt/cf/fpga/mmc2_sw.bin" >> $2
      #mmc2prog 3 /mnt/cf/fpga/mmc2_sw.bin
      ;;
    "fu0")
      echo "nohup sh -c \"sleep 10; mmc2prog 4\" &" >> $2
      #nohup sh -c "sleep 10; mmc2prog 4" &
      ;;
    "fu1")
      echo "nohup sh -c \"sleep 10; mmc2prog 5\" &" >> $2
      #nohup sh -c "sleep 10; mmc2prog 5" &
      ;;
    "rst")
      echo "nohup sh -c \"sleep 10; mmc2prog 6\" &" >> $2
      #nohup sh -c "sleep 10; mmc2prog 6" &
      ;;
    *)
      echo "Unknown action $1"
      return 1
  esac
  return 0
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

TMP_FILE="/tmp/mmc2tmp.sh"

bg=""

if [ "$#" -ge 1 ] 
then
  echo "#Programming sequence of the MMC2 firmware/software" > $TMP_FILE
  echo "# "  >> $TMP_FILE
  echo "#WARNING: Do not switch off the MBU during programming"  >> $TMP_FILE
  echo "# "  >> $TMP_FILE
  for var in "$@"
  do
    if [ "$var" == "-b" ]
    then
      bg="yes"
    else
      function_program $var $TMP_FILE
      retval=$?
      if [ $retval -ne 0 ] 
      then
        echo "ERROR: Invalid programming sequence" 
        exit 1
      fi
    fi
  done
  echo "sync"  >> $TMP_FILE
  chmod 755 $TMP_FILE
  if [ "$bg" == "yes" ]
  then
    echo "Run script $TMP_FILE in background"
    nohup $TMP_FILE > /mnt/cf/var/log/mmc2prog.log &
  else
    echo "Run script $TMP_FILE in foreground"
    $TMP_FILE
  fi
fi

