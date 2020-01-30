setMode -acecf
addConfigDevice -size "generic" -name "but2" -path "."
addCollection -name "fpga"
addDesign -version 0 -name "but2"
addDeviceChain -index 0
addDevice -p 1 -file "../../../Board/GPAC2_1/SYS_FPGA/EXFEL_LINUX/sw/hw_gpac2_linux/download.bit"
addDevice -p 2 -file "../../../Board/GPAC2_1/BP_FPGA/EXFEL_BUT/sw/hw_bp_but/download.bit"
addDevice -p 3 -file "../../../Board/GPAC2_1/BPM_FPGA/EXFEL_BUT/sw/hw_bpm_but/download.bit"
addDevice -p 4 -file "C:/Xilinx/14.7/ISE_DS/ISE/virtex5/data/xc5vfx70t.bsd"
addDevice -p 5 -file "../../../Board/ADC12FL/Default/design/impl/adc12fl_fpga.bit"
generate -active but2
quit