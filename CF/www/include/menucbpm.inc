<div id="head_menu">
  <table>
    <tr>
      <td>
        <form method="get" action="index.html">
          <input type="submit" class="menu_button" value="Main" title="index.html" id="menu_main" style="width:80px">
        </form>
      </td>
      <td>
        <form method="get" action="cav_bpm.htm">
          <input type="text" name="SMP_ADDR_REG" value="<% webmapGetParam("SMP_ADDR_REG"); %>" class="debug_1">
          <input type="text" name="SMP_ADDR_MEM" value="<% webmapGetParam("SMP_ADDR_MEM"); %>" class="debug_1">
          <input type="text" name="SYS_INIT"     value="<% webmapGetParam("SYS_INIT"    ); %>" class="debug_1">
          <input type="text" name="CFG_SN_ADDR"  value="<% webmapGetParam("CFG_SN_ADDR" ); %>" class="debug_1">
          <input type="text" name="FL_ADDR"      value="<% webmapGetParam("FL_ADDR"     ); %>" class="debug_1">
          <input type="text" name="VME_P2_ADDR"  value="<% webmapGetParam("VME_P2_ADDR" ); %>" class="debug_1">
          <input type="text" name="I2C_ADDR"     value="<% webmapGetParam("I2C_ADDR"    ); %>" class="debug_1">
          <input type="text" name="CFG_P0HS_RD"  value="<% webmapGetParam("CFG_P0HS_RD" ); %>" class="debug_1">
          <input type="text" name="DEVICE"       value="<% webmapGetParam("DEVICE"      ); %>" class="debug_1">
          <input type="submit" class="menu_button" value="BPM" title="cav_bpm.htm" id="menu_bpm" style="width:80px">
        </form>
      </td>
      <td>
        <form method="get" action="cav_rffe.htm">
          <input type="text" name="SMP_ADDR_REG" value="<% webmapGetParam("SMP_ADDR_REG"); %>" class="debug_1">
          <input type="text" name="SMP_ADDR_MEM" value="<% webmapGetParam("SMP_ADDR_MEM"); %>" class="debug_1">
          <input type="text" name="SYS_INIT"     value="<% webmapGetParam("SYS_INIT"    ); %>" class="debug_1">
          <input type="text" name="CFG_SN_ADDR"  value="<% webmapGetParam("CFG_SN_ADDR" ); %>" class="debug_1">
          <input type="text" name="FL_ADDR"      value="<% webmapGetParam("FL_ADDR"     ); %>" class="debug_1">
          <input type="text" name="VME_P2_ADDR"  value="<% webmapGetParam("VME_P2_ADDR" ); %>" class="debug_1">
          <input type="text" name="I2C_ADDR"     value="<% webmapGetParam("I2C_ADDR"    ); %>" class="debug_1">
          <input type="text" name="CFG_P0HS_RD"  value="<% webmapGetParam("CFG_P0HS_RD" ); %>" class="debug_1">
          <input type="text" name="DEVICE"       value="<% webmapGetParam("DEVICE"      ); %>" class="debug_1">
          <input type="submit" class="menu_button" value="RFFE" title="cav_rffe.htm" id="menu_rffe" style="width:80px">
        </form>
      </td>
      <td>
        <form method="get" action="cav_pos.htm">
          <input type="text" name="SMP_ADDR_REG" value="<% webmapGetParam("SMP_ADDR_REG"); %>" class="debug_1">
          <input type="text" name="SMP_ADDR_MEM" value="<% webmapGetParam("SMP_ADDR_MEM"); %>" class="debug_1">
          <input type="text" name="SYS_INIT"     value="<% webmapGetParam("SYS_INIT"    ); %>" class="debug_1">
          <input type="text" name="CFG_SN_ADDR"  value="<% webmapGetParam("CFG_SN_ADDR" ); %>" class="debug_1">
          <input type="text" name="FL_ADDR"      value="<% webmapGetParam("FL_ADDR"     ); %>" class="debug_1">
          <input type="text" name="VME_P2_ADDR"  value="<% webmapGetParam("VME_P2_ADDR" ); %>" class="debug_1">
          <input type="text" name="I2C_ADDR"     value="<% webmapGetParam("I2C_ADDR"    ); %>" class="debug_1">
          <input type="text" name="CFG_P0HS_RD"  value="<% webmapGetParam("CFG_P0HS_RD" ); %>" class="debug_1">
          <input type="text" name="DEVICE"       value="<% webmapGetParam("DEVICE"      ); %>" class="debug_1">
          <input type="submit" class="menu_button" value="Position" title="cav_pos.htm" id="menu_bpm" style="width:80px">
        </form>
      </td>
      <td>
        <form method="get" action="adc16hl.htm">
          <input type="text" name="SMP_ADDR_REG" value="<% webmapGetParam("SMP_ADDR_REG"); %>" class="debug_1">
          <input type="text" name="SMP_ADDR_MEM" value="<% webmapGetParam("SMP_ADDR_MEM"); %>" class="debug_1">
          <input type="text" name="SYS_INIT"     value="<% webmapGetParam("SYS_INIT"    ); %>" class="debug_1">
          <input type="text" name="CFG_SN_ADDR"  value="<% webmapGetParam("CFG_SN_ADDR" ); %>" class="debug_1">
          <input type="text" name="FL_ADDR"      value="<% webmapGetParam("FL_ADDR"     ); %>" class="debug_1">
          <input type="text" name="VME_P2_ADDR"  value="<% webmapGetParam("VME_P2_ADDR" ); %>" class="debug_1">
          <input type="text" name="I2C_ADDR"     value="<% webmapGetParam("I2C_ADDR"    ); %>" class="debug_1">
          <input type="text" name="CFG_P0HS_RD"  value="<% webmapGetParam("CFG_P0HS_RD" ); %>" class="debug_1">
          <input type="text" name="DEVICE"       value="<% webmapGetParam("DEVICE"      ); %>" class="debug_1">
          <input type="submit" class="menu_button" value="ADC" title="adc16hl.htm" id="menu_adc16hl" style="width:80px">
        </form>
      </td>
      <td>
        <form method="get" action="cav_exp.htm">
          <input type="text" name="SMP_ADDR_REG" value="<% webmapGetParam("SMP_ADDR_REG"); %>" class="debug_1">
          <input type="text" name="SMP_ADDR_MEM" value="<% webmapGetParam("SMP_ADDR_MEM"); %>" class="debug_1">
          <input type="text" name="SYS_INIT"     value="<% webmapGetParam("SYS_INIT"    ); %>" class="debug_1">
          <input type="text" name="CFG_SN_ADDR"  value="<% webmapGetParam("CFG_SN_ADDR" ); %>" class="debug_1">
          <input type="text" name="FL_ADDR"      value="<% webmapGetParam("FL_ADDR"     ); %>" class="debug_1">
          <input type="text" name="VME_P2_ADDR"  value="<% webmapGetParam("VME_P2_ADDR" ); %>" class="debug_1">
          <input type="text" name="I2C_ADDR"     value="<% webmapGetParam("I2C_ADDR"    ); %>" class="debug_1">
          <input type="text" name="CFG_P0HS_RD"  value="<% webmapGetParam("CFG_P0HS_RD" ); %>" class="debug_1">
          <input type="text" name="DEVICE"       value="<% webmapGetParam("DEVICE"      ); %>" class="debug_1">
          <input type="submit" class="menu_button" value="Expert" title="cav_exp.htm" id="menu_expert" style="width:80px">
        </form>
      </td>
      <td>
        <form method="get" action="help.htm">
          <input type="submit" class="menu_button" value="Help" title="help.htm" id="menu_help" style="width:80px">
        </form>
      </td>
    </tr>
  </table>
</div>

