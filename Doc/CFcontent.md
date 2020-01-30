### CF Card Content

The files in <span style="color:#00FF00">green </span>are copied to RAM file system at Linux startup.

&nbsp;

<table border="1" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td style="width:196px">
			|-bin
			</td>
			<td style="width:415px">
			Folder contains Linux image files for three possible GPAC configurations.
			<em>Note: See firmware update strategy for the folder meaning.</em>
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; |-image0.elf
			</td>
			<td style="width:415px">
			Linux image file for golden.ace FPGA configuration.
			<em>Note: Never update this file remotely!!</em>
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; |-image1.elf
			</td>
			<td style="width:415px">
			Linux image file for prod1 FGPA configuration
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; |-image2.elf
			</td>
			<td style="width:415px">
			Linux image file for prod2 FGPA configuration
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">|-etc</span>
			</td>
			<td style="width:415px">
			Linux scripts for GPAC specific configuration. The content of this folder is copied to RAM file system at Linux boot
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; |-config</span>
			</td>
			<td style="width:415px">
			The folder contains configuration files for Linux
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \-resolv.cfg</span>
			</td>
			<td style="width:415px">
			File with list of DNS servers. Used in static IP configuration.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; \-network</span>
			</td>
			<td style="width:415px">
			Folder with configuration files for network.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \-if1.cfg</span>
			</td>
			<td style="width:415px">
			This file contains configuration for static IP. Edit this file to configure the GPAC Ethernet adapter in static IP. If you want to use it at Linux startup rename it to if.cfg. The startup script checks if the file /mnt/cf/etc/network/if.cfg exists then it overwrites the /etc/network/interfaces file and applies the settings.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; |-hosts</span>
			</td>
			<td style="width:415px">
			File with a list of host IP and names. Used in case the DNS server is not configured.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; \-nsswitch.cfg</span>
			</td>
			<td style="width:415px">
			File which contains the order of network names resolving. Relevant in static IP configuration.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			|-fpga
			</td>
			<td style="width:415px">
			Folder with configuration files for GPAC FPGA chips.
			<em>Note: See firmware update strategy for the folder meaning.</em>
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; |-golden
			</td>
			<td style="width:415px">
			Folder with golden ACE file.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \-golden.ace
			</td>
			<td style="width:415px">
			Golden ACE file for emergency configuration of GPAC.
			<em>Note: Never update this file remotely!!</em>
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; |-prod1
			</td>
			<td style="width:415px">
			Folder with production ACE file 1.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \-&lt;project&gt;.ace
			</td>
			<td style="width:415px">
			Ace file for production version 1. The project name is arbitrary.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; |-prod2
			</td>
			<td style="width:415px">
			Folder with production ACE file 2.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \-&lt;project&gt;.ace
			</td>
			<td style="width:415px">
			Ace file for production version 2. The project name is arbitrary.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; |-cfg.bit
			</td>
			<td style="width:415px">
			Configuration bit file used to program EEPROM of CFG FPGA chip.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; |-seu.bit
			</td>
			<td style="width:415px">
			Configuration bit file used to program EEPROM of SEU FPGA chip.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; \-xilinx.sys
			</td>
			<td style="width:415px">
			Xilinx configurations file for SystemACE. Do not edit this file.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			|-rffe
			</td>
			<td style="width:415px">
			The folder contains files with EEPROM configuration for various RFFEs. Use this files for the progrffe program to initiate HS EEPROM of a new RFFE.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; |-ebrffe1.prg
			</td>
			<td style="width:415px">
			Configuration file for Button RFFE version 1,2, and 3.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; |-ecrffe3.prg
			</td>
			<td style="width:415px">
			Configuration file for Cavity RFFE version 3.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; |-errffe2.prg
			</td>
			<td style="width:415px">
			Configuration file for Re-entrant RFFE version 2.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; \-mbucom.prg
			</td>
			<td style="width:415px">
			Configuration file for MBU COM board.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">|-usr</span>
			</td>
			<td style="width:415px">
			Folder for user applications. Content of this folder is copied from /mnt/cf/usr &nbsp;to&nbsp; RAM file system at Linux boot. Put your custom programs in this folder.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; |-bin</span>
			</td>
			<td style="width:415px">
			Folder with user programs.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |-cfgrev.sh</span>
			</td>
			<td style="width:415px">
			This shell script allows to set default configuration ACE file in CFG FPGA. Type cfgrev.sh for help.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |-goahead</span>
			</td>
			<td style="width:415px">
			GoAhead web server binaries.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |-gpacsrv</span>
			</td>
			<td style="width:415px">
			S7gpac server
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |-mrd</span>
			</td>
			<td style="width:415px">
			Read any location on PLB bus. Type mrd for help.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |-mwr</span>
			</td>
			<td style="width:415px">
			Write any location on PLB bus. Type mwr for help.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |-progrffe</span>
			</td>
			<td style="width:415px">
			Program to configure HS EEPROM of an RFFE or MBU COM board. Type progrffe for help.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |-version.sh</span>
			</td>
			<td style="width:415px">
			This script prints firmware version, firmware compilation date, software compilation date for each FPGA in GPAC. The format is the same like in MEDM panel for GPAC service. The output of this script can be redirected to a file and this file can be send to PSI to Inventory database.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \-xc3sprog</span>
			</td>
			<td style="width:415px">
			Program to configure FPGA/EEPROM of CFG/SEU FPGA. See /usr/etc/xc3sprog/readme file for help.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; \-etc</span>
			</td>
			<td style="width:415px">
			Folder with configuration files for binaries located in /usr/bin.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |-cmds.txt</span>
			</td>
			<td style="width:415px">
			A help file with a list of useful Linux commands.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \-gpacsrv</span>
			</td>
			<td style="width:415px">
			Configuration files for gpacsrv program.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;|-butbpm.rd</span>
			</td>
			<td style="width:415px">
			Configuration file for Button BPM read buffer.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;|-butbpm.wr</span>
			</td>
			<td style="width:415px">
			Configuration file for Button BPM write buffer.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;|-butbpm1.sub</span>
			</td>
			<td style="width:415px">
			Substitution file for Button BPM1.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;|-butbpm2.sub</span>
			</td>
			<td style="width:415px">
			Substitution file for Button BPM2.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;|-butbpm3.sub</span>
			</td>
			<td style="width:415px">
			Substitution file for Button BPM3.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;|-butbpm4.sub</span>
			</td>
			<td style="width:415px">
			Substitution file for Button BPM4.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;|-butserv.rd</span>
			</td>
			<td style="width:415px">
			Substitution file for Button BPM service read buffer.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-butserv.wr</span>
			</td>
			<td style="width:415px">
			Substitution file for Button BPM service write buffer.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-cavbpm.rd</span>
			</td>
			<td style="width:415px">
			Substitution file for Cavity BPM read buffer.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-cavbpm.wr</span>
			</td>
			<td style="width:415px">
			Substitution file for Cavity BPM write buffer.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-cavbpm1.sub</span>
			</td>
			<td style="width:415px">
			Substitution file for Cavity BPM1.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-cavbpm2.sub</span>
			</td>
			<td style="width:415px">
			Substitution file for Cavity BPM2.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-gpacserv.rd</span>
			</td>
			<td style="width:415px">
			Substitution file for GPAC service read buffer.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-gpacserv.wr</span>
			</td>
			<td style="width:415px">
			Substitution file for GPAC service write buffer.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-renbpm.rd</span>
			</td>
			<td style="width:415px">
			Substitution file for Re-entrant BPM read buffer.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-renbpm.wr</span>
			</td>
			<td style="width:415px">
			Substitution file for Re-entrant BPM write buffer.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-renbpm1.sub</span>
			</td>
			<td style="width:415px">
			Substitution file for Re-entrant BPM1.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-renbpm2.sub</span>
			</td>
			<td style="width:415px">
			Substitution file for Re-entrant BPM2.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-startsrv.sh</span>
			</td>
			<td style="width:415px">
			Shell script to start particular S7gpac server. Edit this script end uncomment lines with S7gpac servers for given configuration. The script is automatically executed at Linux boot.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">\-www</span>
			</td>
			<td style="width:415px">
			Folder which contains files for GoAhead webserver. The content of this folder is copied during boot from /mnt/cf/www.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; |-cgi-bin</span>
			</td>
			<td style="width:415px">
			Folder for CGI scripts. Not used at this moment.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; |-css</span>
			</td>
			<td style="width:415px">
			Folder with cascaded style sheet for the GPAC web application.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; |-doc</span>
			</td>
			<td style="width:415px">
			Folder with pdf files used on the &lsquo;Documentaion&rsquo; web page.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; |-images</span>
			</td>
			<td style="width:415px">
			Files with graphics used on the GPAC web application.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; |-include</span>
			</td>
			<td style="width:415px">
			Folder with files containing repetitive pieces of web pages. These files are included dynamically by GoAhead when a page is requested.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; |-js</span>
			</td>
			<td style="width:415px">
			Folder with JavaScript files attached to requested web pages.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			<span style="color:#00FF00">&nbsp;&nbsp;&nbsp; |-*.htm</span>
			</td>
			<td style="width:415px">
			HTML files for the GPAC web application.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			|-var
			</td>
			<td style="width:415px">
			This folder is automatically created by Linux
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp; \-log
			</td>
			<td style="width:415px">
			This folder is automatically created by Linux
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \-updates
			</td>
			<td style="width:415px">
			This file is automatically created by Linux and it contains history of updates done remotely by distribution scripts.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			|-gpac.cfg
			</td>
			<td style="width:415px">
			Configurations file for GPAC board. This file has to be edited before first start of the GPAC board. Edit the file and change the hostname parameter. The file is read by the Linux kernel when configuring hostname. The hostname is also send by DHCP client in the IP request.
			</td>
		</tr>
		<tr>
			<td style="width:196px">
			\-xilinx.sys
			</td>
			<td style="width:415px">
			Xilinx configurations file for SystemACE. Do not edit this file.
			</td>
		</tr>
	</tbody>
</table>


