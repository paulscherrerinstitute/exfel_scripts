setMode -acecf
addConfigDevice -size "generic" -name "golden" -path "."
addCollection -name "fpga"
addDesign -version 0 -name "golden"
addDeviceChain -index 0
addDevice -p 1 -file "../../../Board/GPAC2_1/SYS_FPGA/EXFEL_LINUX/sw/hw_gpac2_linux/download.bit"
addDevice -p 2 -file "C:/Xilinx/14.7/ISE_DS/ISE/spartan3a/data/xc3s700a_fg400.bsd"
addDevice -p 3 -file "C:/Xilinx/14.7/ISE_DS/ISE/virtex5/data/xc5vfx70t.bsd"
addDevice -p 4 -file "C:/Xilinx/14.7/ISE_DS/ISE/virtex5/data/xc5vfx70t.bsd"
generate -active golden
quit