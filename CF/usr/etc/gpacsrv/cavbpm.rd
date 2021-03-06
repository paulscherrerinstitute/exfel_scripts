#  ---   Cavity BPM READ -----
# Rules:
#   base_addr is in hex format or mnemonic
#   offset is in hex format
#   length is unsigned decimal number in 32-bit words
# base_addr	    offset     length  # buff_addr - comment
# read/write section - is exactly the same as in the corresponding .wr file
SYS_INIT        0x00000010			1	 # 0x0000 - SMP-ENA
SYS_INIT        0x00000014			1	 # 0x0004 - SMP-MODE
SYS_INIT        0x00000018			1	 # 0x0008 - SMP-TRIG-VAL
SYS_INIT        0x00000020			1	 # 0x000C - SMP-B0-0
SYS_INIT        0x00000024			1	 # 0x0010 - SMP-B1-0
SYS_INIT        0x00000028			1	 # 0x0014 - SMP-B2-0
SYS_INIT        0x0000002C			1	 # 0x0018 - SMP-B3-0
SYS_INIT        0x00000030			1	 # 0x001C - SMP-S1-0
SYS_INIT        0x00000034			1	 # 0x0020 - SMP-S1-1
SYS_INIT        0x00000038			1	 # 0x0024 - SMP-S1-2
SYS_INIT        0x00000040			1	 # 0x0028 - BL-ENA
SYS_INIT        0x00000044			1	 # 0x002C - BL-SMP-EXP
SYS_INIT        0x00000048			1	 # 0x0030 - BL-DEL
SYS_INIT        0x00000170			1	 # 0x0034 - ADC-SYNC
SMP_ADDR_REG    0x000000A0			1	 # 0x0038 - IB-ENA
SYS_INIT        0x00000374			1	 # 0x003C - IB-R-INDEX
SYS_INIT        0x00000378			1	 # 0x0040 - IB-R-PHASE
SYS_INIT        0x0000037C			1	 # 0x0044 - IB-R-AMPL
SYS_INIT        0x00000384			1	 # 0x0048 - IB-X-INDEX
SYS_INIT        0x00000388			1	 # 0x004C - IB-X-PHASE
SYS_INIT        0x0000038C			1	 # 0x0050 - IB-X-AMPL
SYS_INIT        0x00000394			1	 # 0x0054 - IB-Y-INDEX
SYS_INIT        0x00000398			1	 # 0x0058 - IB-Y-PHASE
SYS_INIT        0x0000039C			1	 # 0x005C - IB-Y-AMPL
SMP_ADDR_REG    0x00000090			1	 # 0x0060 - AC-ENA
SYS_INIT        0x000003A8			1	 # 0x0064 - AC-R-PHASE
SYS_INIT        0x000003AC			1	 # 0x0068 - AC-R-AMPL
SYS_INIT        0x000003B8			1	 # 0x006C - AC-X-PHASE
SYS_INIT        0x000003BC			1	 # 0x0070 - AC-X-AMPL
SYS_INIT        0x000003C8			1	 # 0x0074 - AC-Y-PHASE
SYS_INIT        0x000003CC			1	 # 0x0078 - AC-Y-AMPL
SMP_ADDR_REG    0x000000B0			1	 # 0x007C - BA-ENA
SMP_ADDR_REG    0x000000B4			1	 # 0x0080 - BA-X
SMP_ADDR_REG    0x000000B8			1	 # 0x0084 - BA-Y
SYS_INIT        0x00000334			1	 # 0x0088 - BA-FB-ENA
SYS_INIT        0x00000338			1	 # 0x008C - BA-FB-THR
SYS_INIT        0x00000348			1	 # 0x0090 - Q-SCALE-EGU
SYS_INIT        0x00000354			1	 # 0x0094 - Q-SCALE
SMP_ADDR_REG    0x000000D0			1	 # 0x0098 - Q-SCALE-RAW
SYS_INIT        0x0000034C			1	 # 0x009C - X-SCALE-EGU
SYS_INIT        0x00000358			1	 # 0x00A0 - X-SCALE
SMP_ADDR_REG    0x000000E0			1	 # 0x00A4 - X-SCALE-RAW
SYS_INIT        0x00000350			1	 # 0x00A8 - Y-SCALE-EGU
SYS_INIT        0x0000035C			1	 # 0x00AC - Y-SCALE
SMP_ADDR_REG    0x000000F0			1	 # 0x00B0 - Y-SCALE-RAW
SMP_ADDR_REG    0x000000C0			1	 # 0x00B4 - ROT11
SMP_ADDR_REG    0x000000C4			1	 # 0x00B8 - ROT12
SMP_ADDR_REG    0x000000C8			1	 # 0x00BC - ROT21
SMP_ADDR_REG    0x000000CC			1	 # 0x00C0 - ROT22
SYS_INIT        0x000003D0			1	 # 0x00C4 - Q-FB-THR
SYS_INIT        0x000002E0			1	 # 0x00C8 - PHASE-FB-ON
SYS_INIT        0x000002E4			1	 # 0x00CC - PHASE-FB-REF
SYS_INIT        0x000002E8			1	 # 0x00D0 - PHASE-FB-KP
SYS_INIT        0x000002EC			1	 # 0x00D4 - PHASE-FB-KI
SYS_INIT        0x00000300			1	 # 0x00D8 - PH-REF-FB-ON
SYS_INIT        0x00000304			1	 # 0x00DC - PH-REF-FB-REF
SYS_INIT        0x00000308			1	 # 0x00E0 - PH-REF-FB-KP
SYS_INIT        0x0000030C			1	 # 0x00E4 - PH-REF-FB-KI
SYS_INIT        0x00000320			1	 # 0x00E8 - REF-GAIN-FB-ON
SYS_INIT        0x00000324			1	 # 0x00EC - X-GAIN-FB-ON
SYS_INIT        0x00000328			1	 # 0x00F0 - Y-GAIN-FB-ON
SYS_INIT        0x00000050			1	 # 0x00F4 - PB-INIT
SYS_INIT        0x00000060			1	 # 0x00F8 - GOE
SYS_INIT        0x00000064			1	 # 0x00FC - SYNC
SYS_INIT        0x00000068			1	 # 0x0100 - CLK-PD
SYS_INIT        0x0000006C			1	 # 0x0104 - CLK-EN
SYS_INIT        0x00000074			1	 # 0x0108 - CLK-SEL
SYS_INIT        0x00000098			1	 # 0x010C - FPGA-CLK-DLY
SYS_INIT        0x00000094			1	 # 0x0110 - FPGA-CLK-DIV
SYS_INIT        0x00000090			1	 # 0x0114 - FPGA-CLK-MUX
SYS_INIT        0x000000A8			1	 # 0x0118 - PWR-CLK-DLY
SYS_INIT        0x000000A4			1	 # 0x011C - PWR-CLK-DIV
SYS_INIT        0x000000A0			1	 # 0x0120 - PWR-CLK-MUX
SYS_INIT        0x000000C4			1	 # 0x0124 - ADC0-CLK-DLY
SYS_INIT        0x000000C0			1	 # 0x0128 - ADC0-CLK-DIV
SYS_INIT        0x000000BC			1	 # 0x012C - ADC0-CLK-MUX
SYS_INIT        0x000000E4			1	 # 0x0130 - ADC1-CLK-DLY
SYS_INIT        0x000000E0			1	 # 0x0134 - ADC1-CLK-DIV
SYS_INIT        0x000000DC			1	 # 0x0138 - ADC1-CLK-MUX
SYS_INIT        0x00000104			1	 # 0x013C - ADC2-CLK-DLY
SYS_INIT        0x00000100			1	 # 0x0140 - ADC2-CLK-DIV
SYS_INIT        0x000000FC			1	 # 0x0144 - ADC2-CLK-MUX
SYS_INIT        0x00000124			1	 # 0x0148 - ADC3-CLK-DLY
SYS_INIT        0x00000120			1	 # 0x014C - ADC3-CLK-DIV
SYS_INIT        0x0000011C			1	 # 0x0150 - ADC3-CLK-MUX
SYS_INIT        0x00000144			1	 # 0x0154 - ADC4-CLK-DLY
SYS_INIT        0x00000140			1	 # 0x0158 - ADC4-CLK-DIV
SYS_INIT        0x0000013C			1	 # 0x015C - ADC4-CLK-MUX
SYS_INIT        0x00000164			1	 # 0x0160 - ADC5-CLK-DLY
SYS_INIT        0x00000160			1	 # 0x0164 - ADC5-CLK-DIV
SYS_INIT        0x0000015C			1	 # 0x0168 - ADC5-CLK-MUX
SYS_INIT        0x00000070			1	 # 0x016C - CLK-VBOOST
SYS_INIT        0x000000B4			1	 # 0x0170 - ADC0-DAC-OFS
SYS_INIT        0x000000B8			1	 # 0x0174 - ADC0-DAC-MUX
SYS_INIT        0x000000D4			1	 # 0x0178 - ADC1-DAC-OFS
SYS_INIT        0x000000D8			1	 # 0x017C - ADC1-DAC-MUX
SYS_INIT        0x000000F4			1	 # 0x0180 - ADC2-DAC-OFS
SYS_INIT        0x000000F8			1	 # 0x0184 - ADC2-DAC-MUX
SYS_INIT        0x00000114			1	 # 0x0188 - ADC3-DAC-OFS
SYS_INIT        0x00000118			1	 # 0x018C - ADC3-DAC-MUX
SYS_INIT        0x00000134			1	 # 0x0190 - ADC4-DAC-OFS
SYS_INIT        0x00000138			1	 # 0x0194 - ADC4-DAC-MUX
SYS_INIT        0x00000154			1	 # 0x0198 - ADC5-DAC-OFS
SYS_INIT        0x00000158			1	 # 0x019C - ADC5-DAC-MUX
SYS_INIT        0x000000B0			1	 # 0x01A0 - ADC0-PGA
SYS_INIT        0x000000D0			1	 # 0x01A4 - ADC1-PGA
SYS_INIT        0x000000F0			1	 # 0x01A8 - ADC2-PGA
SYS_INIT        0x00000110			1	 # 0x01AC - ADC3-PGA
SYS_INIT        0x00000130			1	 # 0x01B0 - ADC4-PGA
SYS_INIT        0x00000150			1	 # 0x01B4 - ADC5-PGA
SYS_INIT        0x00000080			1	 # 0x01B8 - ADC-SHDN
SYS_INIT        0x00000078			1	 # 0x01BC - SCK-OE
SYS_INIT        0x00000284			1	 # 0x01C0 - LO-PLL-R
SYS_INIT        0x00000290			1	 # 0x01C4 - LO-PLL-A
SYS_INIT        0x0000028C			1	 # 0x01C8 - LO-PLL-B
SYS_INIT        0x0000029C			1	 # 0x01CC - LO-PLL-MUX
SYS_INIT        0x00000294			1	 # 0x01D0 - LO-PLL-F2
SYS_INIT        0x00000298			1	 # 0x01D4 - LO-PLL-F3
SYS_INIT        0x00000288			1	 # 0x01D8 - LO-PLL-P
SYS_INIT        0x00000244			1	 # 0x01DC - CCLK-DDS-CFR1
SYS_INIT        0x00000248			1	 # 0x01E0 - CCLK-DDS-CFR2
SYS_INIT        0x0000024C			1	 # 0x01E4 - CCLK-DDS-DAC
SYS_INIT        0x00000250			1	 # 0x01E8 - CCLK-DDS-FTW
SYS_INIT        0x00000254			1	 # 0x01EC - DDS-PHASE
SYS_INIT        0x00000240			1	 # 0x01F0 - CCLK-DDS-RESET
SYS_INIT        0x00000260			1	 # 0x01F4 - CCLK-PLL-R
SYS_INIT        0x00000264			1	 # 0x01F8 - CCLK-PLL-N
SYS_INIT        0x00000270			1	 # 0x01FC - CCLK-PLL-MUX
SYS_INIT        0x00000268			1	 # 0x0200 - CCLK-PLL-F2
SYS_INIT        0x0000026C			1	 # 0x0204 - CCLK-PLL-F3
SYS_INIT        0x000002C0			1	 # 0x0208 - R-DSA
SYS_INIT        0x000002C4			1	 # 0x020C - X-DSA
SYS_INIT        0x000002C8			1	 # 0x0210 - Y-DSA
BP_RFFE         0x00000004			1	 # 0x0214 - DSA-CTRL-ENA
BP_RFFE         0x00000008			1	 # 0x0218 - R-DSA1-DIO
BP_RFFE         0x0000000C			1	 # 0x021C - R-DSA2-DIO
BP_RFFE         0x00000010			1	 # 0x0220 - XY-DSA1-DIO
BP_RFFE         0x00000014			1	 # 0x0224 - XXY-DSA2-DIO
SYS_INIT        0x00000210			1	 # 0x0228 - DIO-TMP-FB
SYS_INIT        0x00000230			1	 # 0x022C - DIO-INT-REF
SYS_INIT        0x00000218			1	 # 0x0230 - R-MX-TMP-FBO
SYS_INIT        0x00000214			1	 # 0x0234 - R-RF-TMP-FBO
SYS_INIT        0x00000220			1	 # 0x0238 - X-MX-TMP-FBO
SYS_INIT        0x0000021C			1	 # 0x023C - X-RF-TMP-FBO
SYS_INIT        0x00000228			1	 # 0x0240 - Y-MX-TMP-FBO
SYS_INIT        0x00000224			1	 # 0x0244 - Y-RF-TMP-FBO
SYS_INIT        0x000002B4			1	 # 0x0248 - LO-TMP-FBO
SYS_INIT        0x00000280			1	 # 0x024C - LO-PHASE
SYS_INIT        0x000002B0			1	 # 0x0250 - LO-PWR-O
SYS_INIT        0x00000200			1	 # 0x0254 - RFFE-INIT
SYS_INIT        0x00000204			1	 # 0x0258 - RFFE-EEPROM-RD
SYS_INIT        0x00000208			1	 # 0x025C - RFFE-EEPROM-WR
SYS_INIT        0x00000000			1	 # 0x0260 - SMP-INIT
SYS_INIT        0x00000400			1	 # 0x0264 - REF-GAIN-FB-MAX
SYS_INIT        0x00000404			1	 # 0x0268 - REF-GAIN-FB-MIN
SYS_INIT        0x00000408			1	 # 0x026C - REF-GAIN-FB-MIN-CNT
SYS_INIT        0x0000040C			1	 # 0x0270 - REF-GAIN-FB-ATT-INC
SYS_INIT        0x00000420			1	 # 0x0274 - X-GAIN-FB-MAX
SYS_INIT        0x00000424			1	 # 0x0278 - X-GAIN-FB-MIN
SYS_INIT        0x00000428			1	 # 0x027C - X-GAIN-FB-MIN-CNT
SYS_INIT        0x0000042C			1	 # 0x0280 - X-GAIN-FB-ATT-INC
SYS_INIT        0x00000440			1	 # 0x0284 - Y-GAIN-FB-MAX
SYS_INIT        0x00000444			1	 # 0x0288 - Y-GAIN-FB-MIN
SYS_INIT        0x00000448			1	 # 0x028C - Y-GAIN-FB-MIN-CNT
SYS_INIT        0x0000044C			1	 # 0x0290 - Y-GAIN-FB-ATT-INC
SYS_INIT        0x00000500          1    # 0x0294 - X2TIM-DEST-BUNCH-MASK
# read only     section
SMP_ADDR_MEM    0x000D0000		 32  # 0x0000 - WAV-X-I
SMP_ADDR_MEM    0x000D8000		 32  # 0x0080 - WAV-X-Q
SMP_ADDR_MEM    0x000E0000		 32  # 0x0100 - WAV-REF-I
SMP_ADDR_MEM    0x000E8000		 32  # 0x0180 - WAV-REF-Q
SMP_ADDR_MEM    0x000F0000		 32  # 0x0200 - WAV-Y-I
SMP_ADDR_MEM    0x000F8000		 32  # 0x0280 - WAV-Y-Q
SMP_ADDR_REG    0x00000038			1	 # 0x0300 - TRIG-CNT-FW 
SMP_ADDR_REG    0x0000003C			1	 # 0x0304 - TRIG-DEL-CNT
SMP_ADDR_REG    0x00000004			1	 # 0x0308 - SMP-DONE 
SMP_ADDR_REG    0x0000006C			1	 # 0x030C - ADC0-BL
SMP_ADDR_REG    0x00000070			1	 # 0x0310 - ADC1-BL
SMP_ADDR_REG    0x00000074			1	 # 0x0314 - ADC2-BL
SMP_ADDR_REG    0x00000078			1	 # 0x0318 - ADC3-BL
SMP_ADDR_REG    0x0000007C			1	 # 0x031C - ADC4-BL
SMP_ADDR_REG    0x00000080			1	 # 0x0320 - ADC5-BL
SMP_ADDR_REG    0x00000008			1	 # 0x0324 - DCM-LOCK
SMP_ADDR_REG    0x00000040			1	 # 0x0328 - ADC0-SYNC-IDELAY-CNT, ADC0-SYNC-DONE
SMP_ADDR_REG    0x00000044			1	 # 0x032C - ADC1-SYNC-IDELAY-CNT, ADC1-SYNC-DONE
SMP_ADDR_REG    0x00000048			1	 # 0x0330 - ADC2-SYNC-IDELAY-CNT, ADC2-SYNC-DONE
SMP_ADDR_REG    0x0000004C			1	 # 0x0334 - ADC3-SYNC-IDELAY-CNT, ADC3-SYNC-DONE
SMP_ADDR_REG    0x00000050			1	 # 0x0338 - ADC4-SYNC-IDELAY-CNT, ADC4-SYNC-DONE
SMP_ADDR_REG    0x00000054			1	 # 0x033C - ADC5-SYNC-IDELAY-CNT, ADC5-SYNC-DONE
SMP_ADDR_MEM    0x00000000  		1	 # 0x0340 - Q
SMP_ADDR_MEM    0x00004000			1	 # 0x0344 - Q-VALID
SMP_ADDR_MEM    0x00008000			1	 # 0x0348 - X
SMP_ADDR_MEM    0x0000C000			1	 # 0x034C - X-VALID
SMP_ADDR_MEM    0x00010000			1	 # 0x0350 - Y
SMP_ADDR_MEM    0x00014000			1	 # 0x0354 - Y-VALID
SYS_INIT        0x000003E0			1	 # 0x0358 - Q-TRAIN-AVG
SYS_INIT        0x000003E4			1	 # 0x035C - X-TRAIN-AVG
SYS_INIT        0x000003E8			1	 # 0x0360 - Y-TRAIN-AVG
SMP_ADDR_MEM    0x00000000		 32  # 0x0364 - WAV-Q
SMP_ADDR_MEM    0x00008000		 32  # 0x03E4 - WAV-X
SMP_ADDR_MEM    0x00010000		 32  # 0x0464 - WAV-Y
SMP_ADDR_MEM    0x00018000		  1  # 0x04E4 - PH-REF-R
SMP_ADDR_MEM    0x0001C000		  1  # 0x04E8 - PH-REF-R-VALID
SMP_ADDR_MEM    0x00020000		  1  # 0x04EC - AMP-REF-R
SMP_ADDR_MEM    0x00024000		  1  # 0x04F0 - AMP-REF-R-VALID
SMP_ADDR_MEM    0x00028000		  1  # 0x04F4 - PH-X-R
SMP_ADDR_MEM    0x0002C000		  1  # 0x04F8 - PH-X-R-VALID
SMP_ADDR_MEM    0x00030000		  1  # 0x04FC - AMP-X-R
SMP_ADDR_MEM    0x00034000		  1  # 0x0500 - AMP-X-R-VALID
SMP_ADDR_MEM    0x00038000		  1  # 0x0504 - PH-Y-R
SMP_ADDR_MEM    0x0003C000		  1  # 0x0508 - PH-Y-R-VALID
SMP_ADDR_MEM    0x00040000		  1  # 0x050C - AMP-Y-R
SMP_ADDR_MEM    0x00044000		  1  # 0x0510 - AMP-Y-R-VALID
SMP_ADDR_MEM    0x00048000		  1  # 0x0514 - PH-TOP-R
SMP_ADDR_MEM    0x0004C000		  1  # 0x0518 - PH-TOP-R-VALID
SMP_ADDR_MEM    0x00050000		  1  # 0x051C - AMP-TOP-R
SMP_ADDR_MEM    0x00054000		  1  # 0x0520 - AMP-TOP-R-VALID
SYS_INIT        0x00000254			1	 # 0x0524 - PHASE-FB-VAL
SYS_INIT        0x00000280			1	 # 0x0528 - PH-REF-FB-VAL
SYS_INIT        0x000002C0			1	 # 0x052C - REF-GAIN-FB-VAL
SYS_INIT        0x000002C4			1	 # 0x0530 - X-GAIN-FB-VAL
SYS_INIT        0x000002C8			1	 # 0x0534 - Y-GAIN-FB-VAL
FL_ADDR         0x00000004			1	 # 0x0538 - TEMP-ADC-X-I
FL_ADDR         0x00000008			1	 # 0x053C - TEMP-ADC-X-Q
FL_ADDR         0x0000000C			1	 # 0x0540 - TEMP-ADC-REF-I
FL_ADDR         0x00000010			1	 # 0x0544 - TEMP-ADC-REF-Q
FL_ADDR         0x00000014			1	 # 0x0548 - TEMP-ADC-Y-I
FL_ADDR         0x00000018  		1	 # 0x054C - TEMP-ADC-Y-Q
I2C_ADDR        0x00000004  		1	 # 0x0550 - R-MX-TMP-FBI
I2C_ADDR        0x00000008  		1	 # 0x0554 - R-RF-TMP-FBI
I2C_ADDR        0x0000000C  		1	 # 0x0558 - X-MX-TMP-FBI
I2C_ADDR        0x00000010  		1	 # 0x055C - X-RF-TMP-FBI
I2C_ADDR        0x00000014  		1	 # 0x0560 - Y-MX-TMP-FBI
I2C_ADDR        0x00000018  		1	 # 0x0564 - Y-RF-TMP-FBI
I2C_ADDR        0x0000001C  		1	 # 0x0568 - LO-TMP-FBI
I2C_ADDR        0x00000020  		1	 # 0x056C - LO-PWR-I
I2C_ADDR        0x00000024  		1	 # 0x0570 - DET-DC
I2C_ADDR        0x00000134  		1	 # 0x0574 - LO-PLL-GPIO-I
I2C_ADDR        0x0000018C  		1	 # 0x0578 - CCLK-PLL-GPIO-I
BP_RFFE         0x00000000  		1	 # 0x057C - STATUS-DIO
I2C_ADDR        0x00000138  		1	 # 0x0580 - DIO-I
I2C_ADDR        0x00000058  		1	 # 0x0584 - R-I-TMP
I2C_ADDR        0x0000005C  		1	 # 0x0588 - R-Q-TMP
I2C_ADDR        0x00000060  		1	 # 0x058C - X-I-TMP
I2C_ADDR        0x00000064  		1	 # 0x0590 - X-Q-TMP
I2C_ADDR        0x00000068  		1	 # 0x0594 - Y-I-TMP
I2C_ADDR        0x0000006C  		1	 # 0x0598 - Y-Q-TMP
MEAS_BRAM       0x00000020  		1	 # 0x059C - SMP-B0-0-RD
MEAS_BRAM       0x00000370  		1	 # 0x05A0 - IB-ENA-RD
MEAS_BRAM       0x00000374  		1	 # 0x05A4 - IB-R-INDEX-RD
MEAS_BRAM       0x00000378  		1	 # 0x05A8 - IB-R-PHASE-RD
MEAS_BRAM       0x0000037C  		1	 # 0x05AC - IB-R-AMPL-RD
MEAS_BRAM       0x00000384  		1	 # 0x05B0 - IB-X-INDEX-RD
MEAS_BRAM       0x00000388  		1	 # 0x05B4 - IB-X-PHASE-RD
MEAS_BRAM       0x0000038C  		1	 # 0x05B8 - IB-X-AMPL-RD
MEAS_BRAM       0x00000394  		1	 # 0x05BC - IB-Y-INDEX-RD
MEAS_BRAM       0x00000398  		1	 # 0x05C0 - IB-Y-PHASE-RD
MEAS_BRAM       0x0000039C  		1	 # 0x05C4 - IB-Y-AMPL-RD
MEAS_BRAM       0x000003A0  		1	 # 0x05C8 - AC-ENA-RD
MEAS_BRAM       0x000003A8  		1	 # 0x05CC - AC-R-PHASE-RD
MEAS_BRAM       0x000003AC  		1	 # 0x05D0 - AC-R-AMPL-RD
MEAS_BRAM       0x000003B8  		1	 # 0x05D4 - AC-X-PHASE-RD
MEAS_BRAM       0x000003BC  		1	 # 0x05D8 - AC-X-AMPL-RD
MEAS_BRAM       0x000003C8  		1	 # 0x05DC - AC-Y-PHASE-RD
MEAS_BRAM       0x000003CC  		1	 # 0x05E0 - AC-Y-AMPL-RD
MEAS_BRAM       0x00000330  		1	 # 0x05E4 - BA-ENA-RD
MEAS_BRAM       0x0000033C  		1	 # 0x05E8 - BA-X-RD
MEAS_BRAM       0x00000340  		1	 # 0x05EC - BA-Y-RD
MEAS_BRAM       0x00000334  		1	 # 0x05F0 - BA-FB-ENA-RD
MEAS_BRAM       0x00000338  		1	 # 0x05F4 - BA-FB-THR-RD
MEAS_BRAM       0x000003D0  		1	 # 0x05F8 - Q-FB-THR-RD
MEAS_BRAM       0x000002E0  		1	 # 0x05FC - PHASE-FB-ON-RD
MEAS_BRAM       0x000002E4  		1	 # 0x0600 - PHASE-FB-REF-RD
MEAS_BRAM       0x000002E8  		1	 # 0x0604 - PHASE-FB-KP-RD
MEAS_BRAM       0x000002EC  		1	 # 0x0608 - PHASE-FB-KI-RD
MEAS_BRAM       0x00000254  		1	 # 0x060C - DDS-PHASE-RD
MEAS_BRAM       0x00000300  		1	 # 0x0610 - PH-REF-FB-ON-RD
MEAS_BRAM       0x00000304  		1	 # 0x0614 - PH-REF-FB-REF-RD
MEAS_BRAM       0x00000308  		1	 # 0x0618 - PH-REF-FB-KP-RD
MEAS_BRAM       0x0000030C  		1	 # 0x061C - PH-REF-FB-KI-RD
MEAS_BRAM       0x00000280  		1	 # 0x0620 - PH-REF-FB-VAL-RD
MEAS_BRAM       0x00000320  		1	 # 0x0624 - REF-GAIN-FB-ON-RD
MEAS_BRAM       0x000002C0  		1	 # 0x0628 - REF-GAIN-FB-VAL-RD
MEAS_BRAM       0x00000324  		1	 # 0x062C - X-GAIN-FB-ON-RD
MEAS_BRAM       0x000002C4  		1	 # 0x0630 - X-GAIN-FB-VAL-RD
MEAS_BRAM       0x00000328  		1	 # 0x0634 - Y-GAIN-FB-ON-RD
MEAS_BRAM       0x000002C8  		1	 # 0x0638 - Y-GAIN-FB-VAL-RD
SMP_ADDR_MEM    0x00000000  2700   # 0x063C - WAV-Q
SMP_ADDR_MEM    0x00008000  2700   # 0x306C - WAV-X
SMP_ADDR_MEM    0x00010000  2700   # 0x5A9C - WAV-Y
SYS_INIT        0x00000504  		1	 # 0x84CC - X2TIM-DEST-BUNCH-FOUND-RD