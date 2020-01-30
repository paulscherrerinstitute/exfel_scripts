setMode -acecf
addConfigDevice -size "generic" -name "ibfbmon" -path "."
addCollection -name "fpga"
addDesign -version 0 -name "ibfbmon"
addDeviceChain -index 0
addDevice -p 1 -file "../../../Board/GPAC2_1/SYS_FPGA/EXFEL_LINUX/sw/hw_gpac2_linux/download.bit"
addDevice -p 2 -file "../../../Board/GPAC2_1/BP_FPGA/EXFEL_IBFB_SW_MON/sw/hw/download.bit"
addDevice -p 3 -file "../../../Board/GPAC2_1/BPM_FPGA/EXFEL_IBFB_MON/sw/hw/download.bit"
addDevice -p 4 -file "../../../Board/GPAC2_1/BPM_FPGA/EXFEL_IBFB_MON/sw/hw/download.bit"
addDevice -p 5 -file "../../../Board/ADC12FL/Default/design/impl/adc12fl_fpga.bit"
addDevice -p 6 -file "../../../Board/ADC12FL/Default/design/impl/adc12fl_fpga.bit"
generate -active ibfbmon
quit