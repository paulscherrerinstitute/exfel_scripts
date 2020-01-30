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
 

function dio_init () {

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

function mbu_dio_update_board_settings() {

 var elems = document.getElementsByClassName("dio_sn");
  var elem_val = elems[0].innerHTML;
    //document.getElementById("com_sn").innerHTML = elem_val.length;
  if (elem_val.length) {
    document.getElementById("dio_sn").innerHTML = elem_val;
    document.getElementById("dio_sn").style.backgroundColor = "transparent";
  }
  else {
    document.getElementById("dio_sn").innerHTML = "NO BOARD";
    document.getElementById("dio_sn").style.backgroundColor = "#ff8888";
  }

}

gpac_webmap_callback = function() {

  mbu_dio_update_board_settings();
   
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


