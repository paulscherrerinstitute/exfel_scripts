#!/bin/sh
# The scripts downloads from the host xfelpsibpm1.desy.de a file with the
# actual firmware versions and compares with the running ones on the local system
# 

return_string ()
{
mystr=""
val=$(/mnt/cf/usr/bin/mrd $1 $2 1)
p=${val/*$1/$1}
p=${p:22}
n=0
for i in $p 
do
        if [ $n -eq $2 ]; then
 	       return
        fi
        n=$(($n+1))
        mystr=$(printf "%s\x$i" $mystr)
done
echo $mystr
}
                                                                        

FILE_VER=/mnt/cf/fpga/versions.txt
FILE_WWW=http://xfelpsibpm1.desy.de/versions.txt
# file location on the server is /var/www/html/versions.txt
RED='\033[0;31m'
NC='\033[0m'

echo "Downloading the actual FW/SW versions from $FILE_WWW"
wget $FILE_WWW -O $FILE_VER

if [ $? -eq 1 ] ; then
	echo "ERROR: Cannot download $FILE_WWW"
	echo "Firmware/Software check aborted"
	mwr $REG_DIFF_ADDR 4 0x00001000
	return
fi
# read actual firmware versions from the file
while read p; do
	if [ ${#p} -gt 3 ]; then
		set $p
		eval $1="\"$2 $3\""
	fi
done < $FILE_VER

# compare firmware versions with the running ones

SYS_FW_ADDR=0x80000000
CFG_FW_ADDR=0x80003800
BP_FW_ADDR=0x80100000
BPM1_FW_ADDR=0x80800000
BPM2_FW_ADDR=0x81000000
MMC2_FW_ADDR=0x80003C00
REG_DIFF_ADDR=0x800030C0

# CFG FPGA
rd_str=$(mrd $((CFG_FW_ADDR+0x50)))
CFG_FW_YEAR="0x${rd_str##* }"
rd_str=$(mrd $((CFG_FW_ADDR+0x54)))
CFG_FW_MONTH="0x${rd_str##* }"
rd_str=$(mrd $((CFG_FW_ADDR+0x58)))
CFG_FW_DAY="0x${rd_str##* }"
rd_str=$(mrd $((CFG_FW_ADDR+0x5C)))
CFG_FW_HOUR="0x${rd_str##* }"
rd_str=$(mrd $((CFG_FW_ADDR+0x60)))
CFG_FW_MINUTE="0x${rd_str##* }"

rd_str=$(mrd $((CFG_FW_ADDR+0x140)))
CFG_SW_YEAR="0x${rd_str##* }"
rd_str=$(mrd $((CFG_FW_ADDR+0x144)))
CFG_SW_MONTH="0x${rd_str##* }"
rd_str=$(mrd $((CFG_FW_ADDR+0x148)))
CFG_SW_DAY="0x${rd_str##* }"
rd_str=$(mrd $((CFG_FW_ADDR+0x14C)))
CFG_SW_HOUR="0x${rd_str##* }"
rd_str=$(mrd $((CFG_FW_ADDR+0x150)))
CFG_SW_MINUTE="0x${rd_str##* }"

# SYS FPGA 
rd_str=$(mrd $((SYS_FW_ADDR+0x04)))
SYS_FW_YEAR="0x${rd_str##* }"
rd_str=$(mrd $((SYS_FW_ADDR+0x08)))
SYS_FW_MONTH="0x${rd_str##* }"
rd_str=$(mrd $((SYS_FW_ADDR+0x0C)))
SYS_FW_DAY="0x${rd_str##* }"
rd_str=$(mrd $((SYS_FW_ADDR+0x10)))
SYS_FW_HOUR="0x${rd_str##* }"
rd_str=$(mrd $((SYS_FW_ADDR+0x14)))
SYS_FW_MINUTE="0x${rd_str##* }"

rd_str=$(mrd $((SYS_FW_ADDR+0x18)))
SYS_SW_YEAR="0x${rd_str##* }"
rd_str=$(mrd $((SYS_FW_ADDR+0x1C)))
SYS_SW_MONTH="0x${rd_str##* }"
rd_str=$(mrd $((SYS_FW_ADDR+0x20)))
SYS_SW_DAY="0x${rd_str##* }"
rd_str=$(mrd $((SYS_FW_ADDR+0x24)))
SYS_SW_HOUR="0x${rd_str##* }"
rd_str=$(mrd $((SYS_FW_ADDR+0x28)))
SYS_SW_MINUTE="0x${rd_str##* }"


# BP FPGA
rd_str=$(mrd $((BP_FW_ADDR+0x04)))
BP_FW_YEAR="0x${rd_str##* }"
rd_str=$(mrd $((BP_FW_ADDR+0x08)))
BP_FW_MONTH="0x${rd_str##* }"
rd_str=$(mrd $((BP_FW_ADDR+0x0C)))
BP_FW_DAY="0x${rd_str##* }"
rd_str=$(mrd $((BP_FW_ADDR+0x10)))
BP_FW_HOUR="0x${rd_str##* }"
rd_str=$(mrd $((BP_FW_ADDR+0x14)))
BP_FW_MINUTE="0x${rd_str##* }"

rd_str=$(mrd $((BP_FW_ADDR+0x18)))
BP_SW_YEAR="0x${rd_str##* }"
rd_str=$(mrd $((BP_FW_ADDR+0x1C)))
BP_SW_MONTH="0x${rd_str##* }"
rd_str=$(mrd $((BP_FW_ADDR+0x20)))
BP_SW_DAY="0x${rd_str##* }"
rd_str=$(mrd $((BP_FW_ADDR+0x24)))
BP_SW_HOUR="0x${rd_str##* }"
rd_str=$(mrd $((BP_FW_ADDR+0x28)))
BP_SW_MINUTE="0x${rd_str##* }"


# BPM1 FPGA  
rd_str=$(mrd $((BPM1_FW_ADDR+0x04)))
BPM1_FW_YEAR="0x${rd_str##* }"
rd_str=$(mrd $((BPM1_FW_ADDR+0x08)))
BPM1_FW_MONTH="0x${rd_str##* }"
rd_str=$(mrd $((BPM1_FW_ADDR+0x0C)))
BPM1_FW_DAY="0x${rd_str##* }"
rd_str=$(mrd $((BPM1_FW_ADDR+0x10)))
BPM1_FW_HOUR="0x${rd_str##* }"
rd_str=$(mrd $((BPM1_FW_ADDR+0x14)))
BPM1_FW_MINUTE="0x${rd_str##* }"

rd_str=$(mrd $((BPM1_FW_ADDR+0x18)))
BPM1_SW_YEAR="0x${rd_str##* }"
rd_str=$(mrd $((BPM1_FW_ADDR+0x1C)))
BPM1_SW_MONTH="0x${rd_str##* }"
rd_str=$(mrd $((BPM1_FW_ADDR+0x20)))
BPM1_SW_DAY="0x${rd_str##* }"
rd_str=$(mrd $((BPM1_FW_ADDR+0x24)))
BPM1_SW_HOUR="0x${rd_str##* }"
rd_str=$(mrd $((BPM1_FW_ADDR+0x28)))
BPM1_SW_MINUTE="0x${rd_str##* }"
	
# BPM2 FPGA
rd_str=$(mrd $((BPM2_FW_ADDR+0x04)))
BPM2_FW_YEAR="0x${rd_str##* }"
rd_str=$(mrd $((BPM2_FW_ADDR+0x08)))
BPM2_FW_MONTH="0x${rd_str##* }"
rd_str=$(mrd $((BPM2_FW_ADDR+0x0C)))
BPM2_FW_DAY="0x${rd_str##* }"
rd_str=$(mrd $((BPM2_FW_ADDR+0x10)))
BPM2_FW_HOUR="0x${rd_str##* }"
rd_str=$(mrd $((BPM2_FW_ADDR+0x14)))
BPM2_FW_MINUTE="0x${rd_str##* }"

rd_str=$(mrd $((BPM2_FW_ADDR+0x18)))
BPM2_SW_YEAR="0x${rd_str##* }"
rd_str=$(mrd $((BPM2_FW_ADDR+0x1C)))
BPM2_SW_MONTH="0x${rd_str##* }"
rd_str=$(mrd $((BPM2_FW_ADDR+0x20)))
BPM2_SW_DAY="0x${rd_str##* }"
rd_str=$(mrd $((BPM2_FW_ADDR+0x24)))
BPM2_SW_HOUR="0x${rd_str##* }"
rd_str=$(mrd $((BPM2_FW_ADDR+0x28)))
BPM2_SW_MINUTE="0x${rd_str##* }"

# MMC2
# FW
MMC2_FW_RB=$(return_string 0x80003C00 4)
# SW
MMC2_SW_RB=$(return_string 0x80003C04 4)

# Get actual revision 
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

# Assign FW/SW revisions to the corresponding FPGA chips
case $FREV in
	"butcav.ace")
		BP_FW_CMP=$BP_FW_BBC
		BP_SW_CMP=$BP_SW_BBC
		BPM1_FW_CMP=$BPM_FW_B
		BPM1_SW_CMP=$BPM_SW_B
		BPM2_FW_CMP=$BPM_FW_C
		BPM2_SW_CMP=$BPM_SW_C
		;;
	"but.ace")
		BP_FW_CMP=$BP_FW_BBBB
		BP_SW_CMP=$BP_SW_BBBB
		BPM1_FW_CMP=$BPM_FW_B
		BPM1_SW_CMP=$BPM_SW_B
		BPM2_FW_CMP=$BPM_FW_B
		BPM2_SW_CMP=$BPM_SW_B
		;;
	"but2.ace")
		BP_FW_CMP=$BP_FW_BB
		BP_SW_CMP=$BP_SW_BB
		BPM1_FW_CMP=$BPM_FW_B
		BPM1_SW_CMP=$BPM_SW_B
		BPM2_FW_CMP=""
		BPM2_SW_CMP=""
		;;
	"butren.ace")
		BP_FW_CMP=$BP_FW_BBR
		BP_SW_CMP=$BP_SW_BBR
		BPM1_FW_CMP=$BPM_FW_B
		BPM1_SW_CMP=$BPM_SW_B
		BPM2_FW_CMP=$BPM_FW_R
		BPM2_SW_CMP=$BPM_SW_R
		;;
	"cav.ace")
		BP_FW_CMP=$BP_FW_CC
		BP_SW_CMP=$BP_SW_CC
		BPM1_FW_CMP=$BPM_FW_C
		BPM1_SW_CMP=$BPM_SW_C
		BPM2_FW_CMP=$BPM_FW_C
		BPM2_SW_CMP=$BPM_SW_C
		;;
	"cav2.ace")
		BP_FW_CMP=$BP_FW_CC
		BP_SW_CMP=$BP_SW_CC
		BPM1_FW_CMP=""
		BPM1_SW_CMP=""
		BPM2_FW_CMP=$BPM_FW_C
		BPM2_SW_CMP=$BPM_SW_C
		;;
	"ibfbcav.ace")
		BP_FW_CMP=$BP_FW_CC
		BP_SW_CMP=$BP_SW_CC
		BPM1_FW_CMP=$BPM_FW_IC
		BPM1_SW_CMP=$BPM_SW_IC
		BPM2_FW_CMP=$BPM_FW_IC
		BPM2_SW_CMP=$BPM_SW_IC
		;;
	"ibfbcavb.ace")
		BP_FW_CMP=$BP_FW_BBC
		BP_SW_CMP=$BP_SW_BBC
		BPM1_FW_CMP=$BPM_FW_B
		BPM1_SW_CMP=$BPM_SW_B
		BPM2_FW_CMP=$BPM_FW_IC
		BPM2_SW_CMP=$BPM_SW_IC
		;;
	"ibfbcav2.ace")
		BP_FW_CMP=$BP_FW_CC
		BP_SW_CMP=$BP_SW_CC
		BPM1_FW_CMP=""
		BPM1_SW_CMP=""
		BPM2_FW_CMP=$BPM_FW_IC
		BPM2_SW_CMP=$BPM_SW_IC
		;;
	"ren2.ace")
		BP_FW_CMP=$BP_FW_R
		BP_SW_CMP=$BP_SW_R
		BPM1_FW_CMP=""
		BPM1_SW_CMP=""
		BPM2_FW_CMP=$BPM_FW_R
		BPM2_SW_CMP=$BPM_SW_R
		;;
	"golden.ace")
		BP_FW_CMP=""
		BP_SW_CMP=""
		BPM1_FW_CMP=""
		BPM1_SW_CMP=""
		BPM2_FW_CMP=""
		BPM2_SW_CMP=""
		;;
	*)
		BP_FW_CMP="Unknown version"
		BP_SW_CMP="Unknown version"
		BPM1_SW_CMP="Unknown version"
		BPM1_SW_CMP="Unknown version"
		BPM2_SW_CMP="Unknown version"
		BPM2_SW_CMP="Unknown version"
		;;
esac

RD=0

# Print results
echo
echo "Generated on $(date)"
printf "Running revision: %d\n" $revision
printf "Detected ACE file: %s\n" $FREV
echo
echo   "|______|____________Running_________________|___________Actual___________________|"
printf " FPGA   FW Date           SW Date            FW Date            SW Date\n"

#______________CFG______________________#
FW=$(printf "%4d.%02d.%02d %02d:%02d" $CFG_FW_YEAR $CFG_FW_MONTH $CFG_FW_DAY $CFG_FW_HOUR $CFG_FW_MINUTE)
SW=$(printf "%4d.%02d.%02d %02d:%02d" $CFG_SW_YEAR $CFG_SW_MONTH $CFG_SW_DAY $CFG_SW_HOUR $CFG_SW_MINUTE)
if [ "$FW" = "$CFG_FW" ] && [ "$SW" = "$CFG_SW" ]; then
	echo -e " CFG    $FW  $SW   $CFG_FW   $CFG_SW"
else
	if [ "$FW" != "$CFG_FW" ]; then RD=$((RD+0x800)); fi
	if [ "$SW" != "$CFG_SW" ]; then RD=$((RD+0x400)); fi
	echo -e " CFG    ${RED}$FW  $SW   $CFG_FW   $CFG_SW${NC}"
fi

#______________SYS_____________________#
FW=$(printf "%4d.%02d.%02d %02d:%02d" $SYS_FW_YEAR $SYS_FW_MONTH $SYS_FW_DAY $SYS_FW_HOUR $SYS_FW_MINUTE)
SW=$(printf "%4d.%02d.%02d %02d:%02d" $SYS_SW_YEAR $SYS_SW_MONTH $SYS_SW_DAY $SYS_SW_HOUR $SYS_SW_MINUTE)
if [ "$FW" = "$SYS_FW" ] && [ "$SW" = "$SYS_SW" ]; then
	echo -e " SYS    $FW  $SW   $SYS_FW   $SYS_SW"
else
	if [ "$FW" != "$SYS_FW" ]; then RD=$((RD+0x200)); fi
	if [ "$SW" != "$SYS_SW" ]; then RD=$((RD+0x100)); fi
	echo -e " SYS    ${RED}$FW  $SW   $SYS_FW   $SYS_SW${NC}"
fi

#_________________BP___________________#
FW=$(printf "%4d.%02d.%02d %02d:%02d" $BP_FW_YEAR $BP_FW_MONTH $BP_FW_DAY $BP_FW_HOUR $BP_FW_MINUTE)
SW=$(printf "%4d.%02d.%02d %02d:%02d" $BP_SW_YEAR $BP_SW_MONTH $BP_SW_DAY $BP_SW_HOUR $BP_SW_MINUTE)

if [ "$BP_FW_CMP" = "" ]; then
      echo -e " BP     Not configured"
else
    if [ "$FW" = "$BP_FW_CMP" ] && [ "$SW" = "$BP_SW_CMP" ]; then
      echo -e " BP     $FW  $SW   $BP_FW_CMP   $BP_SW_CMP"
    else
      if [ "$FW" != "$BP_FW" ]; then RD=$((RD+0x080)); fi
      if [ "$SW" != "$BP_SW" ]; then RD=$((RD+0x040)); fi
      echo -e " BP     ${RED}$FW  $SW   $BP_FW_CMP   $BP_SW_CMP${NC}"
    fi
fi

#_________________BPM1_________________#
FW=$(printf "%4d.%02d.%02d %02d:%02d" $BPM1_FW_YEAR $BPM1_FW_MONTH $BPM1_FW_DAY $BPM1_FW_HOUR $BPM1_FW_MINUTE)
SW=$(printf "%4d.%02d.%02d %02d:%02d" $BPM1_SW_YEAR $BPM1_SW_MONTH $BPM1_SW_DAY $BPM1_SW_HOUR $BPM1_SW_MINUTE)

if [ "$BPM1_FW_CMP" = "" ]; then
      echo -e " BPM1   Not configured"
      RD=$((RD+0x0200000))
      RD=$((RD+0x0100000))
else
    if [ "$FW" = "$BPM1_FW_CMP" ] && [ "$SW" = "$BPM1_SW_CMP" ]; then
      echo -e " BPM1   $FW  $SW   $BPM1_FW_CMP   $BPM1_SW_CMP"
    else
      if [ "$FW" != "$BPM1_FW_CMP" ]; then RD=$((RD+0x020)); fi
      if [ "$SW" != "$BPM1_SW_CMP" ]; then RD=$((RD+0x010)); fi
      echo -e " BPM1   ${RED}$FW  $SW   $BPM1_FW_CMP   $BPM1_SW_CMP${NC}"
    fi
fi

#_________________BPM2_________________#
FW=$(printf "%4d.%02d.%02d %02d:%02d" $BPM2_FW_YEAR $BPM2_FW_MONTH $BPM2_FW_DAY $BPM2_FW_HOUR $BPM2_FW_MINUTE)
SW=$(printf "%4d.%02d.%02d %02d:%02d" $BPM2_SW_YEAR $BPM2_SW_MONTH $BPM2_SW_DAY $BPM2_SW_HOUR $BPM2_SW_MINUTE)
  
if [ "$BPM2_FW_CMP" = "" ]; then
      echo -e " BPM2   Not configured"
      RD=$((RD+0x0080000))
      RD=$((RD+0x0040000))
else
    if [ "$FW" = "$BPM2_FW_CMP" ] && [ "$SW" = "$BPM2_SW_CMP" ]; then
      echo -e " BPM2   $FW  $SW   $BPM2_FW_CMP   $BPM2_SW_CMP"
    else
      if [ "$FW" != "$BPM2_FW_CMP" ]; then RD=$((RD+0x008)); fi
      if [ "$SW" != "$BPM2_SW_CMP" ]; then RD=$((RD+0x004)); fi
      echo -e " BPM2   ${RED}$FW  $SW   $BPM2_FW_CMP   $BPM2_SW_CMP${NC}"
    fi
fi
#_________________MMC2_________________#
FW=$MMC2_FW_RB
SW=$MMC2_SW_RB

if [ "${FW:0:4}" = "${MMC2_FW:0:4}" ] && [ "${SW:0:4}" = "${MMC2_SW:0:4}" ]; then
	echo -e " MMC2   $FW              $SW               $MMC2_FW              $MMC2_SW"
else
	if [ "${FW:0:4}" != "${MMC2_FW:0:4}" ]; then RD=$((RD+0x002)); fi
	if [ "${SW:0:4}" != "${MMC2_SW:0:4}" ]; then RD=$((RD+0x001)); fi
	echo -e " MMC2   ${RED}$FW              $SW               $MMC2_FW              $MMC2_SW${NC}"
fi

# Write difference to the register
RD=$((RD+0x2000))
mwr $REG_DIFF_ADDR 4 $RD

 