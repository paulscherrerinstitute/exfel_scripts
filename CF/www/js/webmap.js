/*------------------------------------------------------------------------------
 *--                       Paul Scherrer Institute (PSI)
 *------------------------------------------------------------------------------
 *-- Unit    : WebMap.js
 *-- Author  : Waldemar Koprek, Section Diagnostic
 *-- Version : $Revision: 1.2 $
 *-- Date    : 10.04.2014
 *------------------------------------------------------------------------------
 *-- Copyright© PSI, Section Diagnostic
 *------------------------------------------------------------------------------
 *-- Comment : WebMap driver for BPM Systems
 *-----------------------------------------------------------------------------*/
 
function gpac_webmap () {

	/* global function params */
  const TIMER_INTERVAL = 2000;
  const TIMER_TIMEOUT = 10; // 10 requests

	/*  global constants for the webmap driver */
  const WEBMAP_PREFIX	= "WebMAP:";
  const WEBMAP_FIELD_ID_LEN	= 3;
  const WEBMAP_INP	  = "INP@";
  const WEBMAP_OUT	  = "OUT@";
  const WEBMAP_WAV	  = "WAV@";
  const WEBMAP_INT8	  = "int8";
  const WEBMAP_UINT8	= "uint8";
  const WEBMAP_INT16	= "int16";
  const WEBMAP_UINT16	= "uint16";
  const WEBMAP_INT32	= "int32";
  const WEBMAP_UINT32	= "uint32";
  const WEBMAP_FLOAT	= "float";
  const WEBMAP_STRING	= "string";
  const Line = {
    	//Boolean - If we show the scale above the chart data			
    	scaleOverlay : false,
    	//Boolean - If we want to override with a hard coded scale
    	scaleOverride : false,
    	//** Required if scaleOverride is true **
    	//Number - The number of steps in a hard coded scale
    	scaleSteps : 10,
    	//Number - The value jump in the hard coded scale
    	scaleStepWidth : 25,
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
    	pointDot : false,
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
    
  /* this is an array of pointers to WebMAP records */
  var webmap_objects = new Array();
  
  this.objects = webmap_objects; 
  /* this structure contains statue of the WebMAP server */
  var webmap_server = {
      timer_enabled: true,
      timer_ptr: 0,
      read_req_string: "",
      next_read_id:	-1,
      next_read_index: 0,
      access_err: 0,
      callback_function: new Array
    };
  /* AJAX object for asynchronous request 
   * It is programmed in such a way, that only one 
   * request at a time is pending
  */
	xmlhttp=new XMLHttpRequest();

  /* this is a GPAC menu object */
  
  /***************************************************************** 
  * Web page initialization.
  * Unobtrusive bounding of JavaScript to HTML
  ******************************************************************/
  this.init = function() {
  
		/* webmap driver initialization */
    gpac_webmap_init();
        
    /* init GPAC menu object */
    //webmap_menu_init();
    
    
    return;
	};

  this.register_listener = function(callback_function) {
    webmap_server.callback_function[webmap_server.callback_function.length] = callback_function;
  };
  
  /***************************************************************** 
   * WebMAP initialization function 
   * It should be executed on window load event 
   * in order to find all elements which have data bounded
   * The WebMAP element should contain 'name' attribute
   * with value "webmap"
  ******************************************************************/
  gpac_webmap_init = function() {

  	/* Library version info */    
    if (document.getElementById("webmap_version"))
      document.getElementById("webmap_version").innerHTML = "JavaScript Library WebMAP 1.0, 08.04.2014:"
    
    var sinit = { number: 0, 
                  message: ""
                };
    
    var mapl = document.getElementsByName("webmap");        
  	for(var i=0; i<mapl.length; i++) {
     	var webmap_record = {
      	E:    1,			    // error, invalid WebMAP record
      	RT:  "",			    // record type
        DS:	 [],          // hardware access - request string
      	DT:  "",			    // hardware access - data type
        O:  0.0, 			    // offset
        S:  1.0, 			    // scaling
        P:    0,			    // precision
        LO: -2147483648,  // low limit for numbers
        HI: 2147483647,   // high limit for numbers
        L:    1,          // data length
        CL:   0,	  	    // chart length
        C:    0           // do not create readback
      };
        
      mapl[i].id = WEBMAP_PREFIX + pad(i,WEBMAP_FIELD_ID_LEN) ;
      gpac_webmap_parse_element(mapl[i].id, sinit, pad(i,WEBMAP_FIELD_ID_LEN), webmap_record);
      webmap_objects[i] = webmap_record;
    }
    
    /* print initialization status message */
		if (sinit.number) {
   		document.getElementById("webmap_error").innerHTML = sinit.message;
    }
    if (mapl.length) {
      if (document.getElementById("webmap_message"))
        document.getElementById("webmap_message").innerHTML = "Parsed " + mapl.length + " elements.";
    }

    // concatenate the readout string
    var read_r = 0;
    for (i=0;i<webmap_objects.length;i++) {
      if (webmap_objects[i].E === 0) { // record has no errors
        if ((webmap_objects[i].RT === "A") || (webmap_objects[i].RT === "B") ) { // input/output 
          if (webmap_objects[i].C === 0) {
            if (webmap_server.read_req_string.length == 0)
              webmap_server.read_req_string =  webmap_objects[i].DS[0];          
            else 
              webmap_server.read_req_string = webmap_server.read_req_string + '@' + webmap_objects[i].DS[0];
            read_r++;
          }
        }
      }
    }
   
    /* if there are input records init periodic data readout */
    if (webmap_server.read_req_string.length && webmap_server.timer_enabled) {	   
      if (document.getElementById("webmap_message")) {
        var mess = document.getElementById("webmap_message").innerHTML;
        document.getElementById("webmap_message").innerHTML = mess + ' Found ' + read_r + ' read records. Enabled periodic readout';
      }
    	webmap_server.timer_ptr = setInterval(function(){gpac_webmap_readout(-1)}, TIMER_INTERVAL);
    }
    /* register event Listeners */
    for (i=0;i<webmap_objects.length;i++) {
      if ((webmap_objects[i].RT === "B") && (webmap_objects[i].E === 0) ) { // output
        //document.getElementById("webmap_test").innerHTML += document.getElementById(WEBMAP_PREFIX + pad(i,WEBMAP_FIELD_ID_LEN)).type + "<br>";
        if (document.getElementById(WEBMAP_PREFIX + pad(i,WEBMAP_FIELD_ID_LEN)).type == "button")
          document.getElementById(WEBMAP_PREFIX + pad(i,WEBMAP_FIELD_ID_LEN)).onclick = function(event) {onclick_callback(event)};
        else
          document.getElementById(WEBMAP_PREFIX + pad(i,WEBMAP_FIELD_ID_LEN)).onchange = function(event) {onchange_callback(event)};
        //document.getElementById(WEBMAP_PREFIX + pad(i,WEBMAP_FIELD_ID_LEN)).onchange = onchange_callback(event);
      }      
    }
    
    gpac_webmap_readout(-1);
    
		return 0;  
  }  
  
  /*****************************************************************
   * WebMAP parser function
   * this function checks the syntax of attribute 'title'
   * which contains parameters of the bounded data source
  ******************************************************************/
  gpac_webmap_parse_element = function(elemId, sinit, id, webmap_record) {
  
  	var title = "";
  	var perr = { number: 0, message: ""};

		/* get the title string */    
  	title  = document.getElementById(elemId).title.trim();
    
  	/* check if the title is not empty */
  	if (title === "") {
    	sinit.number++;
      sinit.message = sinit.message + '<br>Record ' + elemId + ' has empty title';
      return;
    }
    
    /* parse the title and extract parameters */
   	gpac_webmap_parse_title(title, perr, webmap_record);
    if (perr.number) {
    	sinit.number += perr.number;
      sinit.message = sinit.message + '<br>Record ' + elemId + ' - ' + perr.message + ' [' + title + ']';
    }    
    else {
    	webmap_record.E = 0;								// record has no errors, parsed successfully
      for (var i=0;i<webmap_record.DS.length;i++)
        webmap_record.DS[i] = id + webmap_record.DS[i];
		}
	    
  	return;
  }
  
  /*****************************************************************
   * Fuction gpac_webmap_parse_title 
   * goes through the title string and finds all driver attributes
   * which are converted to web server specific binary data
  ******************************************************************/
  gpac_webmap_parse_title = function(title, perr, webmap_record) {  	    
    
    var tok = "";
    
    /* parse data type */
    switch (title.slice(0,4)) {
    	case WEBMAP_INP:
      	webmap_record.RT = "A";
      	break;
    	case WEBMAP_OUT:
      	webmap_record.RT = "B";
      	break;
      case WEBMAP_WAV:
      	webmap_record.RT = "C";
      	break;
      default:
      	perr.number++;
        perr.message = 'Invalid record type';
        return;
    }
    
    /* check if the address is correct 
    *  the waveforms may have many addresses separated by ':'
    */
    tok = title.slice(4, title.indexOf(" "));
    tok = tok.toLowerCase();
    var toks = tok.split(":");
    for (var i=0;i<toks.length;i++) {
      if ((toks[i].length < 3) || (toks[i].length > 10)) {
        perr.number++;
        perr.message = 'The address must be in hex format';
        return;
      }
      if (toks[i].slice(0,2) != '0x') {
        perr.number++;
        perr.message = 'The address must be in hex format 0x00000000';
        return;
      }    
      webmap_record.DS[i] = pad(toks[i].slice(2, toks[i].length), 8);
    }
      
    var toks = title.split(" ");
    /* find obligatory data type T=   */
    var tfound = 0;
    for (var i=0;i<toks.length;i++) {
    	if (toks[i].slice(0,2) == "T=") {
      	switch(toks[i].slice(2, toks[i].length)) {
        	case WEBMAP_INT8: 
          	webmap_record.DT = 'A';
          	break;
          case WEBMAP_UINT8:	
          	webmap_record.DT = 'B';
          	break;
          case WEBMAP_INT16:	
          	webmap_record.DT = 'C';
          	break;
          case WEBMAP_UINT16:
          	webmap_record.DT = 'D';
          	break;
          case WEBMAP_INT32:	
          	webmap_record.DT = 'E';
          	break;
          case WEBMAP_UINT32:
          	webmap_record.DT = 'F';
          	break;
          case WEBMAP_FLOAT:	
          	webmap_record.DT = 'G';
          	break;
          case WEBMAP_STRING:
          	webmap_record.DT = 'H';
          	break;
          default:    
			    	perr.number++;
				    perr.message = 'Not supported data type';
				    return;
        }
        tfound++;
      }
    }
    if (tfound != 1) {
    	perr.number++;
	    perr.message = 'Data type "T=" is obligatory ';
	    return;    
    }
	
    /**************************************************/
  	/* and now find client specific WebMAP parameters */
		   
    /* find optional strip chart length LO= and HI=  */
    for (var i=0;i<toks.length;i++) {
    	if (toks[i].slice(0,2) == "L=") 
      	webmap_record.L = parseInt(toks[i].slice(2,toks[i].length),10);
    	if (toks[i].slice(0,2) == "S=") 
      	webmap_record.S = parseFloat(toks[i].slice(2,toks[i].length));
    	if (toks[i].slice(0,2) == "O=") 
      	webmap_record.O = parseFloat(toks[i].slice(2,toks[i].length));
    	if (toks[i].slice(0,2) == "P=") 
      	webmap_record.P = parseInt(toks[i].slice(2,toks[i].length),10);
    	if (toks[i].slice(0,3) == "CL=") 
      	webmap_record.CL = parseInt(toks[i].slice(3,toks[i].length),10);
    	if (toks[i].slice(0,3) == "LO=") 
      	webmap_record.LO = parseInt(toks[i].slice(3,toks[i].length),10);
    	if (toks[i].slice(0,3) == "HI=") 
      	webmap_record.HI = parseInt(toks[i].slice(3,toks[i].length),10);
    	if (toks[i].slice(0,2) == "C=") 
      	webmap_record.C = parseInt(toks[i].slice(2,toks[i].length),10);
    }

    /* build hardware data request string */
    for (var i=0;i<webmap_record.DS.length;i++) 
      webmap_record.DS[i] = webmap_record.DT + webmap_record.DS[i] + pad(webmap_record.L.toString(16), 3);
    
    return;
  }

  /*****************************************************************
   * check if the readout data has to be scaled
   ******************************************************************/
	gpac_webmap_scale_response = function(id, r) {

    if (webmap_objects[id].DT = 'G')
      return  webmap_objects[id].S * parseFloat(r) + webmap_objects[id].O;
    else
      return  webmap_objects[id].S * parseInt(r,10) + webmap_objects[id].O;
    
    //return val.toFixed(webmap_objects[id].P);
    
  }
  
  /*****************************************************************
   * this function is called periodically by the timer
   * to read data from GPAC
   ******************************************************************/
	gpac_webmap_parse_response = function(r) {
    	      
      //document.getElementById("webmap_test").innerHTML = "";
      
      //document.getElementById("webmap_error").innerHTML += '<br>_' + r;
      var toks = r.split("@");
      for (var i=0;i<toks.length;i++) {
      	// extract record id from the token
      	var id = toks[i].slice(0,WEBMAP_FIELD_ID_LEN);
        var int_id = parseInt(id, 10);
        // extract data from the token        
        switch(webmap_objects[int_id].DT) {        	
        	case 'H':   //string  
          	if ( (WEBMAP_PREFIX + id) !== document.activeElement.id ) {
          	  if (document.getElementById(WEBMAP_PREFIX + id).type == "text") {      
								document.getElementById(WEBMAP_PREFIX + id).value = toks[i].slice(WEBMAP_FIELD_ID_LEN, toks[i].length);          
          	  }
          	  else {// innerHTML
								document.getElementById(WEBMAP_PREFIX + id).innerHTML = toks[i].slice(WEBMAP_FIELD_ID_LEN, toks[i].length);          
          	  }
            }
          	break;
          default:
            if (webmap_objects[int_id].RT === 'C') { // waveform
              if (document.getElementById(WEBMAP_PREFIX + id).tagName === "CANVAS")
                gpac_webmap_plot_cartesian_chart(toks[i].slice(WEBMAP_FIELD_ID_LEN, toks[i].length), int_id, webmap_server.next_read_index);
              else
                document.getElementById(WEBMAP_PREFIX + id).innerHTML = toks[i].slice(WEBMAP_FIELD_ID_LEN, toks[i].length);
            }
            else {
        			var val = gpac_webmap_scale_response(int_id, toks[i].slice(WEBMAP_FIELD_ID_LEN, toks[i].length));
  		        if (webmap_objects[int_id].CL === 0) { // number in a text field 
                //document.getElementById("webmap_test").innerHTML =  document.activeElement.id ;
                if (document.getElementById(WEBMAP_PREFIX + id).type == undefined) {      // innerHTML
                  document.getElementById(WEBMAP_PREFIX + id).innerHTML = val.toFixed(webmap_objects[int_id].P);
                }
                else  {// form element
                  if ( (WEBMAP_PREFIX + id) !== document.activeElement.id ) { // do not overwrite control which is currently being modified by the user
                    var new_val = val.toFixed(webmap_objects[int_id].P);
                    if (document.getElementById(WEBMAP_PREFIX + id).type == "radio") {
                      if (document.getElementById(WEBMAP_PREFIX + id).value === new_val) {
                        document.getElementById(WEBMAP_PREFIX + id).checked = true;                        
                      }
                    }
                    else {
                      document.getElementById(WEBMAP_PREFIX + id).value = new_val;
                    }
                  }
                }
  		        }
  		        else { // number appended to a strip chart
  		        	gpac_webmap_plot_strip_chart(val, int_id);
  		        }
            }
        } 
      }
  
  };
  
  /*****************************************************************
   * WebMAP callback functions for OUT records
   * this function checks if the value is in its range and 
   * sends it to the webserver
  ******************************************************************/
  onclick_callback = function(event) {

    var idstr = event.target.id.slice(7,10);
    var id = parseInt(idstr, 10);

    // get value
    if ( event.target.tagName === "INPUT" ) {
      if ( event.target.type === "button" ) {
        var vstr = event.target.alt;
        var vint = parseInt(vstr, 10);
        if (isNaN(vint)) {
          gpac_webmap_write(id, "1");
          //document.getElementById("webmap_error").innerHTML = "NaN";
        }
        else {
          gpac_webmap_write(id, vstr);
          //document.getElementById("webmap_error").innerHTML = vstr;
        }
      }
    }
    
    return;
  }

  
  gpac_webmap_update_limits = function(target) {

    var idstr = target.id.slice(7,10);
    var id = parseInt(idstr, 10);
    
    if (webmap_objects[id].DT === "H") //string
      return 0;
    
    var val = parseInt(target.value,10);
    if (isNaN(target.value) || (target.value.length === 0)) {
      document.getElementById(WEBMAP_PREFIX+idstr).style.backgroundColor = "#ff7777";
      return -1;
    }
    
    if ((webmap_objects[id].LO > target.value) || (webmap_objects[id].HI < target.value)) {
      document.getElementById(WEBMAP_PREFIX+idstr).style.backgroundColor = "#ff7777";
      return -1;
    }

    document.getElementById(WEBMAP_PREFIX+idstr).style.backgroundColor = "#ffffff";      
    return 0;
  }
  
  onchange_callback = function(event) {
    
    var idstr = event.target.id.slice(7,10);
    var id = parseInt(idstr, 10);
      
    // check if the field value is within limits
    if (gpac_webmap_update_limits(event.target) === 0)
      gpac_webmap_write(id, event.target.value); 
    
    return;
  }

  /*****************************************************************
   * check if the write data has to be scaled
   ***************************************************************** */
	gpac_webmap_scale_write = function(id, value) {

    if (webmap_objects[id].DT === 'H') { //string
    	return value;
    }
      //return parseInt(value,10);

    //document.getElementById("webmap_test").innerHTML = value;  
  
    //document.getElementById("webmap_test").innerHTML =  parseInt((parseFloat(value) - webmap_objects[id].O)/webmap_objects[id].S);

    if (webmap_objects[id].DT === 'G') // float
      return (parseFloat(value) - webmap_objects[id].O)/webmap_objects[id].S;
    else  // integer
      return parseInt((parseFloat(value) - webmap_objects[id].O)/webmap_objects[id].S,10);    
  }
  
  gpac_webmap_write = function(id, value) {

      // send POST message 
 		xmlhttp.onreadystatechange=function(){gpac_webmap_write_callback(xmlhttp)};
    xmlhttp.open("POST","action/webmap_write", true);

    var value_sca = gpac_webmap_scale_write(id, value)
    var send_str =  webmap_objects[id].DS[0] + value_sca;
    //document.getElementById("webmap_error").innerHTML = send_str;  
    xmlhttp.send(send_str);

    return;
  }
  
  gpac_webmap_write_callback = function(o) {  
    return 0;
  }
  
  /*****************************************************************
   * this function is called periodically by the timer
   * to read data from GPAC
   ******************************************************************/
  gpac_webmap_readout = function() {
  	
    if (webmap_server.timer_enabled)  {
      xmlhttp.onreadystatechange=function(){gpac_webmap_read_callback(xmlhttp)};
      xmlhttp.open("POST","action/webmap_read", true);
      xmlhttp.overrideMimeType('text/javascript');
      //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      
      if (webmap_server.next_read_id === -1)	{ // INP/OUT readout
        if (webmap_server.read_req_string.length > 0)
          xmlhttp.send(webmap_server.read_req_string);
      }
      else {  // waveform readout
        xmlhttp.send(webmap_objects[webmap_server.next_read_id].DS[webmap_server.next_read_index]);
        //document.getElementById("webmap_error").innerHTML += '<br>' + webmap_objects[webmap_server.next_read_id].DS[webmap_server.next_read_index];
      }
      
      //document.getElementById("webmap_test").innerHTML += webmap_server.callback_function + '<br>';
      /* if there are user callback functions then call all of them */
      for (var i=0;i<webmap_server.callback_function.length;i++)
        update_data(webmap_server.callback_function[i]);
    }

		return;    
	};
  
  /* call user callback function for data post processing */
  function update_data(callback) {
  
    callback();
  }
  

  /*****************************************************************
   * Find next object for asynchronous readout - this is for readout
   * of waveforms. Each waveform is read in separate callback due to
   * large data to be read
   ******************************************************************/
	gpac_webmap_find_next_read = function(current_id) {
        
    if (webmap_server.next_read_id < 0)  { /* find first object */
      for (var i=0; i<webmap_objects.length; i++) {
        if ((webmap_objects[i].RT === "C") && (webmap_objects[i].E === 0) ) { // waveform
          webmap_server.next_read_id = i;
          webmap_server.next_read_index = 0;
          return 1;
        }
      }    
    }
    else {
      /* current record must be a waveform, check if it has more addresses */
      if ((webmap_objects[webmap_server.next_read_id].DS.length-1) > webmap_server.next_read_index) {
          webmap_server.next_read_index++;
          return 1;
      }
      else { /* find next waveform */
        for (var i=webmap_server.next_read_id+1; i<webmap_objects.length; i++) {
          if ((webmap_objects[i].RT === "C") && (webmap_objects[i].E === 0) ) { // waveform
            webmap_server.next_read_id = i;
            webmap_server.next_read_index = 0;
            return 1;
          }        
        }
      }
    }
    
    /* no more waveforms found, read again scalars */
    webmap_server.next_read_id = -1;
    webmap_server.next_read_index = 0;
    
    return 0;
  }
  
  /*****************************************************************
   * Callback function for periodic readout
   * 
   ******************************************************************/
  gpac_webmap_read_callback = function(o) {
  
    //document.getElementById("webmap_test").innerHTML += "cnt: " + webmap_server.access_err + "<br>";
    
  	if (o.readyState==4 && o.status==200) {
      webmap_server.access_err = 0;         // reset connection error counter
    	//document.getElementById("webmap_test").innerHTML = o.responseText;
      gpac_webmap_parse_response(o.responseText);	
    
    	// find next object to read    
    	if (gpac_webmap_find_next_read() > 0)
   			gpac_webmap_readout();
    }
    else if (o.readyState==4 && o.status==0) {
          webmap_server.access_err++;         // increment connection error counter
          if (webmap_server.access_err > TIMER_TIMEOUT) {
            clearInterval(webmap_server.timer_ptr);
            document.getElementById("webmap_error").innerHTML = "<br>Connection error. Periodic readout stopped.";
          }
    }
    
    return;
  }
  
  
  /*****************************************************************
   * Utility functions
   * 
   ******************************************************************/
  function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
  
  /*****************************************************************
   * PLOT strip chart
   * 
   ******************************************************************/
 

  gpac_webmap_plot_strip_chart = function(new_data, record_id) {

  	if (webmap_objects[record_id].CD == null) { /* empty plot */
  
  		var x = new Array();
  		var d = new Array();
        
      for (var i=0;i<webmap_objects[record_id].CL;i++){
        if (i%10)
          x[i] = "";
        else
          x[i] = 1+i-webmap_objects[record_id].CL;
        d[i] = new_data;
      }
    
      var data = {
      	//labels : [1,2,"March","April","May","June","July"],
        labels : x,
      	datasets : [
      		{
      			fillColor : "rgba(151,187,205,0.5)",
      			strokeColor : "rgba(151,187,205,1)",
      			pointColor : "rgba(151,187,205,1)",
      			pointStrokeColor : "#fff",
            bezierCurve : false,
      			data : d
      		}
      	]
      }
      webmap_objects[record_id].CD = data;
	  }
    else {
    	data = webmap_objects[record_id].CD;
    	data.datasets[0].data.shift();
      data.datasets[0].data.push(new_data);
      webmap_objects[record_id].CD = data;
		}    
          
  	//var ctx = document.getElementById(WEBMAP_PREFIX+record_id).getContext("2d");
  	var ctx = document.getElementById(WEBMAP_PREFIX+pad(record_id,WEBMAP_FIELD_ID_LEN)).getContext("2d");
    my_chart = new Chart(ctx).Line(data, Line);        
    delete(my_chart);
    
  }
  

  /*****************************************************************
   * PLOT cartesian chart
   * 
   ******************************************************************/
 

  gpac_webmap_plot_cartesian_chart = function(new_data, record_id, index) {

    colors = ["rgba(155,0,0,1)", "rgba(255,150,150,1)", "rgba(0,155,0,1)", "rgba(150,255,150,1)", "rgba(0,0,255,1)", "rgba(150,150,255,1)"];
  
    var darray = new_data.split(";");
    
  	if (webmap_objects[record_id].CD == null) {
  		var x = new Array();
      for (var i=0;i<darray.length;i++) {
        if (i%10)
          x[i] = "";
        else
          x[i] = i;
      }
      var data = {
        labels : x,
      	datasets : []      
      }
      for (var i=0;i<webmap_objects[record_id].DS.length;i++) { 
        data.datasets[i] = {
          fillColor : "rgba(151,187,205,0.5)",
          strokeColor : colors[i],
          pointColor : "rgba(151,187,205,1)", 
          pointStrokeColor : "#fff",
          bezierCurve : false,
          data : []
    		};
      }            
      webmap_objects[record_id].CD = data;
	  }
    data = webmap_objects[record_id].CD;
    for (var i=0;i<darray.length;i++) {
      if (webmap_objects[record_id].DT = 'G')
        data.datasets[index].data[i] = parseFloat(darray[i]);
      else
        data.datasets[index].data[i] = parseInt(darray[i],10);
    }
      //document.getElementById("webmap_test").innerHTML += "<br>" + data.datasets[index].data + "<br>";
    /* refresh plot only when all data received */
    if ((webmap_objects[record_id].DS.length-1) > index)
      return 0;



  	var ctx = document.getElementById(WEBMAP_PREFIX+pad(record_id,WEBMAP_FIELD_ID_LEN)).getContext("2d");
    my_chart = new Chart(ctx).Line(data, Line);        
    delete(my_chart);
        
  }

}  

var gpac_webmap_client = new gpac_webmap();

window.onload = gpac_webmap_client.init;