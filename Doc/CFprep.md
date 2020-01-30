### CF Card Preparation

The CF card for GPAC must be formatted with FAT16. Then the files have to be copied to the card. There following steps describe how to prepare such a card. The following procedure works only on Windows.

1. Plug in CF card to your card reader and connect to the PC
2. Open cmd window and goto root folder of this repository
3. Execute prepare_CF.bat Q:, where Q: is drive letter where your card was mounted
4. The script formats the card with FAT16 and copies about 157 files from the folder ./CF
5. The CF card can be plugged into GPAC

**Note:** This is only default content of the CF card. It contains only golden image for the FPGA configuration which allows to start Linux and gives access over Ethernet. It does not contain any BPM specific firmware. The remaining configuration needs to be done remotely using update scripts.

