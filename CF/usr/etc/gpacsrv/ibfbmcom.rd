#  ---   Button BPM READ -----
# Rules:
#   base_addr is in hex format or mnemonic
#   offset is in hex format
#   length is unsigned decimal number in 32-bit words
# base_addr	offset     length  # buff_addr - comment
# read/write section - is exactly the same as in the corresponding .wr file
BP_FPGA      0x00000608			1   # 0x0000 - :RESERVED
# read only section
BP_FPGA      0x00000408			1   # 0x0000 - :RTMG-SFP1
BP_FPGA      0x0000040C			1   # 0x0004 - :RTMG-SFP2
