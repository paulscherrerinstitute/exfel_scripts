#  ---   Button BPM READ -----
# Rules:
#   base_addr is in hex format or mnemonic
#   offset is in hex format
#   length is unsigned decimal number in 32-bit words
# base_addr offset     length  # buff_addr - comment
# read/write section - is exactly the same as in the corresponding .wr file
BPM_FPGA     0x00018000	  256   # 0x0000 - :FF-TABLE-POS
BPM_FPGA     0x0001C000	  256   # 0x0400 - :FF-TABLE-ANGLE
# read only section
BPM_FPGA     0x003C0000     1   # 0x0000 - :whatever
