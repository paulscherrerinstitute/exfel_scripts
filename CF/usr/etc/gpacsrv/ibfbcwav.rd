#  ---   Button BPM READ -----
# Rules:
#   base_addr is in hex format or mnemonic
#   offset is in hex format
#   length is unsigned decimal number in 32-bit words
# base_addr offset     length  # buff_addr - comment
# read/write section - is exactly the same as in the corresponding .wr file
BPM_FPGA     0x00200000	    1   0   # 0x0000 - :FF-TABLE-POS
# read only section
BPM_FPGA     0x00340000   256   # 0x0000 - :DAQ-CH00
BPM_FPGA     0x00344000   256   # 0x0400 - :DAQ-CH01
BPM_FPGA     0x00348000   256   # 0x0800 - :DAQ-CH02
BPM_FPGA     0x0034C000   256   # 0x0C00 - :DAQ-CH03
BPM_FPGA     0x003C0000   256   # 0x1000 - :DAQ-CH10
BPM_FPGA     0x003C4000   256   # 0x1400 - :DAQ-CH11
BPM_FPGA     0x003C8000   256   # 0x1800 - :DAQ-CH12
BPM_FPGA     0x003CC000   256   # 0x1C00 - :DAQ-CH13
BPM_FPGA     0x00328000   256   # 0x2000 - :RX-DOWN-BPM1
BPM_FPGA     0x00338000   256   # 0x2400 - :RX-DOWN-BPM2
