/*------------------------------------------------------------------------------
 *--                       Paul Scherrer Institute (PSI)
 *------------------------------------------------------------------------------
 *-- Unit    : dac16hl.js
 *-- Author  : Waldemar Koprek, Section Diagnostic
 *-- Version : $Revision: 1.10 $
 *-- Date    : 10.04.2014
 *------------------------------------------------------------------------------
 *-- Copyright© PSI, Section Diagnostic
 *------------------------------------------------------------------------------
 *-- Comment : WebMap driver for BPM Systems
 *-----------------------------------------------------------------------------*/
 
function dac16hl_init () {

  /***************************************************************** 
  * Web page initialization.
  * Unobtrusive bounding of JavaScript to HTML
  ******************************************************************/
        
  dac16hl_fill_option_field();
  /* create event handlers */
  gpac_webmap_client.register_listener(gac16hl_webmap_callback);

}  

gac16hl_webmap_callback = function() {  

  // FPGA DCM Locked
  var elems = document.getElementsByClassName("dac16_fpga_pll_locked");
  var elem_val = parseInt(elems[0].innerHTML);

  
  if (elem_val & 0x00000001)
    document.getElementById("dac16hl_fpga_pll_locked_0").style.backgroundColor = "#88ff88";
  else
    document.getElementById("dac16hl_fpga_pll_locked_0").style.backgroundColor = "transparent";
  if (elem_val & 0x00000100)
    document.getElementById("dac16hl_fpga_pll_locked_1").style.backgroundColor = "#88ff88";
  else
    document.getElementById("dac16hl_fpga_pll_locked_1").style.backgroundColor = "transparent";
  if (elem_val & 0x00010000)
    document.getElementById("dac16hl_fpga_pll_locked_2").style.backgroundColor = "#88ff88";
  else
    document.getElementById("dac16hl_fpga_pll_locked_2").style.backgroundColor = "transparent";
  if (elem_val & 0x01000000)
    document.getElementById("dac16hl_fpga_pll_locked_3").style.backgroundColor = "#88ff88";
  else
    document.getElementById("dac16hl_fpga_pll_locked_3").style.backgroundColor = "transparent";

  // No external clock
  var elems = document.getElementsByClassName("dac16_no_ext_clk");
  var elem_val = parseInt(elems[0].innerHTML);
  //document.getElementById("msg_field").innerHTML = elems[0].innerHTML;
  if (elem_val)
    document.getElementById("dac16_no_ext_clk_field").style.backgroundColor = "#ff8888";
  else
    document.getElementById("dac16_no_ext_clk_field").style.backgroundColor = "transparent";

  // PLL 2 Locked
  var elems = document.getElementsByClassName("dac16_pll2_locked");
  var elem_val = parseInt(elems[0].innerHTML);
  if (elem_val)
    document.getElementById("dac16_pll2_locked_field").style.backgroundColor = "#88ff88";
  else
    document.getElementById("dac16_pll2_locked_field").style.backgroundColor = "transparent";

  // Device Locked
  var elems = document.getElementsByClassName("dac16_device_locked");
  var elem_val = parseInt(elems[0].innerHTML);
  if (elem_val)
    document.getElementById("dac16_device_locked_field").style.backgroundColor = "#88ff88";
  else
    document.getElementById("dac16_device_locked_field").style.backgroundColor = "transparent";
    
  return;
}

dac16hl_fill_option_field = function() {

  var mel = document.getElementsByClassName("dac16hl_mode");        
  for(var i=0; i<mel.length; i++) {
      var opt = document.createElement('option');
      opt.value = 0; 
      opt.innerHTML = "Off";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 1;
      opt.innerHTML = "Constant";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 2;
      opt.innerHTML = "Sinewave";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 3;
      opt.innerHTML = "Squarewave";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 4;
      opt.innerHTML = "Noise";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 5;
      opt.innerHTML = "Saw";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 6;
      opt.innerHTML = "Doublet";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 7;
      opt.innerHTML = "User pattern";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 8;
      opt.innerHTML = "IBFB";
      mel[i].appendChild(opt);
  }
  
  var mel = document.getElementsByClassName("dac16hl_mode_all");
  for(var i=0; i<mel.length; i++) {
      var opt = document.createElement('option');
      opt.value = 0;
      opt.innerHTML = "Off";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 16843009;
      opt.innerHTML = "Constant";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 33686018;
      opt.innerHTML = "Sinewave";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 50529027;
      opt.innerHTML = "Squarewave"; 
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 67372036;
      opt.innerHTML = "Noise";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 84215045;
      opt.innerHTML = "Saw";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 101058054;
      opt.innerHTML = "Doublet";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 117901063;
      opt.innerHTML = "User pattern";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 134744072;
      opt.innerHTML = "IBFB";
      mel[i].appendChild(opt);
  }
  
  var mel = document.getElementsByClassName("dac16hl_pll_conf");
  for(var i=0; i<mel.length; i++) {
      var opt = document.createElement('option');
      opt.value = 0;
      opt.innerHTML = "LO: 100.0MHz -> 216.6MHz";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 1;
      opt.innerHTML = "MO: 216.6MHz -> 216.6MHz";
      mel[i].appendChild(opt);
//      var opt = document.createElement('option');
//      opt.value = 2;
//      opt.innerHTML = "MO: 216.6MHz -> 433.3MHz";
//      mel[i].appendChild(opt);
  }

  var mel = document.getElementsByClassName("dac16hl_pattern");        
  for(var i=0; i<mel.length; i++) {
      var opt = document.createElement('option');
      opt.value = 0; 
      opt.innerHTML = "Saw";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 1;
      opt.innerHTML = "Doublet";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 2;
      opt.innerHTML = "User";
      mel[i].appendChild(opt);
  }

  var mel = document.getElementsByClassName("dac16hl_pattern_all");        
  for(var i=0; i<mel.length; i++) {
      var opt = document.createElement('option');
      opt.value = 0; 
      opt.innerHTML = "Saw";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 16843009;
      opt.innerHTML = "Doublet";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 33686018;
      opt.innerHTML = "User";
      mel[i].appendChild(opt);
  }
  
  return;
}

