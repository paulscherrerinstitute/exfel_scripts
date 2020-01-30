/*------------------------------------------------------------------------------
 *--                       Paul Scherrer Institute (PSI)
 *------------------------------------------------------------------------------
 *-- Unit    : WebMap.js
 *-- Author  : Waldemar Koprek, Section Diagnostic
 *-- Version : $Revision: 1.2 $
 *-- Date    : 10.04.2014
 *------------------------------------------------------------------------------
 *-- Copyright© PSI, Section Diagnostic
 *------------------------------------------------------------------------------
 *-- Comment : WebMap driver for BPM Systems
 *-----------------------------------------------------------------------------*/
 

function com_init () {

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
function pad(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

function swap32(val) {
    return ((val & 0xFF) << 24)
           | ((val & 0xFF00) << 8)
           | ((val >> 8) & 0xFF00)
           | ((val >> 24) & 0xFF);
}



function toHex(d) {
  if (d<0) {
    d += 256;
    return d.toString(16).toUpperCase();
  }
  else
    return d.toString(16).toUpperCase();
    //return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
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

function mbu_com_update_clk_switch() {
  var elems = document.getElementsByClassName("com_rj45_status");
  var elem_val = parseInt(elems[0].innerHTML);
  //document.getElementById("rj45_status").innerHTML = elem_val.toString(16);
  if (elem_val & 0x20000000)
    document.getElementById("sw_en_rt1").style.backgroundColor = "#88ff88";
  else
    document.getElementById("sw_en_rt1").style.backgroundColor = "transparent";
  if (elem_val & 0x10000000)
    document.getElementById("sw_en_rt2").style.backgroundColor = "#88ff88";
  else
    document.getElementById("sw_en_rt2").style.backgroundColor = "transparent";
  if (elem_val & 0x08000000)
    document.getElementById("sw_sel1").style.backgroundColor = "#88ff88";
  else
    document.getElementById("sw_sel1").style.backgroundColor = "transparent";
  if (elem_val & 0x04000000)
    document.getElementById("sw_en1").style.backgroundColor = "#88ff88";
  else
    document.getElementById("sw_en1").style.backgroundColor = "transparent";
  if (elem_val & 0x02000000)
    document.getElementById("sw_sel0").style.backgroundColor = "#88ff88";
  else
    document.getElementById("sw_sel0").style.backgroundColor = "transparent";
  if (elem_val & 0x01000000)
    document.getElementById("sw_en0").style.backgroundColor = "#88ff88";
  else
    document.getElementById("sw_en0").style.backgroundColor = "transparent";
  if (elem_val & 0x40000000)
    document.getElementById("rj45_status").style.backgroundColor = "#88ff88";
  else
    document.getElementById("rj45_status").style.backgroundColor = "transparent";

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

  //document.getElementById("trg1_ext").innerHTML = elem_val;
  if (elem_val & 0x00010000)
    document.getElementById("trg1_ext").style.backgroundColor = "#88ff88";
  else
    document.getElementById("trg1_ext").style.backgroundColor = "transparent";

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

function mbu_com_update_selftest_settings() {

  var elems = document.getElementsByClassName("sys_gtx_status");
  var elem_val = parseInt(elems[0].innerHTML);
  //document.getElementById("sys_gtx0_lossofsync").innerHTML = elem_val;
  
  if (elem_val & 0x00010000)
    document.getElementById("sys_gtx0_lossofsync").style.backgroundColor = "#ff8888";
  else
    document.getElementById("sys_gtx0_lossofsync").style.backgroundColor = "transparent";

}

function mbu_com_update_board_settings() {

 var elems = document.getElementsByClassName("com_sn");
  var elem_val = elems[0].innerHTML;
    //document.getElementById("com_sn").innerHTML = elem_val.length;
  if (elem_val.length) {
    document.getElementById("com_sn").innerHTML = elem_val;
    document.getElementById("com_sn").style.backgroundColor = "transparent";
  }
  else {
    document.getElementById("com_sn").innerHTML = "NO BOARD";
    document.getElementById("com_sn").style.backgroundColor = "#ff8888";
  }

}

function mbu_com_update_sfps() {

  var elems = document.getElementsByClassName("com_sfp_status");
  var elem_val = parseInt(elems[0].innerHTML);

  //document.getElementById("bpm2_gtx0_rx_loss").innerHTML = elem_val.toString(16);
  // SFP BPM1 GTX0
  if (elem_val & 0x80000000)
    document.getElementById("bpm2_gtx0_tx_fault").style.backgroundColor = "#ff8888";
  else
    document.getElementById("bpm2_gtx0_tx_fault").style.backgroundColor = "transparent";
  if (elem_val & 0x40000000)
    document.getElementById("bpm2_gtx0_tx_disable").style.backgroundColor = "#ff8888";
  else
    document.getElementById("bpm2_gtx0_tx_disable").style.backgroundColor = "transparent";
  if (elem_val & 0x20000000)
    document.getElementById("bpm2_gtx0_sfp_in").style.backgroundColor = "transparent";
  else
    document.getElementById("bpm2_gtx0_sfp_in").style.backgroundColor = "#88ff88";
  if (elem_val & 0x10000000)
    document.getElementById("bpm2_gtx0_rx_loss").style.backgroundColor = "#ff8888";
  else
    document.getElementById("bpm2_gtx0_rx_loss").style.backgroundColor = "transparent";

  // SFP BPM1 GTX0
  if (elem_val & 0x00800000)
    document.getElementById("bpm1_gtx0_tx_fault").style.backgroundColor = "#ff8888";
  else
    document.getElementById("bpm1_gtx0_tx_fault").style.backgroundColor = "transparent";
  if (elem_val & 0x00400000)
    document.getElementById("bpm1_gtx0_tx_disable").style.backgroundColor = "#ff8888";
  else
    document.getElementById("bpm1_gtx0_tx_disable").style.backgroundColor = "transparent";
  if (elem_val & 0x00200000)
    document.getElementById("bpm1_gtx0_sfp_in").style.backgroundColor = "transparent";
  else
    document.getElementById("bpm1_gtx0_sfp_in").style.backgroundColor = "#88ff88";
  if (elem_val & 0x00100000)
    document.getElementById("bpm1_gtx0_rx_loss").style.backgroundColor = "#ff8888";
  else
    document.getElementById("bpm1_gtx0_rx_loss").style.backgroundColor = "transparent";

  // SFP SYS GTX1
  if (elem_val & 0x00008000)
    document.getElementById("sys_gtx1_tx_fault").style.backgroundColor = "#ff8888";
  else
    document.getElementById("sys_gtx1_tx_fault").style.backgroundColor = "transparent";
  if (elem_val & 0x00004000)
    document.getElementById("sys_gtx1_tx_disable").style.backgroundColor = "#ff8888";
  else
    document.getElementById("sys_gtx1_tx_disable").style.backgroundColor = "transparent";
  if (elem_val & 0x00002000)
    document.getElementById("sys_gtx1_sfp_in").style.backgroundColor = "transparent";
  else
    document.getElementById("sys_gtx1_sfp_in").style.backgroundColor = "#88ff88";
  if (elem_val & 0x00001000)
    document.getElementById("sys_gtx1_rx_loss").style.backgroundColor = "#ff8888";
  else
    document.getElementById("sys_gtx1_rx_loss").style.backgroundColor = "transparent";

  // SFP SYS GTX0
  if (elem_val & 0x00000080)
    document.getElementById("sys_gtx0_tx_fault").style.backgroundColor = "#ff8888";
  else
    document.getElementById("sys_gtx0_tx_fault").style.backgroundColor = "transparent";
  if (elem_val & 0x00000040)
    document.getElementById("sys_gtx0_tx_disable").style.backgroundColor = "#ff8888";
  else
    document.getElementById("sys_gtx0_tx_disable").style.backgroundColor = "transparent"; 
  if (elem_val & 0x00000020)  
    document.getElementById("sys_gtx0_sfp_in").style.backgroundColor = "transparent";
  else
    document.getElementById("sys_gtx0_sfp_in").style.backgroundColor = "#88ff88";
  if (elem_val & 0x00000010)
    document.getElementById("sys_gtx0_rx_loss").style.backgroundColor = "#ff8888";
  else
    document.getElementById("sys_gtx0_rx_loss").style.backgroundColor = "transparent";

}

gpac_webmap_callback = function() {

  mbu_com_update_board_settings();
  mbu_com_update_timing_settings();
  mbu_com_parse_trains();
  mbu_com_update_clk_switch();
  mbu_com_parse_event();
  mbu_com_update_sfps();
  mbu_com_update_selftest_settings(); 
   
  return;
}

menu_onclick_callback = function(event) {


  var mel = document.getElementsByClassName("menu_button");        
	for(var i=0; i<mel.length; i++) {
    mel[i].style.backgroundColor = "#aaaaff";
  }

  event.target.style.backgroundColor = "#8888ff";

  //xmlhttp.onreadystatechange=function(){gpac_webmap_write_callback(xmlhttp)};
  xmlhttp.open("GET", event.target.title, false);
  //document.getElementById("webmap_test").innerHTML = event.target.title;    

  xmlhttp.send();
    
  
  return;
}

menu_onmouseover_callback = function(event) {

  //event.target.style.border = "1px outset #ffffff";
  event.target.style.backgroundColor = "#8888ff";

  return;
}

menu_onmouseout_callback = function(event) {

  //event.target.style.border = "1px outset #aaaaff";
  event.target.style.backgroundColor = "#aaaaff";

  return;
}


