#  ---   Button BPM READ -----
# Rules:
#   base_addr is in hex format or mnemonic
#   offset is in hex format
#   length is unsigned decimal number in 32-bit words
# base_addr offset     length  # buff_addr - comment
# read/write section - is exactly the same as in the corresponding .wr file
BPM_FPGA     0x00010300    24   # 0x0000 - :KICK1-P-PATTERN
BPM_FPGA     0x00010380    24   # 0x0060 - :KICK1-N-PATTERN
BPM_FPGA     0x00010400    24   # 0x00C0 - :KICK2-P-PATTERN
BPM_FPGA     0x00010480    24   # 0x0120 - :KICK2-N-PATTERN
# read only section
BPM_FPGA     0x003C0000     1   # 0x0000 - :whatever

