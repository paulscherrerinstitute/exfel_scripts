/*------------------------------------------------------------------------------
 *--                       Paul Scherrer Institute (PSI)
 *------------------------------------------------------------------------------
 *-- Unit    : WebMap.js
 *-- Author  : Waldemar Koprek, Section Diagnostic
 *-- Version : $Revision: 1.7 $
 *-- Date    : 10.04.2014
 *------------------------------------------------------------------------------
 *-- Copyright© PSI, Section Diagnostic
 *------------------------------------------------------------------------------
 *-- Comment : WebMap driver for BPM Systems
 *-----------------------------------------------------------------------------*/
 

function gpac_init () {

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

gpac_service_create_date_string = function(name) {

  var elems = document.getElementsByClassName(name + "_year");
  var cfg_fpga_year = parseInt(elems[0].innerHTML);
  var elems = document.getElementsByClassName(name + "_month");
  var cfg_fpga_month = parseInt(elems[0].innerHTML);
  var elems = document.getElementsByClassName(name + "_day");
  var cfg_fpga_day = parseInt(elems[0].innerHTML);
  var elems = document.getElementsByClassName(name + "_hour");
  var cfg_fpga_hour = parseInt(elems[0].innerHTML);
  var elems = document.getElementsByClassName(name + "_minute");
  var cfg_fpga_minute = parseInt(elems[0].innerHTML);

  return cfg_fpga_year + "." 
                  + pad(cfg_fpga_month, 2) + "." 
                  + pad(cfg_fpga_day, 2) + " "
                  + pad(cfg_fpga_hour, 2) + ":"
                  + pad(cfg_fpga_minute, 2);
 
}

gpac_get_pb_type = function(boardID) {
  
  switch (boardID) {
    case 1:
      return "ADC12FL";
    case 2:
      return "ADC16HL";
    case 3:
      return "DAC16HL";
    case 4:
      return "QSFP";
    default:
      return "Unknown";
  }
}

gpac_get_rffe_type = function(boardID) {
  
  switch (boardID) {
    case 0:
      return "";
    case 1:
      return "Button RFFE";
    case 3:
      return "Cavity RFFE v2";
    case 4:
      return "Cavity RFFE v3";
    case 5:
      return "MBU COM";
    case 6:
      return "Re-entrant RFFE";
    case 7:
      return "VME RTM PAC";
    case 8:
      return "VME RTMG";
    case 9:
      return "MBU DIO";
    case 10:
      return "SwissFEL RFFE v1";
    case 11:
      return "SwissFEL PAC";
    case 12:
      return "SwissFEL RFFE 3.3GHz";
    case 13:
      return "SwissFEL RFFE 4.9GHz";
    default:
      return "Unknown board";
  }
}
  
gpac_webmap_callback = function() {

  var elems = document.getElementsByClassName("fpga_configure");
  var fw_conf = parseInt(elems[0].innerHTML);
  
  
  /* cfg fpga */
  if ((fw_conf & 1) > 0) {
    document.getElementById("cfg_fpga_cfg").innerHTML = "Yes";
    document.getElementById("cfg_fw_date").innerHTML = gpac_service_create_date_string("cfg_fw");
    document.getElementById("cfg_sw_date").innerHTML = gpac_service_create_date_string("cfg_sw");
    var elems = document.getElementsByClassName("cfg_fw_version");
    var fw_num = parseInt(elems[0].innerHTML);
    document.getElementById("cfg_fw_version").innerHTML = "0x" + fw_num.toString(16);
  }
  else {
    document.getElementById("cfg_fpga_cfg").innerHTML = "No";
    document.getElementById("cfg_fw_version").innerHTML = "";
    document.getElementById("cfg_fw_date").innerHTML = "";
    document.getElementById("cfg_sw_date").innerHTML = "";
  }

  /* seu fpga */
  if ((fw_conf & 2) > 0)
    document.getElementById("seu_fpga_cfg").innerHTML = "Yes";
  else
    document.getElementById("seu_fpga_cfg").innerHTML = "No";
  
  /* sys fpga */
  if ((fw_conf & 4) > 0) {
    document.getElementById("sys_fpga_cfg").innerHTML = "Yes";
    document.getElementById("sys_fw_date").innerHTML = gpac_service_create_date_string("sys_fw");
    document.getElementById("sys_sw_date").innerHTML = gpac_service_create_date_string("sys_sw");
    var elems = document.getElementsByClassName("sys_fw_version");
    var fw_num = parseInt(elems[0].innerHTML);
    document.getElementById("sys_fw_version").innerHTML = "0x" + fw_num.toString(16);
  }
  else {
    document.getElementById("sys_fpga_cfg").innerHTML = "No";
    document.getElementById("sys_fw_version").innerHTML = "";
    document.getElementById("sys_fw_date").innerHTML = "";
    document.getElementById("sys_sw_date").innerHTML = "";
  }

  /* bp fpga */
  if ((fw_conf & 8) > 0) {
    document.getElementById("bp_fpga_cfg").innerHTML = "Yes";
    document.getElementById("bp_fw_date").innerHTML = gpac_service_create_date_string("bp_fw");
    document.getElementById("bp_sw_date").innerHTML = gpac_service_create_date_string("bp_sw");
    var elems = document.getElementsByClassName("bp_fw_version");
    var fw_num = parseInt(elems[0].innerHTML);
    document.getElementById("bp_fw_version").innerHTML = "0x" + fw_num.toString(16);
  }
  else {
    document.getElementById("bp_fpga_cfg").innerHTML = "No";
    document.getElementById("bp_fw_version").innerHTML = "";
    document.getElementById("bp_fw_date").innerHTML = "";
    document.getElementById("bp_sw_date").innerHTML = "";
  }
  
  /* bpm1 fpga */
  if ((fw_conf & 16) > 0) {
    document.getElementById("bpm1_fpga_cfg").innerHTML = "Yes";
    document.getElementById("bpm1_fw_date").innerHTML = gpac_service_create_date_string("bpm1_fw");
    document.getElementById("bpm1_sw_date").innerHTML = gpac_service_create_date_string("bpm1_sw");
    var elems = document.getElementsByClassName("bpm1_fw_version");
    var fw_num = parseInt(elems[0].innerHTML);
    document.getElementById("bpm1_fw_version").innerHTML = "0x" + fw_num.toString(16);
  }
  else {
    document.getElementById("bpm1_fpga_cfg").innerHTML = "No";
    document.getElementById("bpm1_fw_version").innerHTML = "";
    document.getElementById("bpm1_fw_date").innerHTML = "";
    document.getElementById("bpm1_sw_date").innerHTML = "";
  }

  /* bpm2 fpga */
  if ((fw_conf & 32) > 0) {
    document.getElementById("bpm2_fpga_cfg").innerHTML = "Yes";
    document.getElementById("bpm2_fw_date").innerHTML = gpac_service_create_date_string("bpm2_fw");
    document.getElementById("bpm2_sw_date").innerHTML = gpac_service_create_date_string("bpm2_sw");
    var elems = document.getElementsByClassName("bpm2_fw_version");
    var fw_num = parseInt(elems[0].innerHTML);
    document.getElementById("bpm2_fw_version").innerHTML = "0x" + fw_num.toString(16);
  }
  else {
    document.getElementById("bpm2_fpga_cfg").innerHTML = "No";
    document.getElementById("bpm2_fw_version").innerHTML = "";
    document.getElementById("bpm2_fw_date").innerHTML = "";
    document.getElementById("bpm2_sw_date").innerHTML = "";
  }

  /* power calculation */
  var pwr_total = 0;
  /* 5v0_cfg */
  var elems = document.getElementsByClassName("pwr_5v0_cfg_vout");
  var pwr_v = parseFloat(elems[0].innerHTML);
  var elems = document.getElementsByClassName("pwr_5v0_cfg_i");
  var pwr_i = parseFloat(elems[0].innerHTML);
  var elems = document.getElementsByClassName("pwr_5v0_cfg_p"); 
  var pwr_p = pwr_i * pwr_v;
  elems[0].innerHTML = pwr_p.toFixed(3);
  pwr_total += pwr_p;
  /* 3v3 */
  var elems = document.getElementsByClassName("pwr_3v3_vout");
  var pwr_v = parseFloat(elems[0].innerHTML);
  var elems = document.getElementsByClassName("pwr_3v3_i");
  var pwr_i = parseFloat(elems[0].innerHTML);
  var elems = document.getElementsByClassName("pwr_3v3_p");
  var pwr_p = pwr_i * pwr_v;
  elems[0].innerHTML = pwr_p.toFixed(3);
  pwr_total += pwr_p;
  /* 5v0 */
  var elems = document.getElementsByClassName("pwr_5v0_vout");
  var pwr_v = parseFloat(elems[0].innerHTML);
  var elems = document.getElementsByClassName("pwr_5v0_i");
  var pwr_i = parseFloat(elems[0].innerHTML);
  var elems = document.getElementsByClassName("pwr_5v0_p");
  var pwr_p = pwr_i * pwr_v;
  elems[0].innerHTML = pwr_p.toFixed(3);
  pwr_total += pwr_p;
  
  /* 3v3_pb */
  var elems = document.getElementsByClassName("pwr_3v3_pb_vout");
  var pwr_v = parseFloat(elems[0].innerHTML);
  var elems = document.getElementsByClassName("pwr_3v3_pb_i");
  var pwr_i = parseFloat(elems[0].innerHTML);
  var elems = document.getElementsByClassName("pwr_3v3_pb_p");
  var pwr_p = pwr_i * pwr_v;
  elems[0].innerHTML = pwr_p.toFixed(3);
  pwr_total += pwr_p;

  /* 3v3_pb */
  var elems = document.getElementsByClassName("pwr_5v0_pb_vout");
  var pwr_v = parseFloat(elems[0].innerHTML);
  var elems = document.getElementsByClassName("pwr_5v0_pb_i");
  var pwr_i = parseFloat(elems[0].innerHTML);
  var elems = document.getElementsByClassName("pwr_5v0_pb_p");
  var pwr_p = pwr_i * pwr_v;
  elems[0].innerHTML = pwr_p.toFixed(3);
  pwr_total += pwr_p;

  /* total power */
  var elems = document.getElementsByClassName("pwr_total");
  elems[0].innerHTML = pwr_total.toFixed(3);
  
  /* RFFE status */
  for(var i=1; i<8; i++) {
    var elems = document.getElementsByClassName("status_rffe"+i);
    var rffe_status = parseInt(elems[0].innerHTML);
    if ((rffe_status & 0x10000) > 0) {
      document.getElementById("in_rffe"+i).style.backgroundColor = "#88ff88";
    }
    else {
      document.getElementById("in_rffe"+i).style.backgroundColor = "transparent";
    }
    if ((rffe_status & 0x100) > 0) {
      document.getElementById("err_rffe"+i).style.backgroundColor = "#ff8888";
    }
    else {
      document.getElementById("err_rffe"+i).style.backgroundColor = "transparent";
    }
    if ((rffe_status & 0x1) > 0) {
      document.getElementById("pg_rffe"+i).style.backgroundColor = "#88ff88";
    }
    else {
      document.getElementById("pg_rffe"+i).style.backgroundColor = "transparent";
    }
    if (i != 5) {
      var elems = document.getElementsByClassName("type_rffe"+i);
      var rffe_type = parseInt(elems[0].innerHTML);
      document.getElementById("txt_type_rffe"+i).innerHTML = gpac_get_rffe_type(rffe_type);
      //document.getElementById("txt_type_rffe"+i).innerHTML = rffe_type;
    }
  }

  /* PB */
  var elems = document.getElementsByClassName("cfg_pb_present");
  var pb_status = parseInt(elems[0].innerHTML);
  if (pb_status & 0x01000000) {
    document.getElementById("in_pb1").style.backgroundColor = "#88ff88";
  	document.getElementById("in_pb1").innerHTML = gpac_get_pb_type((pb_status>>8)&0x000000FF);
  }
  if (pb_status & 0x00010000) {
    document.getElementById("in_pb2").style.backgroundColor = "#88ff88";
  	document.getElementById("in_pb2").innerHTML = gpac_get_pb_type(pb_status&0x000000FF);
  }

  /* MAC */
  var elems = document.getElementsByClassName("cfg_mac1");
  var cfg_mac1 = parseInt(elems[0].innerHTML);
  var elems = document.getElementsByClassName("cfg_mac2");
  var cfg_mac2 = parseInt(elems[0].innerHTML);
  //var cfg_mac = [0, 0, 0, 0, 0, 0];
  //cfg_mac[0] = (cfg_mac1 >> 24) & 0xFF;
  //cfg_mac[1] = (cfg_mac1 >> 16) & 0xFF;
  //cfg_mac[2] = (cfg_mac1 >>  8) & 0xFF;
  //cfg_mac[3] = cfg_mac1 & 0xFF;
  cfg_mac2 = (cfg_mac2 >> 16) & 0x0000FFFF;
  document.getElementById("cfg_mac").innerHTML = "00" + cfg_mac1.toString(16) + cfg_mac2.toString(16);
  
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


