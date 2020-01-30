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
 
function but_rffe_init () {

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
    
    but_rffe_fill_option_field();
    /* create event handlers */
    gpac_webmap_client.register_listener(but_rffe_webmap_callback);

}  

but_rffe_webmap_callback = function() {

  var el_read = document.getElementsByClassName("ebrffe_status_read");        
  var el = document.getElementsByClassName("ebrffe_status");        

  el[0].innerHTML = el_read[0].innerHTML;
  if (parseInt(el_read[0].innerHTML,10) === 0) {
    el[0].innerHTML = "Board not ready";
    el[0].style.color = "#ff0000";
  }
  else if (parseInt(el_read[0].innerHTML,10) === 1) {
    el[0].innerHTML = "Board ready";
    el[0].style.color = "#aaffaa";
  } 
  else {
    el[0].innerHTML = "INVALID BOARD!!";
    el[0].style.color = "#ff0000";
  }
  
  var el_read = document.getElementsByClassName("ebrffe_pwr_read");        
  var el_pg = document.getElementById("pg_indicator");        
  var el_rn = document.getElementById("rn_indicator");        
  
  if ((parseInt(el_read[0].innerHTML,10) & (1<16)) > 0)
    el_pg.style.backgroundColor = "#00ff00";
  else
    el_pg.style.backgroundColor = "#ff0000";
  
  if ((parseInt(el_read[0].innerHTML,10) & 2) > 0)
    el_rn.style.backgroundColor = "#00ff00";
  else
    el_rn.style.backgroundColor = "transparent";

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


but_rffe_fill_option_field = function() {
  var num_str;

  var mel = document.getElementsByClassName("ebrffe_attn");        
  for(var i=0; i<mel.length; i++) {
    for(var j=0; j<64; j++) {
      var opt = document.createElement('option');
      opt.value = j;
      num_str = j/2;
      opt.innerHTML = num_str.toFixed(1);
      mel[i].appendChild(opt);
    }
  }

  var mel = document.getElementsByClassName("ebrffe_gain");        
  for(var i=0; i<mel.length; i++) {
      var opt = document.createElement('option');
      opt.value = 0;
      opt.innerHTML = "Low (0 dB)";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 1;
      opt.innerHTML = "Medium (31 dB)";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 3;
      opt.innerHTML = "High (52.5 dB)";
      mel[i].appendChild(opt);
  }
  

  
  return;
}

