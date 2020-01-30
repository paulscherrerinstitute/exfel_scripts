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
 
function but_bpm_init () {

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
    
    but_bpm_fill_option_field();
    /* create event handlers */
    gpac_webmap_client.register_listener(but_bpm_webmap_callback);

}  

but_bpm_webmap_callback = function() {

  var el_read = document.getElementsByClassName("but_bpm_pll_locked");        
  var el_pg = document.getElementById("but_bpm_pll_locked_indicator");        
  
  if (parseInt(el_read[0].innerHTML,10) === 0) {
    el_pg.innerHTML = "PLL not locked";
    el_pg.style.color = "#ff8888";
  }
  else {
    el_pg.innerHTML = "PLL locked";
    el_pg.style.color = "#88ff88";
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

but_bpm_fill_option_field = function() {
  var num_str;

  var mel = document.getElementsByClassName("but_bpm_trg_src");        
  var opt = document.createElement('option');
  opt.value = 0;
  opt.innerHTML = "Signal";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 1;
  opt.innerHTML = "External";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 2;
  opt.innerHTML = "Auto (2s)";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 3;
  opt.innerHTML = "Auto (1s)";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 4;
  opt.innerHTML = "Auto (0.5s)";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 5;
  opt.innerHTML = "Auto (0.2s)";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 6;
  opt.innerHTML = "Auto (0.1s)";
  mel[0].appendChild(opt);

  var mel = document.getElementsByClassName("but_bpm_clk_src");        
  var opt = document.createElement('option');
  opt.value = 0;
  opt.innerHTML = "MO:216.6->433.3";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 1;
  opt.innerHTML = "LO:500.0->433.3";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 2;
  opt.innerHTML = "LO:500.0->500.0";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 3;
  opt.innerHTML = "Custom";
  mel[0].appendChild(opt);
  
  var mel = document.getElementsByClassName("but_eeprom_sel_set");        
  for (i=0;i<15;i++) {
	  var opt = document.createElement('option');
	  opt.value = i;
	  opt.innerHTML = i;
	  mel[0].appendChild(opt);
  
  };
  
  return;
}

