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
 
function rffe_det_init () {

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
    
    rffe_det_fill_option_field();
    /* create event handlers */
    gpac_webmap_client.register_listener(rffe_det_webmap_callback);

}  

rffe_det_webmap_callback = function() {

//  var el_read = document.getElementsByClassName("rffe_det_pll_locked");        
//  var el_pg = document.getElementById("rffe_det_pll_locked_indicator");        
//  
//  if (parseInt(el_read[0].innerHTML,10) === 0) {
//    el_pg.innerHTML = "PLL not locked";
//    el_pg.style.textColor = "#ff8888";
//  }
//  else {
//    el_pg.innerHTML = "PLL locked";
//    el_pg.style.color = "#88ff88";
//  }

  
  var x = document.getElementsByClassName("rd_vin");
  
  for (var i=1;i<5;i++) {
    var y1 = document.getElementsByClassName("rd_meas_ch"+i);
    var y2 = document.getElementsByClassName("rd_ref_ch"+i);
    overview_2d_plot(x[0].innerHTML, y1[0].innerHTML, y2[0].innerHTML, "ch"+i);
  }

  return;
}


/*****************************************************************
 * PLOT cartesian chart
 * 
 ******************************************************************/


overview_2d_plot = function(x, y1, y2, canvID) {

  /*
  var mel = document.getElementsByClassName("bpm1X");  
  var x = parseFloat(mel[0].innerHTML);
  var mel = document.getElementsByClassName("bpm1Y");  
  var y = parseFloat(mel[0].innerHTML);
  */

  var xin   = x.split(";");
  var ymeas = y1.split(";");
  var yref  = y2.split(";");
  
  var xlabel = new Array();
  for (var i=0;i<xin.length-1;i++) {
    if ((i+1)%8)
      xlabel[i] = "";
    else
      xlabel[i] = xin[i];
  }
  
  var data = {
    xdata : xin,
    labels : xlabel,
    datasets : [
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        bezierCurve : false,
        data : ymeas
      },
      {
        fillColor : "rgba(251,087,205,0.5)",
        strokeColor : "rgba(251,087,205,1)",
        pointColor : "rgba(251,087,205,1)",
        pointStrokeColor : "#fff",
        bezierCurve : false,
        data : yref
      },
    ]
  }
    

  var Line = {
        
    //Boolean - If we show the scale above the chart data			
    scaleOverlay : true,
    
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : true,
    
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : 6,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : 0.5,
    //Number - The scale starting value
    scaleStartValue : 0,
  
    //String - Colour of the scale line	
    scaleLineColor : "rgba(0,0,0,.1)",
    
    //Number - Pixel width of the scale line	
    scaleLineWidth : 1,
  
    //Boolean - Whether to show labels on the scale	
    scaleShowLabels : true,
    
    //Interpolated JS string - can access value
    scaleLabel : "<%=value%>",
    
    //String - Scale label font declaration for the scale label
    scaleFontFamily : "'Arial'",
    
    //Number - Scale label font size in pixels	
    scaleFontSize : 10,
    
    //String - Scale label font weight style	
    scaleFontStyle : "normal",
    
    //String - Scale label font colour	
    scaleFontColor : "#777",	
    
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,
    
    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",
    
    //Number - Width of the grid lines
    scaleGridLineWidth : 0,	
    
    //Boolean - Whether the line is curved between points
    bezierCurve : false,
    
    //Boolean - Whether to show a dot for each point
    pointDot : true,
    
    //Number - Radius of each point dot in pixels
    pointDotRadius : 3,
    
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,
    
    //Boolean - Whether to show a stroke for datasets
    datasetStroke : false,
    
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,
    
    //Boolean - Whether to fill the dataset with a colour
    datasetFill : false,
    
    //Boolean - Whether to animate the chart
    animation : false,
  
    //Number - Number of animation steps
    animationSteps : 60,
    
    //String - Animation easing effect
    animationEasing : "easeOutQuart",
  
    //Function - Fires when the animation is complete
    onAnimationComplete : null
    
  }

  var ctx = document.getElementById(canvID).getContext("2d");
  my_chart = new Chart(ctx).Cartesian(data, Line);        
  delete(my_chart);
      
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

rffe_det_fill_option_field = function() {
//  var num_str;
//
//  var mel = document.getElementsByClassName("rffe_det_trg_src");        
//  var opt = document.createElement('option');
//  opt.value = 0;
//  opt.innerHTML = "Signal";
//  mel[0].appendChild(opt);
//  var opt = document.createElement('option');
//  opt.value = 1;
//  opt.innerHTML = "External";
//  mel[0].appendChild(opt);
//  var opt = document.createElement('option');
//  opt.value = 3;
//  opt.innerHTML = "Auto (2s)";
//  mel[0].appendChild(opt);
//  var opt = document.createElement('option');
//  opt.value = 4;
//  opt.innerHTML = "Auto (1s)";
//  mel[0].appendChild(opt);
//  var opt = document.createElement('option');
//  opt.value = 5;
//  opt.innerHTML = "Auto (0.5s)";
//  mel[0].appendChild(opt);
//  var opt = document.createElement('option');
//  opt.value = 6;
//  opt.innerHTML = "Auto (0.2s)";
//  mel[0].appendChild(opt);
//  var opt = document.createElement('option');
//  opt.value = 7;
//  opt.innerHTML = "Auto (0.1s)";
//  mel[0].appendChild(opt);
//
//  var mel = document.getElementsByClassName("rffe_det_clk_src");        
//  var opt = document.createElement('option');
//  opt.value = 0;
//  opt.innerHTML = "MO:216.6->433.3";
//  mel[0].appendChild(opt);
//  var opt = document.createElement('option');
//  opt.value = 1;
//  opt.innerHTML = "LO:500.0->433.3";
//  mel[0].appendChild(opt);
//  var opt = document.createElement('option');
//  opt.value = 2;
//  opt.innerHTML = "LO:500.0->500.0";
//  mel[0].appendChild(opt);
//  var opt = document.createElement('option');
//  opt.value = 3;
//  opt.innerHTML = "Custom";
//  mel[0].appendChild(opt);
  
  return;
}

