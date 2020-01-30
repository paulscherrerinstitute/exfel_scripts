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
 
function cav_exp_init () {

  /***************************************************************** 
  * Web page initialization.
  * Unobtrusive bounding of JavaScript to HTML
  ******************************************************************/
  cav_exp_fill_option_field();  /* create event handlers */
  gpac_webmap_client.register_listener(cav_exp_webmap_callback);

}  

cav_exp_webmap_callback = function() {


  var el_read = document.getElementsByClassName("crffe_pll_locked");        

  var val = parseInt(el_read[0].innerHTML,10);
  
  if (val) 
    document.getElementById("crffe_pll_locked").innerHTML = "Not locked"
  else 
    document.getElementById("crffe_pll_locked").innerHTML = "Locked"

  return;
}

cav_exp_fill_option_field = function() {
  var num_str;

/*  
  var mel = document.getElementById("expert_lo_pll_mux");        
  for(var i=0; i<mel.length; i++) {
    for(var j=0; j<64; j++) {
      var opt = document.createElement('option');
      opt.value = j;
      num_str = j/2;
      opt.innerHTML = num_str.toFixed(1);
      mel[i].appendChild(opt);
    }
  }

  var mel = document.getElementsByClassName("expert_lo_pll_p");        
  var opt = document.createElement('option');
  opt.value = 0;
  opt.innerHTML = "8/9";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 1;
  opt.innerHTML = "16/17";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 2;
  opt.innerHTML = "32/33";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 3;
  opt.innerHTML = "64/65";
  mel[0].appendChild(opt);
  
  var mel = document.getElementsByClassName("expert_lo_pll_mux");        
  var opt = document.createElement('option');
  opt.value = 0;
  opt.innerHTML = "TRI-STATE";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 1;
  opt.innerHTML = "LOCK DET.";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 2;
  opt.innerHTML = "N DIV.";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 3;
  opt.innerHTML = "NVDD";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 4;
  opt.innerHTML = "R DIV.";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 5;
  opt.innerHTML = "N CH LOCK";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 6;
  opt.innerHTML = "SDO";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 7;
  opt.innerHTML = "NGND";
  mel[0].appendChild(opt);
*/
  
  return;
}

