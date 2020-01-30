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

function overview_init() {

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
    gpac_webmap_client.register_listener(but_pos_webmap_callback);

}  

but_pos_webmap_callback = function() {

  var ctx = document.getElementById("2d_bpm1").getContext("2d");  
  overview_2d_plot(ctx);

  var ctx = document.getElementById("2d_bpm3").getContext("2d");
  overview_2d_plot(ctx);
  
/*
  var mel = document.getElementsByClassName("bpmX");
  str_id = mel[0].id;  
  id = parseInt(str_id.slice(7,10));
  if (gpac_webmap_client.objects[id].CD == null)
    document.getElementById("avgX").innerHTML = "";
  else {
    var avg = but_pos_calc_avg(gpac_webmap_client.objects[id].CD.datasets[0].data);
    document.getElementById("avgX").innerHTML = avg.toFixed(4);
    var std = but_pos_calc_std(gpac_webmap_client.objects[id].CD.datasets[0].data, avg);
    document.getElementById("stdX").innerHTML = std.toFixed(4);
  }

  var mel = document.getElementsByClassName("bpmY");
  str_id = mel[0].id;  
  id = parseInt(str_id.slice(7,10));
  if (gpac_webmap_client.objects[id].CD == null)
    document.getElementById("avgY").innerHTML = "";
  else {
    var avg = but_pos_calc_avg(gpac_webmap_client.objects[id].CD.datasets[0].data);
    document.getElementById("avgY").innerHTML = avg.toFixed(4);
    var std = but_pos_calc_std(gpac_webmap_client.objects[id].CD.datasets[0].data, avg);
    document.getElementById("stdY").innerHTML = std.toFixed(4);
  }

  var mel = document.getElementsByClassName("bpmQ");
  str_id = mel[0].id;  
  id = parseInt(str_id.slice(7,10));
  if (gpac_webmap_client.objects[id].CD == null)
    document.getElementById("avgQ").innerHTML = "";
  else {
    var avg = but_pos_calc_avg(gpac_webmap_client.objects[id].CD.datasets[0].data);
    document.getElementById("avgQ").innerHTML = avg.toFixed(0);
    var std = but_pos_calc_std(gpac_webmap_client.objects[id].CD.datasets[0].data, avg);
    document.getElementById("stdQ").innerHTML = std.toFixed(2);
  }
*/
  
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

/*****************************************************************
 * PLOT cartesian chart
 * 
 ******************************************************************/


overview_2d_plot = function(ctx) {

  var mel = document.getElementsByClassName("bpm1X");  
  var x = parseFloat(mel[0].innerHTML);
  var mel = document.getElementsByClassName("bpm1Y");  
  var y = parseFloat(mel[0].innerHTML);
  
  if (isNaN(x) || isNaN(y))
    return;
    
  var scaleMax = Math.max(Math.ceil(Math.abs(x)), Math.ceil(Math.abs(y)));
  
  var xseq = new Array();
  var step;
  for (var i=0;i<=8;i++) {
    step = i*2*scaleMax/8-scaleMax;
    xseq[i] = step.toFixed(1);
  }
  
  var data = {
    xdata : xseq,
    labels : [x],
    datasets : [
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        bezierCurve : false,
        data : [y]
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
    scaleSteps : 8,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : 2*scaleMax/8,
    //Number - The scale starting value
    scaleStartValue : -scaleMax,
  
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
    scaleFontSize : 12,
    
    //String - Scale label font weight style	
    scaleFontStyle : "normal",
    
    //String - Scale label font colour	
    scaleFontColor : "#777",	
    
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,
    
    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",
    
    //Number - Width of the grid lines
    scaleGridLineWidth : 1,	
    
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


  my_chart = new Chart(ctx).Cartesian(data, Line);        
  delete(my_chart);
      
}

  

