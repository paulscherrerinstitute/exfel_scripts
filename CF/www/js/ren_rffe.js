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
 
function ren_rffe_init () {

  /***************************************************************** 
  * Web page initialization.
  * Unobtrusive bounding of JavaScript to HTML
  ******************************************************************/
  
  ren_rffe_fill_option_field();
  /* create event handlers */
  gpac_webmap_client.register_listener(ren_rffe_webmap_callback);

}  

ren_rffe_webmap_callback = function() {


  var el_read = document.getElementsByClassName("lo_pll_locked_r");        
  var el_disp = document.getElementById("lo_pll_locked");        

  if (parseInt(el_read[0].innerHTML,10) & 0x02) 
    el_disp.style.backgroundColor = "#88ff88";
  else 
    el_disp.style.backgroundColor = "transparent";
  
  var el_read = document.getElementsByClassName("cclk_pll_mux_out_r");  
  var el_disp = document.getElementById("cclk_pll_mux_out");        
  if (parseInt(el_read[0].innerHTML,10) & 0x02) 
    el_disp.style.backgroundColor = "#88ff88";
  else 
    el_disp.style.backgroundColor = "transparent";
  
  return;
}

ren_rffe_fill_option_field = function() {
  var num_str;

/*  
  var mel = document.getElementById("crffe_lo_pll_mux");        
  for(var i=0; i<mel.length; i++) {
    for(var j=0; j<64; j++) {
      var opt = document.createElement('option');
      opt.value = j;
      num_str = j/2;
      opt.innerHTML = num_str.toFixed(1);
      mel[i].appendChild(opt);
    }
  }
*/

  var mel = document.getElementsByClassName("svx_ctrl1");        
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
  
  var mel = document.getElementsByClassName("svy_ctrl1");        
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
 
  var mel = document.getElementsByClassName("svx_ctrl2");        
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
  
  var mel = document.getElementsByClassName("svy_ctrl2");        
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

  var mel = document.getElementsByClassName("rffe_osc");        
  var opt = document.createElement('option');
  opt.value = 0;
  opt.innerHTML = "OFF";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 16;
  opt.innerHTML = "LLRF";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 96;
  opt.innerHTML = "OSC";
  mel[0].appendChild(opt);


  var mel = document.getElementsByClassName("cclk_pll_mux");        
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
  opt.innerHTML = "AVDD";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 4;
  opt.innerHTML = "R DIV.";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 5;
  opt.innerHTML = "N-CH. OD";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 6;
  opt.innerHTML = "SDO";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 7;
  opt.innerHTML = "DGND";
  mel[0].appendChild(opt);
  
  /*
  var mel = document.getElementsByClassName("crffe_lo_pll_p");        
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
  
  var mel = document.getElementsByClassName("crffe_lo_pll_mux");        
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

