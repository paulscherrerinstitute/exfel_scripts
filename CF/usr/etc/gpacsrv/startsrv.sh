#!/bin/sh
#
# This is initialization script for GPAC hardware server for S7plc EPICS client library
#

EXE_FILE=/usr/bin/gpacsrv
ETC_PATH=/usr/etc/gpacsrv 

################################################################################
# Get ace file name
################################################################################
# Actually running revision 
revision=$(/mnt/cf/usr/bin/mrd 0x80003884 | tail -c 3)  
# Get ace file name
if [ $revision -eq 0 ]; then
	fname="golden.ace"
else
	for fname in /mnt/cf/fpga/prod$revision/*.ace
	do
		FREV=$(basename $fname)
	done
fi
# s7gpac driver test server ####################################################
# $BIN_FILE -p 51233 $ETC_PATH/test.rd $ETC_PATH/test.wr &

################################################################################
################################################################################
# SYS FPGA, GPAC SERVER 
################################################################################
################################################################################
# Asynchronous server for slow readout of CFG FPGA, etc.
$EXE_FILE -p 51234 $ETC_PATH/gpacserv.rd $ETC_PATH/gpacserv.wr &

################################################################################
################################################################################
# Button BPM ###################################################################
################################################################################
################################################################################
#
if [ "$FREV" = "butcav.ace" ] || [ "$FREV" = "but.ace" ] || [ "$FREV" = "but2.ace" ] || [ "$FREV" = "butren.ace" ] || [ "$FREV" = "ibfbcavb.ace" ]; then
  # BUTBPM1 OPERATION
  $EXE_FILE -p 51235 -i 1 -a 0x80A10074 -s $ETC_PATH/butbpm1.sub  $ETC_PATH/butbpm.rd $ETC_PATH/butbpm.wr &
  # BUTBPM1 SERVICE
  $EXE_FILE -p 51245 -s $ETC_PATH/butbpm1.sub $ETC_PATH/butserv.rd $ETC_PATH/butserv.wr &
  #
  # BUTBPM2 OPERATION
  $EXE_FILE -p 51236 -i 1 -a 0x80A20074 -s $ETC_PATH/butbpm2.sub $ETC_PATH/butbpm.rd $ETC_PATH/butbpm.wr &
  # BUTBPM2 SERVICE
  $EXE_FILE -p 51246 -s $ETC_PATH/butbpm2.sub $ETC_PATH/butserv.rd $ETC_PATH/butserv.wr &
fi
#
if [ "$FREV" = "but.ace" ]; then
  # BUTBPM3 OPERATION
  $EXE_FILE -p 51237 -i 2 -a 0x81210074 -s $ETC_PATH/butbpm3.sub $ETC_PATH/butbpm.rd $ETC_PATH/butbpm.wr &
  # BUTBPM3 SERVICE
  $EXE_FILE -p 51247 -s $ETC_PATH/butbpm3.sub $ETC_PATH/butserv.rd $ETC_PATH/butserv.wr &
  #
  # BUTBPM4 OPERATION
  $EXE_FILE -p 51238 -i 2 -a 0x81220074 -s $ETC_PATH/butbpm4.sub $ETC_PATH/butbpm.rd $ETC_PATH/butbpm.wr &
  # BUTBPM4 SERVICE
  $EXE_FILE -p 51248 -s $ETC_PATH/butbpm4.sub $ETC_PATH/butserv.rd $ETC_PATH/butserv.wr &
fi
#
################################################################################
################################################################################
# Cavity BPM  ##################################################################
################################################################################
################################################################################
#
if [ "$FREV" = "cav.ace" ] || [ "$FREV" = "ibfbcav.ace" ]; then
  # CAVBPM1
  $EXE_FILE -p 51236 -i 1 -a 0x80860004 -s $ETC_PATH/cavbpm1.sub $ETC_PATH/cavbpm.rd $ETC_PATH/cavbpm.wr &
fi
#
if [ "$FREV" = "cav.ace" ] || [ "$FREV" = "cav2.ace" ] || [ "$FREV" = "butcav.ace" ] || [ "$FREV" = "ibfbcav.ace" ] || [ "$FREV" = "ibfbcavb.ace" ]  || [ "$FREV" = "ibfbcav2.ace" ]; then
  # CAVBPM2
  $EXE_FILE -p 51238 -i 2 -a 0x81060004 -s $ETC_PATH/cavbpm2.sub $ETC_PATH/cavbpm.rd $ETC_PATH/cavbpm.wr &
fi
#
################################################################################
################################################################################
# Re-entrant BPM  ##############################################################
################################################################################
################################################################################
#
# RENBPM1 - never exists in currently installed configurations
# $EXE_FILE -p 51236 -i 1 -a 0x80860004 -s $ETC_PATH/renbpm1.sub $ETC_PATH/renbpm.rd $ETC_PATH/renbpm.wr &
#
if [ "$FREV" = "butren.ace" ] || [ "$FREV" = "ren2.ace" ]; then
  # RENBPM2
  $EXE_FILE -p 51238 -i 2 -a 0x81060004 -s $ETC_PATH/renbpm2.sub $ETC_PATH/renbpm.rd $ETC_PATH/renbpm.wr &
fi
#
################################################################################
################################################################################
# IBFB      ####################################################################
################################################################################
################################################################################
#
# Naming convention
# file.rd       file.wr       filesub       SRV         DEV
# ibfbccom.rd   ibfbccom.wr   ibfbccom.sub  IBFBCCOM    IBFBCTRL
# ibfbctrl.rd   ibfbctrl.wr   ibfbctr1.sub  IBFBCTRL1   IBFBCTRL
# ibfbctrl.rd   ibfbctrl.wr   ibfbctr2.sub  IBFBCTRL2   IBFBCTRL
# ibfbcwav.rd   ibfbcwav.wr   ibfbctr1.sub  IBFBCWAV1   IBFBCTRL
# ibfbcwav.rd   ibfbcwav.wr   ibfbctr2.sub  IBFBCWAV2   IBFBCTRL
# 
# ibfbscom.rd   ibfbscom.wr   ibfbscom.sub  IBFBSCOM    IBFBSW
# ibfbsw.rd     ibfbsw.wr     ibfbsw1.sub   IBFBSW1     IBFBSW
# ibfbsw.rd     ibfbsw.wr     ibfbsw2.sub   IBFBSW2     IBFBSW
# 
# ibfbmcom.rd   ibfbmcom.wr   ibfbmcom.sub  IBFBMCOM    IBFBMON
# ibfbmon.rd    ibfbmon.wr    ibfbmon1.sub  IBFBMON1    IBFBMON
# ibfbmon.rd    ibfbmon.wr    ibfbmon2.sub  IBFBMON2    IBFBMON
#
# ibfbpcom.rd   ibfbpcom.wr   ibfbpcom.sub  IBFBPCOM    IBFBPLAY
# ibfbplay.rd   ibfbplay.wr   ibfbpla1.sub  IBFBPLAY1   IBFBPLAY
# ibfbplay.rd   ibfbplay.wr   ibfbpla2.sub  IBFBPLAY2   IBFBPLAY
# 
#
if [ "$FREV" = "ibfbctrl.ace" ]; then
  # IBFB CTRL ####################################################################
  $EXE_FILE -p 51235                    -s $ETC_PATH/ibfbccom.sub  $ETC_PATH/ibfbccom.rd $ETC_PATH/ibfbccom.wr &
  $EXE_FILE -p 51236 -i 1 -a 0x80A00200 -s $ETC_PATH/ibfbctr1.sub  $ETC_PATH/ibfbctrl.rd $ETC_PATH/ibfbctrl.wr &
  $EXE_FILE -p 51237 -s $ETC_PATH/ibfbctr1.sub  $ETC_PATH/ibfbcwav.rd $ETC_PATH/ibfbcwav.wr &
  $EXE_FILE -p 51238 -s $ETC_PATH/ibfbctr1.sub  $ETC_PATH/ibfbctab.rd $ETC_PATH/ibfbctab.wr &
  $EXE_FILE -p 51239 -s $ETC_PATH/ibfbctr1.sub  $ETC_PATH/ibfbcpat.rd $ETC_PATH/ibfbcpat.wr &
  $EXE_FILE -p 51240 -s $ETC_PATH/ibfbctr1.sub  $ETC_PATH/ibfbscan.rd $ETC_PATH/ibfbscan.wr &
  $EXE_FILE -p 51246 -i 2 -a 0x81200200 -s $ETC_PATH/ibfbctr2.sub  $ETC_PATH/ibfbctrl.rd $ETC_PATH/ibfbctrl.wr &
  $EXE_FILE -p 51247 -s $ETC_PATH/ibfbctr2.sub  $ETC_PATH/ibfbcwav.rd $ETC_PATH/ibfbcwav.wr &
  $EXE_FILE -p 51248 -s $ETC_PATH/ibfbctr2.sub  $ETC_PATH/ibfbctab.rd $ETC_PATH/ibfbctab.wr &
  $EXE_FILE -p 51249 -s $ETC_PATH/ibfbctr2.sub  $ETC_PATH/ibfbcpat.rd $ETC_PATH/ibfbcpat.wr &
  $EXE_FILE -p 51250 -s $ETC_PATH/ibfbctr2.sub  $ETC_PATH/ibfbscan.rd $ETC_PATH/ibfbscan.wr &
fi
#
if [ "$FREV" = "ibfbsw.ace" ]; then
  ## IBFB SWITCH ##################################################################
  $EXE_FILE -p 51235 -i 1 -s $ETC_PATH/ibfbscom.sub $ETC_PATH/ibfbscom.rd $ETC_PATH/ibfbscom.wr &
  $EXE_FILE -p 51236 -s $ETC_PATH/ibfbsw1.sub  $ETC_PATH/ibfbsw.rd   $ETC_PATH/ibfbsw.wr   &
  $EXE_FILE -p 51237 -s $ETC_PATH/ibfbsw2.sub  $ETC_PATH/ibfbsw.rd   $ETC_PATH/ibfbsw.wr   &
fi
#
if [ "$FREV" = "ibfbmon.ace" ]; then
  # IBFB MON #####################################################################
  $EXE_FILE -p 51235                    -s $ETC_PATH/ibfbmcom.sub  $ETC_PATH/ibfbmcom.rd $ETC_PATH/ibfbmcom.wr &
  $EXE_FILE -p 51236 -i 1 -a 0x80A00100 -s $ETC_PATH/ibfbmon1.sub  $ETC_PATH/ibfbmon.rd  $ETC_PATH/ibfbmon.wr  &
  $EXE_FILE -p 51237 -i 2 -a 0x81200100 -s $ETC_PATH/ibfbmon2.sub  $ETC_PATH/ibfbmon.rd  $ETC_PATH/ibfbmon.wr  &
fi
#
if [ "$FREV" = "ibfbplay.ace" ]; then
  # IBFB PLAYER ##################################################################
  $EXE_FILE -p 51235 -s $ETC_PATH/ibfbpcom.sub  $ETC_PATH/ibfbpcom.rd $ETC_PATH/ibfbpcom.wr &
  $EXE_FILE -p 51236 -s $ETC_PATH/ibfbpla1.sub  $ETC_PATH/ibfbplay.rd $ETC_PATH/ibfbplay.wr &
  $EXE_FILE -p 51237 -s $ETC_PATH/ibfbpla2.sub  $ETC_PATH/ibfbplay.rd $ETC_PATH/ibfbplay.wr &
fi
#
if [ "$FREV" = "ibfbcav.ace" ]; then
  # IBFB Cavity BPM ##############################################################
  $EXE_FILE -p 51239 -i 1 -s $ETC_PATH/ibfbcav.sub  $ETC_PATH/ibfbcav.rd $ETC_PATH/ibfbcav.wr &
fi
if [ "$FREV" = "ibfbcav2.ace" ]; then
  # IBFB Cavity BPM ##############################################################
  $EXE_FILE -p 51239 -i 1 -s $ETC_PATH/ibfbcav.sub  $ETC_PATH/ibfbcav.rd $ETC_PATH/ibfbcav.wr &
fi
if [ "$FREV" = "ibfbcavb.ace" ]; then
  # IBFB Cavity BPM ##############################################################
  # This is not ERROR - configuration files the same like for ibfbcav
  $EXE_FILE -p 51239 -i 1 -s $ETC_PATH/ibfbcav.sub  $ETC_PATH/ibfbcav.rd $ETC_PATH/ibfbcav.wr &
fi
