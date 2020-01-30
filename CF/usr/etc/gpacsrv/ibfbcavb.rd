#  ---   Button BPM READ -----
# Rules:
#   base_addr is in hex format or mnemonic
#   offset is in hex format
#   length is unsigned decimal number in 32-bit words
# base_addr	offset     length  # buff_addr - comment
# read/write section - is exactly the same as in the corresponding .wr file
BPM2_FPGA   0x00000400			1	  # 0x0000 - :ROUTER2-RST
BPM2_FPGA   0x00000404			1	  # 0x0004 - :BPM-ID, ROUTER2-LOOPBACK
BPM2_FPGA   0x00000424			1	  # 0x0008 - :BPM2-ENABLED
BPM2_FPGA   0x00038024			1	  # 0x000C - :BPM2-SMP-B1-0
BPM2_FPGA   0x0000043C			1	  # 0x0010 - :BPM2-Q-THRESHOLD
# read only section
BP_FPGA     0x00000034			1   # 0x0000 - :COM-SFP-STATUS
BPM2_FPGA   0x00000408			1	  # 0x0004 - :BPM2-IBFB-GTX-STATUS
BPM2_FPGA   0x0000040C			1	  # 0x0008 - :BPM2-IBFB-GTX-COM0-LOSS-CNT, :BPM2-IBFB-GTX-COM1-LOSS-CNT
BPM2_FPGA   0x00000410			1	  # 0x000C - :BPM2-IBFB-GTX-BPM0-LOSS-CNT, :BPM2-IBFB-GTX-BPM1-LOSS-CNT
BPM2_FPGA   0x00000414			1	  # 0x0010 - :BPM2-IBFB-GTX-BPM2-LOSS-CNT, :BPM2-IBFB-GTX-BPM3-LOSS-CNT
BPM2_FPGA   0x0000041C			1	  # 0x0014 - :BPM2-PACKET-FIFO-WR-ERR-CNT, :BPM2-PACKET-FIFO-RD-ERR-CNT
BPM2_FPGA   0x00000420			1	  # 0x0018 - :BPM2-ROUTER-ERR-CNT0, :BPM2-ROUTER-ERR-CNT1
BPM2_FPGA   0x00000428			1	  # 0x001C - :BPM2-IBFB-ROUTER-STATUS


