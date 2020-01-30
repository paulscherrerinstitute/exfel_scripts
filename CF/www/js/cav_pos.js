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
 
function cav_pos_init () {

  /***************************************************************** 
  * Web page initialization.
  * Unobtrusive bounding of JavaScript to HTML
  ******************************************************************/
  
  /* but_bpm_fill_option_field(); */
  /* create event handlers */
  gpac_webmap_client.register_listener(cav_bpm_webmap_callback);

}  

cav_bpm_webmap_callback = function(webmap_objects) {

/*
  var el_read = document.getElementsByClassName("cav_pos_smp_done");        
  var el_disp = document.getElementById("cav_pos_smp_done");        
  
  if (parseInt(el_read[0].innerHTML,10) === 0) 
    el_disp.style.backgroundColor = "transparent";
  else 
    el_disp.style.backgroundColor = "#88ff88";
*/

  calculate_position(webmap_objects);
  
  return;
}

calculate_statistics = function(data, stats) {

  for (var i=99;i>=0;i--) {
    stats.aver100 += data[i];
    stats.std100 += Math.pow(data[i], 2);
    if (i==90) {
      stats.aver10 = stats.aver100/10;
      stats.std10 = stats.std100/10;
      stats.std10 = Math.sqrt(stats.std10 - Math.pow(stats.aver10,2));
    }
  }
  stats.aver100 /= 100;
  stats.std100 /= 100;
  stats.std100 = Math.sqrt(stats.std100 - Math.pow(stats.aver100,2));

}

calculate_position = function (webmap_objects) {

  var el_canv = document.getElementsByClassName("canvQ"); 
  var id = parseInt(el_canv[0].id.slice(7,10));

  if (webmap_objects[id].CD == null)
    return;

  // Q
  var aver10 = document.getElementById("q_aver10"); 
  var aver100 = document.getElementById("q_aver100"); 
  var std10 = document.getElementById("q_std10"); 
  var std100 = document.getElementById("q_std100"); 
  //data = webmap_objects[id].CD;
  var stats = {
    aver10  : 0,
    aver100 : 0,
    std10   : 0,
    std100  : 0
  }
  calculate_statistics(webmap_objects[id].CD.datasets[0].data, stats);
  
  aver10.innerHTML = stats.aver10.toFixed(3);
  aver100.innerHTML = stats.aver100.toFixed(3);
  std10.innerHTML = stats.std10.toFixed(4);
  std100.innerHTML = stats.std100.toFixed(4);
  
  // X
  el_canv = document.getElementsByClassName("canvX"); 
  id = parseInt(el_canv[0].id.slice(7,10));

  aver10 = document.getElementById("x_aver10"); 
  aver100 = document.getElementById("x_aver100"); 
  std10 = document.getElementById("x_std10"); 
  std100 = document.getElementById("x_std100"); 
  var stats = {
    aver10  : 0,
    aver100 : 0,
    std10   : 0,
    std100  : 0
  }
  calculate_statistics(webmap_objects[id].CD.datasets[0].data, stats);
  
  aver10.innerHTML = stats.aver10.toFixed(3);
  aver100.innerHTML = stats.aver100.toFixed(3);
  std10.innerHTML = stats.std10.toFixed(4);
  std100.innerHTML = stats.std100.toFixed(4);

  // Y
  el_canv = document.getElementsByClassName("canvY"); 
  id = parseInt(el_canv[0].id.slice(7,10));

  aver10 = document.getElementById("y_aver10"); 
  aver100 = document.getElementById("y_aver100"); 
  std10 = document.getElementById("y_std10"); 
  std100 = document.getElementById("y_std100"); 
  var stats = {
    aver10  : 0,
    aver100 : 0,
    std10   : 0,
    std100  : 0
  }
  calculate_statistics(webmap_objects[id].CD.datasets[0].data, stats);
  
  aver10.innerHTML = stats.aver10.toFixed(3);
  aver100.innerHTML = stats.aver100.toFixed(3);
  std10.innerHTML = stats.std10.toFixed(4);
  std100.innerHTML = stats.std100.toFixed(4);

  return;
}

/* 
but_bpm_fill_option_field = function() {
  var num_str;

  var mel = document.getElementsByClassName("cav_pos_smp_mode");        
  var opt = document.createElement('option');
  opt.value = 0;
  opt.innerHTML = "External";
  mel[0].appendChild(opt);
  var opt = document.createElement('option');
  opt.value = 1;
  opt.innerHTML = "Signal";
  mel[0].appendChild(opt);

  
  return;
}

*/
