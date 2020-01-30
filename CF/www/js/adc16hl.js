/*------------------------------------------------------------------------------
 *--                       Paul Scherrer Institute (PSI)
 *------------------------------------------------------------------------------
 *-- Unit    : adc16hl.js
 *-- Author  : Waldemar Koprek, Section Diagnostic
 *-- Version : $Revision: 1.1 $
 *-- Date    : 10.04.2014
 *------------------------------------------------------------------------------
 *-- Copyright© PSI, Section Diagnostic
 *------------------------------------------------------------------------------
 *-- Comment : WebMap driver for BPM Systems
 *-----------------------------------------------------------------------------*/
 
function adc16hl_init () {

  /***************************************************************** 
  * Web page initialization.
  * Unobtrusive bounding of JavaScript to HTML
  ******************************************************************/
        
  adc16hl_fill_option_field();
  /* create event handlers */
  //gpac_webmap_client.register_listener(index_webmap_callback);

}  

gpac_webmap_callback = function() {


  return;
}

adc16hl_fill_option_field = function() {

  var mel = document.getElementsByClassName("adc16hl_gain");        
  for(var i=0; i<mel.length; i++) {
      var opt = document.createElement('option');
      opt.value = 0;
      opt.innerHTML = "DAC";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 1;
      opt.innerHTML = "1k GND";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 2;
      opt.innerHTML = "100k GND";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 3;
      opt.innerHTML = "High Z";
      mel[i].appendChild(opt);
  }
  
  var mel = document.getElementsByClassName("adc16hl_mux");        
  for(var i=0; i<mel.length; i++) {
      var opt = document.createElement('option');
      opt.value = 0;
      opt.innerHTML = "Bypassed";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 1;
      opt.innerHTML = "Divided";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 2;
      opt.innerHTML = "Delayed";
      mel[i].appendChild(opt);
      var opt = document.createElement('option');
      opt.value = 3;
      opt.innerHTML = "Div and Del";
      mel[i].appendChild(opt);
  }

  
  return;
}

