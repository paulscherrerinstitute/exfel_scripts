#  ---   Button BPM READ -----
# Rules:
#   base_addr is in hex format or mnemonic
#   offset is in hex format
#   length is unsigned decimal number in 32-bit words
# base_addr	offset     length  # buff_addr - comment
# read/write section - is exactly the same as in the corresponding .wr file
BPM_FPGA     0x00001000			1	  # 0x0000 - reserved
BPM_FPGA     0x00001004			1	  # 0x0004 - :TRG-SOURCE, :TRG-MODE
BPM_FPGA     0x00001008			1	  # 0x0008 - :TRG-DEL
BPM_FPGA     0x0000100C			1	  # 0x000C - :BUNCH-NUM, :BUNCH-SPACE
BPM_FPGA     0x0000084C			1	  # 0x0010 - :TRG-SINGLE
# read only section
BPM_FPGA     0x00000850			1   # 0x0000 - :TRG-EXT-MISSING
BPM_FPGA     0x0000080C			1   # 0x0004 - :GTX-QSFP0123-BPM0123-STATUS
BPM_FPGA     0x00000810			1   # 0x0008 - :GTX-P0-STATUS
BPM_FPGA     0x00000814			1   # 0x000C - :ROUTER-STATUS
BPM_FPGA     0x00000824			1   # 0x0010 - :LOSS-CNT-QSFP-1, :LOSS-CNT-QSFP-0
BPM_FPGA     0x00000828			1   # 0x0014 - :LOSS-CNT-QSFP-3, :LOSS-CNT-QSFP-2
BPM_FPGA     0x0000082C			1   # 0x0018 - :LOSS-CNT-BPM-1 , :LOSS-CNT-BPM-0
BPM_FPGA     0x00000830			1   # 0x001C - :LOSS-CNT-BPM-3 , :LOSS-CNT-BPM-2
BPM_FPGA     0x00000834			1   # 0x0020 - :LOSS-CNT-P0-1  , :LOSS-CNT-P0-0
BPM_FPGA     0x00000838			1   # 0x0024 - :CRC-ERR-CNT
