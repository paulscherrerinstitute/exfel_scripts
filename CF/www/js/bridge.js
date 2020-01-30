/*------------------------------------------------------------------------------
 *--                       Paul Scherrer Institute (PSI)
 *------------------------------------------------------------------------------
 *-- Unit    : WebMap.js
 *-- Author  : Waldemar Koprek, Section Diagnostic
 *-- Version : $Revision: 1.1 $
 *-- Date    : 10.04.2014
 *------------------------------------------------------------------------------
 *-- Copyright© PSI, Section Diagnostic
 *------------------------------------------------------------------------------
 *-- Comment : WebMap driver for BPM Systems
 *-----------------------------------------------------------------------------*/
 

function bridge_init () {

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
    
    fill_select_fields();
    
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

  
bridge_gtx_update = function() {

  // GTX SYS FPGA
  var elems = document.getElementsByClassName("bpm_sys_gtx");
  var elem_val = parseInt(elems[0].innerHTML);

  if (elem_val & 0x00000002)
    document.getElementById("bpm1_sys_losofsync").style.backgroundColor = "#ff8888";
  else
    document.getElementById("bpm1_sys_losofsync").style.backgroundColor = "transparent";

  if (elem_val & 0x00020000)
    document.getElementById("bpm2_sys_losofsync").style.backgroundColor = "#ff8888";
  else
    document.getElementById("bpm2_sys_losofsync").style.backgroundColor = "transparent";
  
  var elems = document.getElementsByClassName("sfp_sys_gtx");
  var elem_val = parseInt(elems[0].innerHTML);

  if (elem_val & 0x00000002)
    document.getElementById("sfp2_sys_losofsync").style.backgroundColor = "#ff8888";
  else
    document.getElementById("sfp2_sys_losofsync").style.backgroundColor = "transparent";

  // GTX BPM1 FPGA
  var elems = document.getElementsByClassName("sysbpm2_bpm1_gtx");
  var elem_val = parseInt(elems[0].innerHTML);

  if (elem_val & 0x00000002)
    document.getElementById("sys_bpm1_losofsync").style.backgroundColor = "#ff8888";
  else
    document.getElementById("sys_bpm1_losofsync").style.backgroundColor = "transparent";

  if (elem_val & 0x00020000)
    document.getElementById("bpm2_bpm1_losofsync").style.backgroundColor = "#ff8888";
  else
    document.getElementById("bpm2_bpm1_losofsync").style.backgroundColor = "transparent";
  
  // GTX BPM2 FPGA
  var elems = document.getElementsByClassName("sysbpm1_bpm2_gtx");
  var elem_val = parseInt(elems[0].innerHTML);

  if (elem_val & 0x00000002)
    document.getElementById("sys_bpm2_losofsync").style.backgroundColor = "#ff8888";
  else
    document.getElementById("sys_bpm2_losofsync").style.backgroundColor = "transparent";

  if (elem_val & 0x00020000)
    document.getElementById("bpm1_bpm2_losofsync").style.backgroundColor = "#ff8888";
  else
    document.getElementById("bpm1_bpm2_losofsync").style.backgroundColor = "transparent";

  return;
}

bridge_rx_fsm_state = function(val) {
  switch (val) {
    case 0:
      return "reset";
    case 1:
      return "syncStart";
    case 2:
      return "waitForSync";
    case 3:
      return "waitForIdle";
    case 4:
      return "waitForData";
    case 5:
      return "data";
    case 6:
      return "EOF";
    case 7:
      return "quiet";
    default:
      return "Unknown";
  }
}

bridge_tx_fsm_state = function(val) {
  switch (val) {
    case 1:
      return "sendClk";
    case 2:
      return "waitForStableRX";
    case 3:
      return "sendIdle";
    case 4:
      return "waitForData";
    case 5:
      return "sendSOF";
    case 6:
      return "sendData";
    case 7:
      return "sendEOF";
    case 8:
      return "stayQuiet";
    default:
      return "Unknown";
  }
}

bridge_lvds_update = function(link) {

  // SYS FPGA
  var elems = document.getElementsByClassName(link);
  var elem_val = parseInt(elems[0].innerHTML);
  document.getElementById(link+"_rx_fsm").innerHTML = bridge_rx_fsm_state(elem_val & 0x00000007);
  //document.getElementById(link+"_tx_fsm").innerHTML = bridge_tx_fsm_state((elem_val & 0x0F000000)>>24);
  document.getElementById(link+"_tx_fsm").innerHTML = ((elem_val>>24)&0x000000FF).toString(2);
  if (elem_val & 0x00000010)
    document.getElementById(link+"_rx_ready").style.backgroundColor = "#88ff88";
  else
    document.getElementById(link+"_rx_ready").style.backgroundColor = "#ff8888";
  document.getElementById(link+"_rx_delay").innerHTML = (elem_val & 0x0000FF00)>>8;


  return;
}
  
gpac_webmap_callback = function() {

  bridge_gtx_update();
  bridge_lvds_update("sys_lvds");
  bridge_lvds_update("bpm1_lvds");
  bridge_lvds_update("bpm2_lvds");
  bridge_lvds_update("bp_sys_lvds");
  bridge_lvds_update("bp_bpm1_lvds");
  bridge_lvds_update("bp_bpm2_lvds");
  
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

fill_select_fields = function() {

var fields = ["bpm1_sys_loopback", 
              "bpm2_sys_loopback",
              "sys_bpm1_loopback",
              "bpm2_bpm1_loopback",
              "sys_bpm2_loopback",
              "bpm1_bpm2_loopback",
              ];
var elems  = [{value:0, name:"000: Normal operation"}, 
              {value:1, name:"001: Near-End PCS"},
              {value:2, name:"010: Near-End PMA"},
              {value:4, name:"100: Far-End PMA"},
              {value:6, name:"110: Far-End PCS"}];

  for (i = 0; i < fields.length; i++) {
    var mel = document.getElementsByClassName(fields[i]);        
    for (j = 0; j < elems.length; j++) {
      var opt = document.createElement('option');
      opt.value = elems[j].value;
      opt.innerHTML = elems[j].name;
      mel[0].appendChild(opt);
    }
  }              
              
  return;
}

