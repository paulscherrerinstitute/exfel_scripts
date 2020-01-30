### ACE Files
<p>The ACE files for various BPM configuration at XFEL are generated using DOS scripts and Xilinx Impact in batch mode. The scripts and ACE files are placed in ACE folder of this repository</p>  

<p>The DOS script is named <span style="font-family:courier new,courier,monospace">gen_ace_bpm.bat</span>. When the script is called without parameters it generates ACE file for every possible configuration of BPMs used at E-XFEL. The corresponding <span style="font-family:courier new,courier,monospace">ace_&lt;configuration&gt;.cmd</span> files contain impact commands to generated single ACE file. The possible configurations are:</p>

The following table contains required HW configuration for various ACE files.

<table border="1" cellpadding="1" cellspacing="1" style="width:760px">
	<tbody>
		<tr>
			<td><strong>Configuration</strong></td>
			<td><strong>PB1</strong></td>
			<td><strong>PB2</strong></td>
			<td><strong>RFFE1</strong></td>
			<td><strong>RFFE2</strong></td>
			<td><strong>RFFE3</strong></td>
			<td><strong>RFFE4</strong></td>
		</tr>
		<tr>
			<td>but</td>
			<td>ADC12FL</td>
			<td>ADC12FL</td>
			<td>Button RFFE</td>
			<td>Button RFFE</td>
			<td>Button RFFE</td>
			<td>Button RFFE</td>
		</tr>
		<tr>
			<td>but2</td>
			<td>ADC12FL</td>
			<td>empty</td>
			<td>Button RFFE</td>
			<td>Button RFFE</td>
			<td>empty</td>
			<td>empty</td>
		</tr>
		<tr>
			<td>butcav</td>
			<td>ADC12FL</td>
			<td>ADC16HL</td>
			<td>Button RFFE</td>
			<td>Button RFFE</td>
			<td>empty</td>
			<td>Cavity RFFE</td>
		</tr>
		<tr>
			<td>butren</td>
			<td>ADC12FL</td>
			<td>ADC16HL</td>
			<td>Button RFFE</td>
			<td>Button RFFE</td>
			<td>empty</td>
			<td>Re-entrant RFFE</td>
		</tr>
		<tr>
			<td>cav</td>
			<td>ADC16HL</td>
			<td>ADC16HL</td>
			<td>empty</td>
			<td>Cavity RFFE</td>
			<td>empty</td>
			<td>Cavity RFFE</td>
		</tr>
		<tr>
			<td>ren2</td>
			<td>ADC16HL</td>
			<td>ADC16HL</td>
			<td>empty</td>
			<td>Re-entrant RFFE</td>
			<td>empty</td>
			<td>Re-entrant RFFE</td>
		</tr>
		<tr>
			<td>golden</td>
			<td>don&#39;t care</td>
			<td>don&#39;t care</td>
			<td>don&#39;t care</td>
			<td>don&#39;t care</td>
			<td>don&#39;t care</td>
			<td>don&#39;t care</td>
		</tr>
	</tbody>
</table>

<p>The ACE files are generated in subfolder <span style="font-family:courier new,courier,monospace">fpga/&lt;configuraion&gt;/&lt;configuration&gt;.ace</span>.</p>

<p>One can also generate ACE file for single configuration by calling: <span style="font-family:courier new,courier,monospace">gen_ace_bpm.bat &lt;configuration&gt;</span>.</p>

<p>The corresponding ACE file has to be copied to CF card to folder <span style="font-family:courier new,courier,monospace">/fpga/prod1</span> and optionally to <span style="font-family:courier new,courier,monospace">/fpga/prod2</span>. File <span style="font-family:courier new,courier,monospace">golden.ace</span> must be copied to folder <span style="font-family:courier new,courier,monospace">/fpga/golden</span>. 
