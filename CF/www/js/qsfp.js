/*------------------------------------------------------------------------------
 *--                       Paul Scherrer Institute (PSI)
 *------------------------------------------------------------------------------
 *-- Unit    : dac16hl.js
 *-- Author  : Waldemar Koprek, Section Diagnostic
 *-- Version : $Revision: 1.1 $
 *-- Date    : 10.04.2014
 *------------------------------------------------------------------------------
 *-- Copyright© PSI, Section Diagnostic
 *------------------------------------------------------------------------------
 *-- Comment : WebMap driver for BPM Systems
 *-----------------------------------------------------------------------------*/
 
function qsfp_init () {

  /***************************************************************** 
  * Web page initialization.
  * Unobtrusive bounding of JavaScript to HTML
  ******************************************************************/
        
  qsfp_fill_option_field();
  /* create event handlers */
  gpac_webmap_client.register_listener(qsfp_webmap_callback);

}  

qsfp_webmap_callback = function() {  

  // QSFP In
  var elems = document.getElementsByClassName("qsfp_in");
  var elem_val = parseInt(elems[0].innerHTML);
  
  if (elem_val & 0x01000000)
    document.getElementById("qsfp_in_0").style.backgroundColor = "#88ff88";
  else
    document.getElementById("qsfp_in_0").style.backgroundColor = "transparent";
  if (elem_val & 0x00010000)
    document.getElementById("qsfp_in_1").style.backgroundColor = "#88ff88";
  else
    document.getElementById("qsfp_in_1").style.backgroundColor = "transparent";
  if (elem_val & 0x00000100)
    document.getElementById("qsfp_in_2").style.backgroundColor = "#88ff88";
  else
    document.getElementById("qsfp_in_2").style.backgroundColor = "transparent";
  if (elem_val & 0x00000001)
    document.getElementById("qsfp_in_3").style.backgroundColor = "#88ff88";
  else
    document.getElementById("qsfp_in_3").style.backgroundColor = "transparent";

  // QSFP TX Enabled
  var elems = document.getElementsByClassName("qsfp_tx_ena");
  var elem_val = parseInt(elems[0].innerHTML);
  
  if (elem_val & 0x01000000)
    document.getElementById("qsfp_tx_ena_0").style.backgroundColor = "#88ff88";
  else
    document.getElementById("qsfp_tx_ena_0").style.backgroundColor = "transparent";
  if (elem_val & 0x00010000)
    document.getElementById("qsfp_tx_ena_1").style.backgroundColor = "#88ff88";
  else
    document.getElementById("qsfp_tx_ena_1").style.backgroundColor = "transparent";
  if (elem_val & 0x00000100)
    document.getElementById("qsfp_tx_ena_2").style.backgroundColor = "#88ff88";
  else
    document.getElementById("qsfp_tx_ena_2").style.backgroundColor = "transparent";
  if (elem_val & 0x00000001)
    document.getElementById("qsfp_tx_ena_3").style.backgroundColor = "#88ff88";
  else
    document.getElementById("qsfp_tx_ena_3").style.backgroundColor = "transparent";

  // QSFP TX Fault
  var elems = document.getElementsByClassName("qsfp_tx_fault");
  var elem_val = parseInt(elems[0].innerHTML);
  
  if (elem_val & 0x01000000)
    document.getElementById("qsfp_tx_fault_0").style.backgroundColor = "#ff8888";
  else
    document.getElementById("qsfp_tx_fault_0").style.backgroundColor = "transparent";
  if (elem_val & 0x00010000)
    document.getElementById("qsfp_tx_fault_1").style.backgroundColor = "#ff8888";
  else
    document.getElementById("qsfp_tx_fault_1").style.backgroundColor = "transparent";
  if (elem_val & 0x00000100)
    document.getElementById("qsfp_tx_fault_2").style.backgroundColor = "#ff8888";
  else
    document.getElementById("qsfp_tx_fault_2").style.backgroundColor = "transparent";
  if (elem_val & 0x00000001)
    document.getElementById("qsfp_tx_fault_3").style.backgroundColor = "#ff8888";
  else
    document.getElementById("qsfp_tx_fault_3").style.backgroundColor = "transparent";

  // QSFP RX Loss 
  var elems = document.getElementsByClassName("qsfp_rx_loss");
  var elem_val = parseInt(elems[0].innerHTML);
  
  if (elem_val & 0x01000000)
    document.getElementById("qsfp_rx_loss_0").style.backgroundColor = "#ff8888";
  else
    document.getElementById("qsfp_rx_loss_0").style.backgroundColor = "transparent";
  if (elem_val & 0x00010000)
    document.getElementById("qsfp_rx_loss_1").style.backgroundColor = "#ff8888";
  else
    document.getElementById("qsfp_rx_loss_1").style.backgroundColor = "transparent";
  if (elem_val & 0x00000100)
    document.getElementById("qsfp_rx_loss_2").style.backgroundColor = "#ff8888";
  else
    document.getElementById("qsfp_rx_loss_2").style.backgroundColor = "transparent";
  if (elem_val & 0x00000001)
    document.getElementById("qsfp_rx_loss_3").style.backgroundColor = "#ff8888";
  else
    document.getElementById("qsfp_rx_loss_3").style.backgroundColor = "transparent";
    
  return;
}

qsfp_fill_option_field = function() {

  //var mel = document.getElementsByClassName("qsfpl_mode");        
  //for(var i=0; i<mel.length; i++) {
  //    var opt = document.createElement('option');
  //    opt.value = 0; 
  //    opt.innerHTML = "Off";
  //    mel[i].appendChild(opt);
  //    var opt = document.createElement('option');
  //    opt.value = 1;
  //    opt.innerHTML = "On: Constant";
  //    mel[i].appendChild(opt);
  //    var opt = document.createElement('option');
  //    opt.value = 2;
  //    opt.innerHTML = "On: Sinewave";
  //    mel[i].appendChild(opt);
  //    var opt = document.createElement('option');
  //    opt.value = 3;
  //    opt.innerHTML = "On: Noise";
  //    mel[i].appendChild(opt);
  //    var opt = document.createElement('option');
  //    opt.value = 4;
  //    opt.innerHTML = "On: Pattern";
  //    mel[i].appendChild(opt);
  //}
  
  
  return;
}

