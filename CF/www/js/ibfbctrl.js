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
 
function ibfbctrl_init () {

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
    
    ibfbctrl_fill_option_field();
    /* create event handlers */
    gpac_webmap_client.register_listener(ibfbctrl_webmap_callback);

}  



ibfbctrl_webmap_callback = function() {

  var el_read = document.getElementsByClassName("ibfb_no_ext_trg_reg");        
  var el_pg = document.getElementById("ibfb_no_ext_trg");        
  
  if (parseInt(el_read[0].innerHTML,10)) {
    el_pg.innerHTML = "No external trigger";
    el_pg.style.color = "#ff8888";
  }
  else {
    el_pg.innerHTML = "External trigger";
    el_pg.style.color = "#88ff88";
  }

  var el_read = document.getElementsByClassName("dac16_device_locked");        
  var el_pg = document.getElementById("ibfb_no_ext_clk");        
  
  if (parseInt(el_read[0].innerHTML,10)) {
    el_pg.innerHTML = "External Clock";
    el_pg.style.color = "#88ff88";
  }
  else {
    el_pg.innerHTML = "Internal Clock";
    el_pg.style.color = "#ff8888";
  }
  
  return;
}

menu_onclick_callback = function(event) {


  var mel = document.getElementsByClassName("menu_button");        
	for(var i=0; i<mel.length; i++) {
    mel[i].style.backgroundColor = "#aaaaff";
  }

  event.target.style.backgroundColor = "#8888ff";
  
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

ibfbctrl_fill_option_field = function() {
  var num_str;

  var mel = document.getElementsByClassName("but_bpm_trg_src");        
  var opt = document.createElement('option');
  opt.value = 0;
  opt.innerHTML = "External";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 1;
  opt.innerHTML = "Auto (2s)";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 2;
  opt.innerHTML = "Auto (1s)";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 3;
  opt.innerHTML = "Auto (0.5s)";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 4;
  opt.innerHTML = "Auto (0.2s)";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 5;
  opt.innerHTML = "Auto (0.1s)";
  mel[0].appendChild(opt);

    
  return;
}

