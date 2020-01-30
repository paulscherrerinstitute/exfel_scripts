/*------------------------------------------------------------------------------
 *--                       Paul Scherrer Institute (PSI)
 *------------------------------------------------------------------------------
 *-- Unit    : WebMap.js
 *-- Author  : Waldemar Koprek, Section Diagnostic
 *-- Version : $Revision: 1.4 $
 *-- Date    : 10.04.2014
 *------------------------------------------------------------------------------
 *-- Copyright© PSI, Section Diagnostic
 *------------------------------------------------------------------------------
 *-- Comment : WebMap driver for BPM Systems
 *-----------------------------------------------------------------------------*/
 

function rtmg_init () {

  /***************************************************************** 
  * Web page initialization.
  * Unobtrusive bounding of JavaScript to HTML
  ******************************************************************/
    
    var mel = document.getElementsByClassName("menu_button");        
  	for(var i=0; i<mel.length; i++) {
      //mel[i].onclick     = function(event) {menu_onclick_callback(event)};
      mel[i].onmouseover = function(event) {menu_onmouseover_callback(event)};
      mel[i].onmouseout  = function(event) {menu_onmouseout_callback(event)};
    }
    
    /* create event handlers */
    gpac_webmap_client.register_listener(gpac_webmap_callback);

}  

/*****************************************************************
 * Utility functions
 * 
 ******************************************************************/

function mbu_rtmg_update_board_settings() {

 var elems = document.getElementsByClassName("rtmg_sn");
  var elem_val = elems[0].innerHTML;
    //document.getElementById("com_sn").innerHTML = elem_val.length;
  if (elem_val.length) {
    document.getElementById("rtmg_sn").innerHTML = elem_val;
    document.getElementById("rtmg_sn").style.backgroundColor = "transparent";
  }
  else {
    document.getElementById("rtmg_sn").innerHTML = "NO BOARD";
    document.getElementById("rtmg_sn").style.backgroundColor = "#ff8888";
  }

}

function mbu_com_update_sfps() {

  var elems = document.getElementsByClassName("rtmg_sfp1");
  var sfp1_val = parseInt(elems[0].innerHTML);
  var elems = document.getElementsByClassName("rtmg_sfp2");
  var sfp2_val = parseInt(elems[0].innerHTML);
  var sfp_val = [];
  
  sfp_val[0] = (sfp1_val & 0xFF000000) >> 24;
  sfp_val[1] = (sfp1_val & 0x00FF0000) >> 16;
  sfp_val[2] = (sfp1_val & 0x0000FF00) >> 8;
  sfp_val[3] = (sfp1_val & 0x000000FF);
  sfp_val[4] = (sfp2_val & 0xFF000000) >> 24;
  sfp_val[5] = (sfp2_val & 0x00FF0000) >> 16;
  sfp_val[6] = (sfp2_val & 0x0000FF00) >> 8;
  sfp_val[7] = (sfp2_val & 0x000000FF);

  for (var i=0; i<8; i++) {
    //document.getElementById("rtmg_gtx"+i+"_rx_loss").innerHTML = sfp_val[i].toString(16);
    // sfp in
    if (sfp_val[i] & 0x20)
      document.getElementById("rtmg_gtx"+i+"_sfp_in").style.backgroundColor = "transparent";
    else
      document.getElementById("rtmg_gtx"+i+"_sfp_in").style.backgroundColor = "#88ff88";
    // rx loss
    if (sfp_val[i] & 0x10)
      document.getElementById("rtmg_gtx"+i+"_rx_loss").style.backgroundColor = "#ff8888";
    else
      document.getElementById("rtmg_gtx"+i+"_rx_loss").style.backgroundColor = "transparent";
    // tx fault
    if (sfp_val[i] & 0x80)
      document.getElementById("rtmg_gtx"+i+"_tx_fault").style.backgroundColor = "#ff8888";
    else
      document.getElementById("rtmg_gtx"+i+"_tx_fault").style.backgroundColor = "transparent";
    // tx disable
    if (sfp_val[i] & 0x40)
      document.getElementById("rtmg_gtx"+i+"_tx_disable").style.backgroundColor = "#ff8888";
    else
      document.getElementById("rtmg_gtx"+i+"_tx_disable").style.backgroundColor = "transparent";    
  }

}

function mbu_com_update_timing_settings() {

  var elems = document.getElementsByClassName("date1");
  var elem_val = (parseInt(elems[0].innerHTML));
  var d = new Date(elem_val*1000);
  document.getElementById("date1").innerHTML = d;

  var elems = document.getElementsByClassName("pulse_num");
  var elem_val = parseInt(elems[0].innerHTML);
  document.getElementById("pulse_num").innerHTML = (elem_val);

  var elems = document.getElementsByClassName("beam_mode");
  var elem_val = (parseInt(elems[0].innerHTML, 10));
  document.getElementById("beam_mode").innerHTML = '0x' + elem_val.toString(16).toUpperCase();

  var elems = document.getElementsByClassName("section_pattern");
  var elem_val = (parseInt(elems[0].innerHTML, 10));
  document.getElementById("section_pattern").innerHTML = '0x' + elem_val.toString(16).toUpperCase();

  var elems = document.getElementsByClassName("trg1_ext");
  var elem_val = parseInt(elems[0].innerHTML);

  //document.getElementById("sys_gtx1_lossofsync").innerHTML = elem_val.toString(16);
  if (elem_val & 0x01000000)
    document.getElementById("sys_gtx1_lossofsync").style.backgroundColor = "#ff8888";
  else
    document.getElementById("sys_gtx1_lossofsync").style.backgroundColor = "transparent";

  if (elem_val & 0x00000001)
    document.getElementById("pll216M_locked").style.backgroundColor = "#88ff88";
  else
    document.getElementById("pll216M_locked").style.backgroundColor = "transparent";

}

function mbu_com_parse_trains() {
  // Train 1
  var elems = document.getElementsByClassName("beam1_start");
  var elem_val = (parseInt(elems[0].innerHTML, 10));
  document.getElementById("beam1_start").innerHTML = elem_val;
  var elems = document.getElementsByClassName("beam1_duration");
  var elem_val = (parseInt(elems[0].innerHTML, 10));
  document.getElementById("beam1_duration").innerHTML = elem_val;
  var elems = document.getElementsByClassName("beam1_increment");
  var elem_val = (parseInt(elems[0].innerHTML, 10));
  document.getElementById("beam1_increment").innerHTML = elem_val;
  var elems = document.getElementsByClassName("beam1_length");
  var elem_val = (parseInt(elems[0].innerHTML, 10));
  document.getElementById("beam1_length").innerHTML = elem_val;

  // Train 2
  var elems = document.getElementsByClassName("beam2_start");
  var elem_val = (parseInt(elems[0].innerHTML, 10));
  document.getElementById("beam2_start").innerHTML = elem_val;
  var elems = document.getElementsByClassName("beam2_duration");
  var elem_val = (parseInt(elems[0].innerHTML, 10));
  document.getElementById("beam2_duration").innerHTML = elem_val;
  var elems = document.getElementsByClassName("beam2_increment");
  var elem_val = (parseInt(elems[0].innerHTML, 10));
  document.getElementById("beam2_increment").innerHTML = elem_val;
  var elems = document.getElementsByClassName("beam2_length");
  var elem_val = (parseInt(elems[0].innerHTML, 10));
  document.getElementById("beam2_length").innerHTML = elem_val;

}

function mbu_com_parse_event() {

  var elems;
  var val;
  var elem_val = new Array();

  for (var i=0;i<10;i++) {
    elems = document.getElementsByClassName("event" + i);
    elem_val[i] = parseInt(elems[0].innerHTML, 10);
  }
  
  // event codes
  //val = elem_val[0]>>24;
  val = elem_val[0]&0xFF;
  document.getElementById("event0_code").innerHTML = val;
  val = (elem_val[1]>>8) & 0x000000FF;
  document.getElementById("event1_code").innerHTML = val;
  val = (elem_val[2]>>16) & 0x000000FF;
  document.getElementById("event2_code").innerHTML = val;
  val = (elem_val[3]>>24) & 0x000000FF;
  document.getElementById("event3_code").innerHTML = val;
  val = elem_val[5] & 0x000000FF;
  document.getElementById("event4_code").innerHTML = val;
  val = (elem_val[6]>>8) & 0x000000FF;
  document.getElementById("event5_code").innerHTML = val;
  val = (elem_val[7]>>16) & 0x000000FF;
  document.getElementById("event6_code").innerHTML = val;
  val = elem_val[8]>>24;
  document.getElementById("event7_code").innerHTML = val;

  // event delays
  val = ((elem_val[0])>>8) + ((elem_val[1]<<24) & 0xFF000000);
  document.getElementById("event0_delay").innerHTML = val.toString(10);
  val = ((elem_val[1] >> 16) & 0xFFFF) + (elem_val[2] << 16);
  document.getElementById("event1_delay").innerHTML = val.toString(10);
  val = ((elem_val[2] >> 24) & 0xFF) + ((elem_val[3] << 8) & 0xFFFFFF00);
  document.getElementById("event2_delay").innerHTML = val.toString(10);
  val = elem_val[4];
  document.getElementById("event3_delay").innerHTML = val.toString(10);
  val = ((elem_val[5])>>8) + ((elem_val[6]<<24) & 0xFF000000);
  document.getElementById("event4_delay").innerHTML = val.toString(10);
  val = ((elem_val[6] >> 16) & 0xFFFF) + (elem_val[7] << 16);
  document.getElementById("event5_delay").innerHTML = val.toString(10);
  val = ((elem_val[7] >> 24) & 0xFF) + ((elem_val[8] << 8) & 0xFFFFFF00);
  document.getElementById("event6_delay").innerHTML = val.toString(10);
  val = elem_val[9];
  document.getElementById("event7_delay").innerHTML = val.toString(10);
}

rtmg_update_rj45 = function() {
  
  for(var i=1; i<9; i++) {
    elems = document.getElementsByClassName("amp_align_" + i);
    elem_val = parseInt(elems[0].innerHTML, 10);
    gates = document.getElementsByClassName("amp_gate_" + i);
    gate_val = parseInt(gates[0].innerHTML, 10); 
    val = 62.5/(2*(gate_val+1) & 0xFF); 
    document.getElementById("d_amp_speed_"+i).innerHTML = val.toFixed(2);
    if (elem_val & 0x100) {
      document.getElementById("d_amp_align_"+i).style.backgroundColor = "#88ff88";
      document.getElementById("d_amp_delay_"+i).innerHTML = elem_val & 0xFF;
      val = 0.016*((elem_val>>9) & 0x1FFFF);
      document.getElementById("d_amp_gate_len_"+i).innerHTML = val.toFixed(3);
      val = 0.016*((gate_val>>9) & 0x1FFFFF);
      document.getElementById("d_amp_gate_del_"+i).innerHTML = val.toFixed(3);
      if (elem_val & 0x80000000) // loss of sync
        document.getElementById("d_amp_loss_"+i).style.backgroundColor = "#ff8888";
      else
        document.getElementById("d_amp_loss_"+i).style.backgroundColor = "transparent";
      if (gate_val & 0x00000100) // Gate Enabled
        document.getElementById("d_amp_gate_ena_"+i).style.backgroundColor = "#88ff88";
      else
        document.getElementById("d_amp_gate_ena_"+i).style.backgroundColor = "#ff8888";      
      stat = document.getElementsByClassName("amp_status_" + i);
      stat_val = parseInt(stat[0].innerHTML, 10); 
      if (stat_val & 0x80000000) // DC PWR
        document.getElementById("d_amp_dc_pwr_"+i).style.backgroundColor = "#88ff88";
      else
        document.getElementById("d_amp_dc_pwr_"+i).style.backgroundColor = "#ff8888";
      if (stat_val & 0x40000000) // FWD PWR
        document.getElementById("d_amp_fwd_pwr_"+i).style.backgroundColor = "#88ff88";
      else
        document.getElementById("d_amp_fwd_pwr_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x20000000) // OVERTEMP
        document.getElementById("d_amp_overtemp_"+i).style.backgroundColor = "#ff8888";
      else
        document.getElementById("d_amp_overtemp_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x10000000) // OVERDUTY
        document.getElementById("d_amp_overduty_"+i).style.backgroundColor = "#ff8888";
      else
        document.getElementById("d_amp_overduty_"+i).style.backgroundColor = "transparent";
      //if (stat_val & 0x08000000) // FWD MAX
      //  document.getElementById("d_amp_fwd_max_"+i).style.backgroundColor = "#ff8888";
      //else
      //  document.getElementById("d_amp_fwd_max_"+i).style.backgroundColor = "transparent";
      //if (stat_val & 0x04000000) // REFL MAX
      //  document.getElementById("d_amp_refl_max_"+i).style.backgroundColor = "#ff8888";
      //else
      //  document.getElementById("d_amp_refl_max_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x02000000) // FAULT
        document.getElementById("d_amp_fault_"+i).style.backgroundColor = "#ff8888";
      else
        document.getElementById("d_amp_fault_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x01000000) // SHUTDOWN
        document.getElementById("d_amp_shutdown_"+i).style.backgroundColor = "#ff8888";
      else
        document.getElementById("d_amp_shutdown_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x00800000) // ADDR SEL
        document.getElementById("d_amp_addr_sel_"+i).style.backgroundColor = "#ff8888";
      else
        document.getElementById("d_amp_addr_sel_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x00800000) // ADDR SEL
        document.getElementById("d_amp_addr_sel_"+i).style.backgroundColor = "#5555ff";
      else
        document.getElementById("d_amp_addr_sel_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x00400000) // ENABLED
        document.getElementById("d_amp_enabled_"+i).style.backgroundColor = "#88ff88";
      else
        document.getElementById("d_amp_enabled_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x00200000) // OVERDRIVE
        document.getElementById("d_amp_overdrive_"+i).style.backgroundColor = "#ff8888";
      else
        document.getElementById("d_amp_overdrive_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x00100000) // PA1 OK
        document.getElementById("d_amp_pa1_ok_"+i).style.backgroundColor = "#88ff88";
      else
        document.getElementById("d_amp_pa1_ok_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x00080000) // PA2 OK
        document.getElementById("d_amp_pa2_ok_"+i).style.backgroundColor = "#88ff88";
      else
        document.getElementById("d_amp_pa2_ok_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x00040000) // PA3 OK
        document.getElementById("d_amp_pa3_ok_"+i).style.backgroundColor = "#88ff88";
      else
        document.getElementById("d_amp_pa3_ok_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x00020000) // PSU1 OK
        document.getElementById("d_amp_psu1_ok_"+i).style.backgroundColor = "#88ff88";
      else
        document.getElementById("d_amp_psu1_ok_"+i).style.backgroundColor = "transparent";
      if (stat_val & 0x00010000) // PSU2 OK
        document.getElementById("d_amp_psu2_ok_"+i).style.backgroundColor = "#88ff88";
      else
        document.getElementById("d_amp_psu2_ok_"+i).style.backgroundColor = "transparent";
    }
    else {
      document.getElementById("d_amp_align_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_loss_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_delay_"+i).innerHTML = "";
      document.getElementById("d_amp_dc_pwr_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_fwd_pwr_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_overtemp_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_overduty_"+i).style.backgroundColor = "transparent";
      //document.getElementById("d_amp_fwd_max_"+i).style.backgroundColor = "transparent";
      //document.getElementById("d_amp_refl_max_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_fault_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_shutdown_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_addr_sel_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_enabled_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_overdrive_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_pa1_ok_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_pa2_ok_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_pa3_ok_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_psu1_ok_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_psu2_ok_"+i).style.backgroundColor = "transparent";
      document.getElementById("d_amp_gate_len_"+i).innerHTML = "";
      //document.getElementById("d_amp_speed_"+i).innerHTML = "";
      document.getElementById("d_amp_gate_len_"+i).innerHTML = "";
      document.getElementById("d_amp_gate_ena_"+i).style.backgroundColor = "transparent";      
      document.getElementById("d_amp_gate_del_"+i).innerHTML = "";
    }

  }
}

gpac_webmap_callback = function() {

  mbu_rtmg_update_board_settings();
  mbu_com_update_sfps();
  mbu_com_update_timing_settings();
  mbu_com_parse_trains();
  mbu_com_parse_event();
  
  elems = document.getElementsByClassName("ip_version");
  elem_val = parseInt(elems[0].innerHTML, 10);

  if (elem_val == 2) {
    document.getElementById("amp_ctrl").style.visibility = "visible";
    rtmg_update_rj45();
  }
  else {
    document.getElementById("amp_ctrl").style.visibility = "hidden";
  }
  
  return;
}

menu_onclick_callback = function(event) {

  var mel = document.getElementsByClassName("menu_button");        
	for(var i=0; i<mel.length; i++) {
    mel[i].style.backgroundColor = "#aaaaff";
  }

  event.target.style.backgroundColor = "#8888ff";

  xmlhttp.open("GET", event.target.title, false);

  xmlhttp.send(); 
  
  return;
}

menu_onmouseover_callback = function(event) {

  event.target.style.backgroundColor = "#8888ff";

  return;
}

menu_onmouseout_callback = function(event) {

  event.target.style.backgroundColor = "#aaaaff";

  return;
}


