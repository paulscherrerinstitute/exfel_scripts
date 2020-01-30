#!/bin/sh

SYS_FW_ADDR=0x80000000
CFG_FW_ADDR=0x80003800
BP_FW_ADDR=0x80100000
BPM1_FW_ADDR=0x80800000
BPM2_FW_ADDR=0x81000000

# CFG FPGA
rd_str=$(mrd $CFG_FW_ADDR+0x14)

CFG_FW=${rd_str##* }
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
rd_str=$(mrd $SYS_FW_ADDR)
SYS_FW=${rd_str##* }

SYS_FW=${rd_str##* }
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
rd_str=$(mrd $BP_FW_ADDR)
BP_FW=${rd_str##* }

BP_FW=${rd_str##* }
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
rd_str=$(mrd $BPM1_FW_ADDR)
BPM1_FW=${rd_str##* }

BPM1_FW=${rd_str##* }
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
rd_str=$(mrd $BPM2_FW_ADDR)
BPM2_FW=${rd_str##* }

BPM2_FW=${rd_str##* }
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

echo "Generated on $(date)"
echo 
printf "FPGA   Firmware    FW Date           SW Date\n"
printf "CFG    0x%s  " $CFG_FW 
printf "%4d.%02d.%02d %02d:%02d  " $CFG_FW_YEAR $CFG_FW_MONTH $CFG_FW_DAY $CFG_FW_HOUR $CFG_FW_MINUTE
printf "%4d.%02d.%02d %02d:%02d\n" $CFG_SW_YEAR $CFG_SW_MONTH $CFG_SW_DAY $CFG_SW_HOUR $CFG_SW_MINUTE
printf "SYS    0x%s  " $SYS_FW 
printf "%4d.%02d.%02d %02d:%02d  " $SYS_FW_YEAR $SYS_FW_MONTH $SYS_FW_DAY $SYS_FW_HOUR $SYS_FW_MINUTE
printf "%4d.%02d.%02d %02d:%02d\n" $SYS_SW_YEAR $SYS_SW_MONTH $SYS_SW_DAY $SYS_SW_HOUR $SYS_SW_MINUTE
if [ "$BP_FW" == "A5A5A5A5" ]
then
  printf "BP     Not configured\n"
else
  printf "BP     0x%s  " $BP_FW 
  printf "%4d.%02d.%02d %02d:%02d  " $BP_FW_YEAR $BP_FW_MONTH $BP_FW_DAY $BP_FW_HOUR $BP_FW_MINUTE
  printf "%4d.%02d.%02d %02d:%02d\n" $BP_SW_YEAR $BP_SW_MONTH $BP_SW_DAY $BP_SW_HOUR $BP_SW_MINUTE
fi
if [ "$BPM1_FW" == "A5A5A5A5" ]
then
  printf "BPM1   Not configured\n"
else
  printf "BPM1   0x%s  " $BPM1_FW 
  printf "%4d.%02d.%02d %02d:%02d  " $BPM1_FW_YEAR $BPM1_FW_MONTH $BPM1_FW_DAY $BPM1_FW_HOUR $BPM1_FW_MINUTE
  printf "%4d.%02d.%02d %02d:%02d\n" $BPM1_SW_YEAR $BPM1_SW_MONTH $BPM1_SW_DAY $BPM1_SW_HOUR $BPM1_SW_MINUTE
fi  
if [ "$BPM2_FW" == "A5A5A5A5" ]
then
  printf "BPM2   Not configured\n"
else
  printf "BPM2   0x%s  " $BPM2_FW 
  printf "%4d.%02d.%02d %02d:%02d  " $BPM2_FW_YEAR $BPM2_FW_MONTH $BPM2_FW_DAY $BPM2_FW_HOUR $BPM2_FW_MINUTE
  printf "%4d.%02d.%02d %02d:%02d\n" $BPM2_SW_YEAR $BPM2_SW_MONTH $BPM2_SW_DAY $BPM2_SW_HOUR $BPM2_SW_MINUTE
fi
printf "\nLinux version:\n"
cat /etc/version
echo 
