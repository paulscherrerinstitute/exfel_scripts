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
 
function cav_bpm_init () {

  /***************************************************************** 
  * Web page initialization.
  * Unobtrusive bounding of JavaScript to HTML
  ******************************************************************/
  
  cav_bpm_fill_option_field();
  /* create event handlers */
  gpac_webmap_client.register_listener(cav_bpm_webmap_callback);

}  

cav_bpm_webmap_callback = function() {


  var el_read = document.getElementsByClassName("cav_bpm_smp_done");        
  var el_disp = document.getElementById("cav_bpm_smp_done");        
  
  if (parseInt(el_read[0].innerHTML,10) === 0) 
    el_disp.style.backgroundColor = "transparent";
  else 
    el_disp.style.backgroundColor = "#88ff88";

  return;
}

cav_bpm_fill_option_field = function() {
  var num_str;

  var mel = document.getElementsByClassName("cav_bpm_smp_mode");        
  var opt = document.createElement('option');
  opt.value = 0;
  opt.innerHTML = "External";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 1;
  opt.innerHTML = "Signal";
  mel[0].appendChild(opt);

  
  /*
  var mel = document.getElementsByClassName("but_bpm_trg_src");        
  var opt = document.createElement('option');
  opt.value = 0;
  opt.innerHTML = "Single";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 1;
  opt.innerHTML = "Machine trigger";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 3;
  opt.innerHTML = "Auto (2s)";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 4;
  opt.innerHTML = "Auto (1s)";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 5;
  opt.innerHTML = "Auto (0.5s)";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 6;
  opt.innerHTML = "Auto (0.2s)";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 7;
  opt.innerHTML = "Auto (0.1s)";
  mel[0].appendChild(opt);
*/
  
  return;
}

