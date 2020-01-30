/*------------------------------------------------------------------------------
 *--                       Paul Scherrer Institute (PSI)
 *------------------------------------------------------------------------------
 *-- Unit    : WebMap.js
 *-- Author  : Waldemar Koprek, Section Diagnostic
 *-- Version : $Revision: 1.10 $
 *-- Date    : 10.04.2014
 *------------------------------------------------------------------------------
 *-- Copyright© PSI, Section Diagnostic
 *------------------------------------------------------------------------------
 *-- Comment : WebMap driver for BPM Systems
 *-----------------------------------------------------------------------------*/
 

function index_menu_init () {

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
    gpac_webmap_client.register_listener(index_webmap_callback);

}  

index_get_bpm_name = function(boardID) {
  
  switch (boardID) {
    case 1:
      return "Button";
    case 3:
      return "Cavity";
    case 4:
      return "Cavity";
    case 6:
      return "Re-entrant";
    default:
      return "";
  }
}

index_get_bpm_file_name = function(boardID) {
  
  switch (boardID) {
    case 1:
      return "but";
    case 3:
      return "cav";
    case 4:
      return "cav";
    case 6:
      return "ren";
    default:
      return "";
  }
}

index_get_adc_type = function(boardID, result) {
    
  switch (boardID) {
  	case 1:
    	if (result) // web page name
    	  return "adc12fl.htm";
    	else        // PB name
    	  return "ADC12FL";
    case 2:
    	if (result) // web page name
    	  return "adc16hl.htm";
    	else        // PB name
    	  return "ADC16HL";
    case 3:
    	if (result) // web page name
    	  return "dac16hl.htm";
    	else        // PB name
    	  return "DAC16HL";
    case 4:
    	if (result) // web page name
    	  return "qsfp.htm";
    	else        // PB name
    	  return "QSFP";
    default:
    	if (result) // web page name
    	  return "unknown.htm";
    	else        // PB name
    	  return "Unknown";
  }

}

index_webmap_callback = function() {

  var elems;

  //document.getElementById("webmap_test").innerHTML |= "jest";

  /* show RFFEs and BPMs */
  for (var i=1; i<5; i++) {
    var elems = document.getElementsByClassName("sn_p0_hs"+i);
    if (elems[0].innerHTML) {
      var types = document.getElementsByClassName("boardid_p0_hs"+i);
      var rffe_type = parseInt(types[0].innerHTML);
      document.getElementById("menu_rffe"+i).style.visibility = "visible";   
      document.getElementById("menu_rffe"+i).value = index_get_bpm_name(rffe_type)
                                                     + " RFFE" + i + " [" + elems[0].innerHTML + "]";
      document.getElementById("menu_rffe"+i).title = index_get_bpm_file_name(rffe_type) + "_rffe.htm";
      document.getElementById("form_rffe"+i).action = index_get_bpm_file_name(rffe_type) + "_rffe.htm";
      document.getElementById("menu_bpm"+i).style.visibility = "visible";   
      document.getElementById("menu_bpm"+i).title = index_get_bpm_file_name(rffe_type) + "_bpm.htm";
      document.getElementById("form_bpm"+i).action = index_get_bpm_file_name(rffe_type) + "_bpm.htm";
      document.getElementById("menu_bpm"+i).value = index_get_bpm_name(rffe_type) + " BPM" + i;
      document.getElementById("menu_pos"+i).style.visibility = "visible";   
      document.getElementById("menu_pos"+i).title = index_get_bpm_file_name(rffe_type) + "_pos.htm";
      document.getElementById("form_pos"+i).action = index_get_bpm_file_name(rffe_type) + "_pos.htm";
    }
    else {
      document.getElementById("menu_rffe"+i).style.visibility = "hidden";
      document.getElementById("menu_bpm"+i).style.visibility = "hidden";   
      document.getElementById("menu_pos"+i).style.visibility = "hidden";   
    }
  }
  // show IBFB 
  elems = document.getElementsByClassName("sn_pb12");
  vis_val = parseInt(elems[0].innerHTML);
  if (vis_val & 0x01000000) {
  	pb_type = (vis_val & 0x0000FF00)>>8;
    if (pb_type === 3) {
      document.getElementById("menu_bpm2").style.visibility = "visible";   
      document.getElementById("menu_bpm2").title = "ibfbctrl.htm";
      document.getElementById("form_bpm2").action = "ibfbctrl.htm";
      document.getElementById("menu_bpm2").value = "IBFB CTRL Y";      
    }
  }
  if (vis_val & 0x00010000) {
  	pb_type = (vis_val & 0x000000FF);
    if (pb_type === 3) {
      document.getElementById("menu_bpm4").style.visibility = "visible";   
      document.getElementById("menu_bpm4").title = "ibfbctrl.htm";
      document.getElementById("form_bpm4").action = "ibfbctrl.htm";
      document.getElementById("menu_bpm4").value = "IBFB CTRL X";      
    }
  }
  
  
  // COM board
  var elems = document.getElementsByClassName("sn_p0_hs7");
  if (elems[0].innerHTML) {
    document.getElementById("menu_com").style.visibility = "visible";   
    var types = document.getElementsByClassName("boardid_p0_hs7");
    boardID = parseInt(types[0].innerHTML);
    if (boardID === 5) {
      document.getElementById("menu_com").value = "COM [" + elems[0].innerHTML + "]";
      document.getElementById("menu_com").title  = "com.htm";
      document.getElementById("form_com").action = "com.htm";
    }
    else if (boardID === 8) {
      document.getElementById("menu_com").value = "VME RTMG [" + elems[0].innerHTML + "]";
      document.getElementById("menu_com").title  = "rtmg.htm";
      document.getElementById("form_com").action = "rtmg.htm";
    }
    else  {
      document.getElementById("menu_com").value = "Unknown board";
      document.getElementById("menu_com").title  = "unknown.htm";
      document.getElementById("form_com").action = "unknown.htm";
    }
  }
  else {
    document.getElementById("menu_com").style.visibility = "hidden";
  }

  // DIO board
  var elems = document.getElementsByClassName("sn_p0_hs6");
  if (elems[0].innerHTML) {
    document.getElementById("menu_dio").style.visibility = "visible";   
    document.getElementById("menu_dio").value = "DIO [" + elems[0].innerHTML + "]";
  }
  else {
    document.getElementById("menu_dio").style.visibility = "hidden";
  }

  // MBU power modules and fans
  var elems = document.getElementsByClassName("in_mbu");
  if (parseInt(elems[0].innerHTML,10) === 0) {
    document.getElementById("menu_mbu").style.visibility = "hidden";
  }
  else {
    document.getElementById("menu_mbu").style.visibility = "visible";   
  }

  /* show GPAC S/N */
  elems = document.getElementsByClassName("sn_gpac");
  if (elems[0].innerHTML) {
    document.getElementById("menu_gpac").value = "GPAC [" + elems[0].innerHTML + "]";
  }

  /* show ADCs */
  elems = document.getElementsByClassName("sn_pb12");
  vis_val = parseInt(elems[0].innerHTML);
  if (vis_val & 0x01000000) {
  	pb_type = (vis_val & 0x0000FF00)>>8;
    document.getElementById("menu_adc12").style.visibility = "visible";   
    sn_elems = document.getElementsByClassName("sn_pb1");
    document.getElementById("menu_adc12").value = index_get_adc_type(pb_type, 0) 
                                                  + " [" + sn_elems[0].innerHTML + "]";
    document.getElementById("menu_adc12").title  = index_get_adc_type(pb_type, 1);
    document.getElementById("form_adc12").action = index_get_adc_type(pb_type, 1);
  }
  else
      document.getElementById("menu_adc12").style.visibility = "hidden";   
  if (vis_val & 0x00010000) {
  	pb_type = (vis_val & 0x000000FF);
    document.getElementById("menu_adc34").style.visibility = "visible";   
    sn_elems = document.getElementsByClassName("sn_pb2");
    document.getElementById("menu_adc34").value =  index_get_adc_type(pb_type, 0) 
                                                  + " [" + sn_elems[0].innerHTML + "]";
    document.getElementById("menu_adc34").title  = index_get_adc_type(pb_type, 1);                                                    
    document.getElementById("form_adc34").action = index_get_adc_type(pb_type, 1);
  }      
  else
      document.getElementById("menu_adc34").style.visibility = "hidden";   
  
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


