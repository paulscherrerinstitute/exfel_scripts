#!/bin/sh
#
# Prepared by: Waldemar Koprek
# 
# Updates:
# 2015.10.15
#      - added hardware revision number
#      - output redirected to /mnt/cf/var/log/initpgac.log
#      - previous log file copied to /mnt/cf/var/log/initprev.log
#      - added actual date
# 2015.10.16
#      - added list of NTP servers to be prompted
# 2017.04.12
#      - added version check from web server on xfelpsibpm1.desy.de

CF_PATH=/mnt/cf
LOG_FILE=/mnt/cf/var/log/initgpac.log
LOG_PREV=/mnt/cf/var/log/initprev.log

################################################################################
# Rename log file from previous booting
################################################################################
if [ -f $LOG_FILE ]
then
    cp $LOG_FILE $LOG_PREV
fi
 
echo "GPAC initialization..." > $LOG_FILE
echo "Previous log file saved to" $LOG_PREV >> $LOG_FILE
################################################################################
# Start watchdog 
################################################################################
echo "Starting watchdog..." >> $LOG_FILE
/bin/watchdog -T 30 -t 2 /dev/watchdog
echo "done" >> $LOG_FILE


################################################################################
# Configure host keys for SSH protocol
# The host keys have to be generated only once and then re-used after restart
# Copy the generated key files to /mnt/cf/etc/dropbear with some FAT16 compliant
# names. If the files exist at the next start then do not regenerate them
################################################################################
INIT_SSH=/mnt/cf/usr/bin/initssh.sh

if test -f $INIT_SSH
then
  $INIT_SSH >> $LOG_FILE
else
  echo "WARNING: SSH protocol not initialized" >> $LOG_FILE
fi

################################################################################
# Check hardware configuration revision
# If hardware revision is 0 (the golden image) do not do further initialization
# because this might be the cause of loading the golden configuration
################################################################################

revision=$(/mnt/cf/usr/bin/mrd 0x80003884 | tail -c 3)  
printf "Hardware revision number: %d\n" $revision >> $LOG_FILE 

if [ $revision -eq 0 ]
then
  echo "Acknowledge sent to CFG FPGA" >> $LOG_FILE
  mwr 0x80003088 4 1
  echo "WARNING: Golden image is loaded. Initialization aborted." >> $LOG_FILE
  exit 0
fi

################################################################################
# Synchronize local clock
# Go through the list of NTP servers from file /mnt/cf/usr/etc/ntp.cfg
# and use the first responding
################################################################################
echo "Synchronization with NTP server..." >> $LOG_FILE

NTP_CONF=/mnt/cf/usr/etc/ntp.cfg

# The ntpclient has a bug, it always returns 0 (success)
# Use 'date' function to check the year
# If the year is still 1970 then the last synchronization failed

if test -f $NTP_CONF
then
  for p in `cat $NTP_CONF`;do
    printf "  trying %s..." $p >> $LOG_FILE
    /bin/ntpclient -h $p -s -c 1 -i 1
    year=$(date | tail -c 5)
    if [ $year -eq 1970 ] 
    then
      printf "failed\n" >> $LOG_FILE
    else
      printf "succeeded\n" >> $LOG_FILE
      break
    fi
  done
  myhour=$(date | sed '/:/s// /g' | awk '{print $4}')
  myminute=$(date | sed '/:/s// /g' | awk '{print $5}')
  myseconds=$(date | sed '/:/s// /g' | awk '{print $5}')
  myhour=$(expr $myhour + 2)
  date $myhour:$myminute:$myseconds
else
  year=$(date | tail -c 5)
  echo "ERROR: file ${NTP_CONF} does not exists" >> $LOG_FILE
fi  

if [ $year -eq 1970 ] 
then
  echo "ERROR: no NTP server found" >> $LOG_FILE
else
  printf "done\n" >> $LOG_FILE
fi 

echo "Actual date is: " $(date) >> $LOG_FILE

################################################################################
# copy files from CF card to RAM in order to speed up the execution
################################################################################
echo "Copying files from CF card to RAM..."  >> $LOG_FILE
echo "  cp -r $CF_PATH/etc/* /etc"  >> $LOG_FILE
cp -r $CF_PATH/etc/* /etc
echo "  cp -r $CF_PATH/usr/etc/* /usr/etc" >> $LOG_FILE
mkdir -p /usr/etc
cp -r $CF_PATH/usr/etc/* /usr/etc
echo "  cp -r $CF_PATH/usr/bin/* /usr/bin" >> $LOG_FILE
mkdir -p /usr/bin
cp -r $CF_PATH/usr/bin/* /usr/bin
echo "  cp -r $CF_PATH/usr/local/* /usr/local" >> $LOG_FILE

################################################################################
# Libraries handlig
# Due to complex names of the libraries it is not possible to store them on FAT16
# on the CF card. The have to be stored on the CF card with different names
################################################################################
mkdir -p /usr/local/lib
if [ -f $CF_PATH/usr/local/lib/libzmq.so ]
then
  cp $CF_PATH/usr/local/lib/libzmq.so /usr/local/lib/libzmq.so.5
fi
#logger "  mkdir /etc/goahead"
#mkdir /etc/goahead
#logger "  cp -r $CF_PATH/etc/goahead/* /etc/goahead"
#cp -r $CF_PATH/etc/goahead/* /etc/goahead
#logger "  mkdir /etc/xc3sprog"
#mkdir /etc/xc3sprog
#logger "  cp -r $CF_PATH/etc/xc3sprog/* /etc/xc3sprog"
#cp -r $CF_PATH/etc/xc3sprog/* /etc/xc3sprog
echo "done"    >> $LOG_FILE

################################################################################
# Install gpacbpm kernel module to receive interrupts from BPM1 and BPM2 FPGA
# The module install two devices: /dev/gpacbpm1 and /dev/gpacbpm2
# The module notifies applications about interrupts with signal SIGGPAC=44 
# The application has only to open the device
################################################################################
echo "Starting kernel module gpacbpm.ko..."  >> $LOG_FILE
insmod /lib/modules/3.6.0\+/extra/gpacbpm.ko
echo "done" >> $LOG_FILE

################################################################################
# Init GoAhead webserver
################################################################################

SRC_PATH=/mnt/cf/www
DST_PATH=/home/www
LOG_PATH=/mnt/cf/var/log

echo "Starting GoAhead web server..." >> $LOG_FILE

echo "  update $DST_PATH from $SRC_PATH..." >> $LOG_FILE
mkdir $DST_PATH
# copy www files from CF to RAM
cp -r $SRC_PATH/cgi-bin $DST_PATH
cp -r $SRC_PATH/css $DST_PATH
cp -r $SRC_PATH/images $DST_PATH
cp -r $SRC_PATH/include $DST_PATH
cp -r $SRC_PATH/js $DST_PATH
cp $SRC_PATH/*.htm $DST_PATH
cp $SRC_PATH/*.ico $DST_PATH
mv $DST_PATH/index.htm $DST_PATH/index.html
# Link doc folder
# The folder /mnt/cf/www/doc is too big for RAM
ln -s $SRC_PATH/doc $DST_PATH/doc
# Link log files
ln -s $LOG_PATH/updates $DST_PATH/doc/updates 

/usr/bin/goahead --home /usr/etc/goahead /home/www &
echo "done" >> $LOG_FILE

################################################################################
# Check version of the running firmware and software
# The script downloads the newest version from http://xfelpsibpm1.desy.de/versions.txt
# and compares with the local FW/SW version. 
# The result is saved under address 0x800030C0
################################################################################
echo "FW/SW version check..." >> $LOG_FILE

if [ -f /usr/bin/ver_cmp.sh ]
then
    mkdir -p /mnt/cf/var/log
    /usr/bin/ver_cmp.sh > /mnt/cf/var/log/ver_cmp.log
fi
echo "done" >> $LOG_FILE

################################################################################
# If there is file /usr/etc/gpac/srv/startsrv.sh
# then execute it
# startsrv.sh start all GPAC hardware server for S2plc EPICS driver
################################################################################
echo "Starting s7gpac servers..." >> $LOG_FILE

if [ -f /usr/etc/gpacsrv/startsrv.sh ]
then
    source /usr/etc/gpacsrv/startsrv.sh 
fi
echo "done" >> $LOG_FILE

################################################################################
# Configuration acknowledge to CFG FPGA. Tell CFG FPGA that Linux has started
# successfully
################################################################################

echo "Acknowledge sent to CFG FPGA" >> $LOG_FILE
mwr 0x80003088 4 1

################################################################################
# End of initialization.
################################################################################

echo "GPAC initialization done" >> /dev/kmsg
