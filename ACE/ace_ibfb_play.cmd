setMode -acecf
addConfigDevice -size "generic" -name "ibfbplay" -path "."
addCollection -name "fpga"
addDesign -version 0 -name "ibfbplay"
addDeviceChain -index 0
addDevice -p 1 -file "../../../Board/GPAC2_1/SYS_FPGA/EXFEL_LINUX/sw/hw_gpac2_linux/download.bit"
addDevice -p 2 -file "../../../Board/GPAC2_1/BP_FPGA/EXFEL_IBFB_SW_MON/sw/hw/download.bit"
addDevice -p 3 -file "../../../Board/GPAC2_1/BPM_FPGA/EXFEL_IBFB_PLAYER/sw/hw/download.bit"
addDevice -p 4 -file "../../../Board/GPAC2_1/BPM_FPGA/EXFEL_IBFB_PLAYER/sw/hw/download.bit"
generate -active ibfbplay
quit
