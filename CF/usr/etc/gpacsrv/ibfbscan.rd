#  ---   Button BPM READ -----
# Rules:
#   base_addr is in hex format or mnemonic
#   offset is in hex format
#   length is unsigned decimal number in 32-bit words
# base_addr offset     length  # buff_addr - comment
# read/write section - is exactly the same as in the corresponding .wr file
BPM_FPGA     0x00200000	    1   # 0x0000 - :whatever
# read only section
BPM_FPGA     0x00010800	   16   # 0x0000 - :FF-SCAN-KICK
BPM_FPGA     0x00010840	   16   # 0x0040 - :FF-SCAN-K1-BPM1
BPM_FPGA     0x00010880	   16   # 0x0080 - :FF-SCAN-K1-BPM2
BPM_FPGA     0x000108C0	   16   # 0x00C0 - :FF-SCAN-K2-BPM1
BPM_FPGA     0x00010900	   16   # 0x0100 - :FF-SCAN-K2-BPM2
BPM_FPGA     0x00010164			1   # 0x0140 - :FF-SCAN-K1-BPM1-A
BPM_FPGA     0x00010168			1   # 0x0144 - :FF-SCAN-K1-BPM2-A
BPM_FPGA     0x0001016C			1   # 0x0148 - :FF-SCAN-K2-BPM1-A
BPM_FPGA     0x00010170			1   # 0x014C - :FF-SCAN-K2-BPM2-A
BPM_FPGA     0x00010174			1   # 0x0150 - :FF-SCAN-K1-BPM1-B
BPM_FPGA     0x00010178			1   # 0x0154 - :FF-SCAN-K1-BPM2-B
BPM_FPGA     0x0001017C			1   # 0x0158 - :FF-SCAN-K2-BPM1-B
BPM_FPGA     0x00010180			1   # 0x015C - :FF-SCAN-K2-BPM2-B
BPM_FPGA     0x00010184			2   # 0x0160 - :FF-SCAN-X
BPM_FPGA     0x0001018C			2   # 0x0168 - :FF-SCAN-Y-K1-BPM1
BPM_FPGA     0x00010194			2   # 0x0170 - :FF-SCAN-Y-K1-BPM2
BPM_FPGA     0x0001019C			2   # 0x0178 - :FF-SCAN-Y-K2-BPM1
BPM_FPGA     0x000101A4			2   # 0x0180 - :FF-SCAN-Y-K2-BPM2
BPM_FPGA     0x000101AC			1   # 0x0188 - :FF-SCAN-KICK-M11
BPM_FPGA     0x000101B0			1   # 0x018C - :FF-SCAN-KICK-M12
BPM_FPGA     0x000101B4			1   # 0x0190 - :FF-SCAN-KICK-M21
BPM_FPGA     0x000101B8			1   # 0x0194 - :FF-SCAN-KICK-M22
