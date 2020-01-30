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
 
function ren_exp_init () {

  /***************************************************************** 
  * Web page initialization.
  * Unobtrusive bounding of JavaScript to HTML
  ******************************************************************/
  ren_exp_fill_option_field();  /* create event handlers */
  gpac_webmap_client.register_listener(ren_exp_webmap_callback);

}  

ren_exp_webmap_callback = function() { 

  /*--*/
  var el_read = document.getElementsByClassName("crffe_pll_locked");        
  var val = parseInt(el_read[0].innerHTML,10);
  if (val) 
    document.getElementById("crffe_pll_locked").innerHTML = "Not locked";
  else 
    document.getElementById("crffe_pll_locked").innerHTML = "Locked";
  
  /*
   * var el_x = document.getElementsByClassName("rffe_attn_cal_x");        
   * var el_y = document.getElementsByClassName("rffe_attn_cal_y");        
   * var el_xy_dsa = document.getElementsByClassName("rffe_attn_xy_dsa");        
   * if ((el_x[0].value == 2) || (el_y[0].value == 2)) {
   *   document.getElementById("rffe_attn_label_le").innerHTML = "X/Y Le";
   *   document.getElementById("rffe_attn_label_dsa").innerHTML = "X/Y DSA";
   *   document.getElementById("rffe_attn_xy_dsa").visible = true;
   *   //el_xy_dsa.visible = true;
   * }
   * else {
   *   document.getElementById("rffe_attn_label_le").innerHTML = "";
   *   document.getElementById("rffe_attn_label_dsa").innerHTML = "";
   *   document.getElementById("rffe_attn_xy_dsa").visible = false;
   *   //el_xy_dsa.visible = false;
   * }
   */
  
  return;
}

ren_exp_fill_option_field = function() {


  var mel = document.getElementsByClassName("rffe_attn_cal_x");        
  var opt = document.createElement('option');
  opt.value = 0;
  opt.innerHTML = "OFF";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 1;
  opt.innerHTML = "High";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 2;
  opt.innerHTML = "Low";
  mel[0].appendChild(opt);
  
  var mel = document.getElementsByClassName("rffe_attn_cal_y");        
  var opt = document.createElement('option');
  opt.value = 0;
  opt.innerHTML = "OFF";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 1;
  opt.innerHTML = "High";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 2;
  opt.innerHTML = "Low";
  mel[0].appendChild(opt);
  
  return;
}

