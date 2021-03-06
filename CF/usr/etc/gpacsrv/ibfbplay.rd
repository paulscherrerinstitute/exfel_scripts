#  ---   Button BPM READ -----
# Rules:
#   base_addr is in hex format or mnemonic
#   offset is in hex format
#   length is unsigned decimal number in 32-bit words
# base_addr	offset     length  # buff_addr - comment
# read/write section - is exactly the same as in the corresponding .wr file
BPM_DDR2     0x00100000	  2700   # 0x0000 - :MEM-PLAY-TIMESTAMP
BPM_DDR2     0x00104000	  2700   # 0x2A30 - :MEM-PLAY-CONTROL
BPM_DDR2     0x00108000	  2700   # 0x5460 - :MEM-PLAY-X
BPM_DDR2     0x0010C000	  2700   # 0x7E90 - :MEM-PLAY-Y
BPM_FPGA     0x00000000			 1	 # 0xA8C0 - reserved
BPM_FPGA     0x00001000			 1	 # 0xA8C4 - :MEM-PLAY-CMD
BPM_FPGA     0x00001004			 1	 # 0xA8C8 - :TRG-SOURCE, :TRG-MODW
BPM_FPGA     0x00001008			 1	 # 0xA8CC - :TRG-DEL
BPM_FPGA     0x0000100C			 1	 # 0xA8D0 - :BUNCH-NUM, :BUNCH-SPACE
BPM_FPGA     0x00000864			 1	 # 0xA8D4 - :TRG-SINGLE
BPM_FPGA     0x00000880 	   4   # 0xA8D8 - :SFP0-KX0-BPMx
BPM_FPGA     0x00000890 	   4   # 0xA8E8 - :SFP0-KX1-BPMx
BPM_FPGA     0x000008A0 	   4   # 0xA8F8 - :SFP0-KY0-BPMx
BPM_FPGA     0x000008B0 	   4   # 0xA908 - :SFP0-KY1-BPMx
BPM_FPGA     0x000008C0 	   4   # 0xA918 - :SFP1-KX0-BPMx
BPM_FPGA     0x000008D0 	   4   # 0xA928 - :SFP1-KX1-BPMx
BPM_FPGA     0x000008E0 	   4   # 0xA938 - :SFP1-KY0-BPMx
BPM_FPGA     0x000008F0 	   4   # 0xA948 - :SFP1-KY1-BPMx
BPM_FPGA     0x00000900 	   4   # 0xA958 - :SFP2-KX0-BPMx
BPM_FPGA     0x00000910 	   4   # 0xA968 - :SFP2-KX1-BPMx
BPM_FPGA     0x00000920 	   4   # 0xA978 - :SFP2-KY0-BPMx
BPM_FPGA     0x00000930 	   4   # 0xA988 - :SFP2-KY1-BPMx
BPM_FPGA     0x00000940 	   4   # 0xA998 - :SFP3-KX0-BPMx
BPM_FPGA     0x00000950 	   4   # 0xA9A8 - :SFP3-KX1-BPMx
BPM_FPGA     0x00000960 	   4   # 0xA9B8 - :SFP3-KY0-BPMx
BPM_FPGA     0x00000970 	   4   # 0xA9C8 - :SFP3-KY1-BPMx
BPM_FPGA     0x00000980 	   4   # 0xA9D8 - :P0-0-KX0-BPMx
BPM_FPGA     0x00000990 	   4   # 0xA9E8 - :P0-0-KX1-BPMx
BPM_FPGA     0x000009A0 	   4   # 0xA9F8 - :P0-0-KY0-BPMx
BPM_FPGA     0x000009B0 	   4   # 0xAA08 - :P0-0-KY1-BPMx
# read only section
BP_RFFE      0x00000408			 1   # 0x0000 - :RTMG-SFP1
BP_RFFE      0x0000040C			 1   # 0x0004 - :RTMG-SFP2
BPM_FPGA     0x0000080C 	   1   # 0x0008 - :GTX-BPM23-LOSS, :GTX-BPM01-LOSS, :GTX-QSFP02-LOSS, :GTX-QSFP13-LOSS
BPM_FPGA     0x00000810 	   1   # 0x000C - :PLAY-ENA-HB, :PLAY-ENA-LB, :GTX-P01-LOSS
BPM_FPGA     0x00000818 	   1   # 0x0010 - :PLAY-SFP0-PACKETS
BPM_FPGA     0x0000081C 	   1   # 0x0014 - :PLAY-SFP1-PACKETS
BPM_FPGA     0x00000820 	   1   # 0x0018 - :PLAY-SFP2-PACKETS
BPM_FPGA     0x00000824 	   1   # 0x001C - :PLAY-SFP3-PACKETS
BPM_FPGA     0x00000828 	   1   # 0x0020 - :PLAY-P0-0-PACKETS
BPM_FPGA     0x00000868 	   1   # 0x0024 - :TRG-EXT-MISSING
