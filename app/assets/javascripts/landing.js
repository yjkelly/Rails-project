var mousePos;
	var imx=[]; // horizontal position of each image
	var img=[];

	var cnames=['Iceland','France','Nepal','New Zealand','Mexico','Australia','Turkey'];
	var cnames2=['Reykjavik','Paris','Kathmandu','Wellington','Mexico City','Sydney','Ankara'];
	var cnames3=['iceland','France','Nepal','new zealand','Mexico','Aussie','Turkey'];
	var cimages=['iceland1.jpg','france1.jpg','nepal1.jpg','newzealand1.jpg','mexico1.jpg','australia1.jpg','turkey1.jpg'];
	var cdesc=['Iceland','France','Nepal','New_Zealand','Mexico','Australia','Turkey'];
	var sync=[1,2,4,7,3,6,5];
	var radius = 3;
	var closest_place=0;
	var closest_distance = 100000;
      var xpos=[424,474,713,962,172,898,560]; 
      var ypos=[158,228,299,544,323,507,259];
var blinkcounter=0;
var mastercounter=0;
var sliderDest=[];
var slidercanvas;
var slidercontext;
var destination="";
var onewayreturn="";
var holddata;
var searchString="";
var selected=0;
var selectedArray=[];
var counter=-1;
var asleep=0;

var leaveday="";
var leavemonth="";
var leaveyear="";
var leavetime="";

var returnday="";
var returnmonth="";
var returnyear="";
var returntime="";


      function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 300,50);
        context.font = '18pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
      }

      function writeMessage2(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(300, 0, 600,50);
        context.font = '18pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 310, 25);
      }

      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

$(document).ready(function() {

    var c=document.getElementById("myCanvas");
	if (c!=null)
	{

	var bd=document.getElementById("booking_destination_id");
	if (bd!=null)
	document.getElementById("booking_destination_id").value="1";
    var ctx=c.getContext("2d");
    var img=document.getElementById("mapmono");
setTimeout(function(){
    ctx.drawImage(img,0,0,c.width,c.height);
    
      var xpos=[424,474,713,962,172,898,560]; 
      var ypos=[158,228,299,544,323,507,259];
    var radius=3;
//	Old temporary locations
//      var xpos=[449,474,494,470,500,267,127,234,863,898,344]; 
//      var ypos=[208,228,179,254,250,247,268,303,261,507,456];
	for (i = 0 ; i<xpos.length;i++)
	{
      ctx.beginPath();
      ctx.arc(xpos[i],ypos[i], radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'red';
      ctx.fill();
	}	
	
},600);

	c.addEventListener('click', function() {
		if (destination.length>1)
			{
//			gotoUrl("activities.html");
	//		alert("submitting");
			document.forms["new_booking"].submit();
					
			}
	});
	for (i = 0 ; i<xpos.length;i++)
	{
      ctx.beginPath();
      ctx.arc(xpos[i],ypos[i], radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'red';
      ctx.fill();
	}	

      c.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(c, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
	//writeMessage(c, message);
	closest_place=0;
	closest_distance=100000;
	for (i = 0 ; i<xpos.length;i++)
	{
      ctx.beginPath();
      ctx.arc(xpos[i],ypos[i], radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'red';
      ctx.fill();
      distance = (mousePos.x-xpos[i])*(mousePos.x-xpos[i])+(mousePos.y-ypos[i])*(mousePos.y-ypos[i]);
      if (distance<closest_distance)
		{
		closest_distance=distance;
		closest_place=i;
		}
      }
	if (closest_distance<60)
		{
//		writeMessage2(canvas,'Place: ' +closest_place);
		document.getElementById("pname").innerHTML = cnames[closest_place];

		descriptionData3(cdesc[closest_place]);
		destination=cnames[closest_place];
		updateCookie("destination",cnames[closest_place].toLowerCase());
		if (document.getElementById("booking_destination_id")!=null)
		document.getElementById("booking_destination_id").value=sync[closest_place];

		}
      
	}, false);
}

	});

	function descriptionData3(place)
	{
	var descId=place+"d";
	var descript=document.getElementById(descId).innerHTML.split('|')[0];
	var imgId=place+"i";
	var imgsrc=document.getElementById(imgId).innerHTML.split('|')[0];
	asleep=1;
	
	updateHtml("pdesc",descript);
	updateHtml("pimage",'<img src="'+imgsrc+'" width=75%>');
	}
	
	
	
	function guideData(place)
	{
	guidefiller="<img src='";
	var imgId=place+"i";

	var imgsrc=document.getElementById(imgId).innerHTML.split('|')[2];

	guidefiller=guidefiller+imgsrc+"' width='100%' height='200px'><div class='guidecontent'>";
	var descId=place+"d";
	var descript=document.getElementById(descId).innerHTML.split('|')[1];
	guidefiller=guidefiller+descript+"</div>";
	updateHtml("sliderpop",guidefiller);
	
	var q=0,qw=0,success=0;
	result="";


	asleep=1;

	}

function updateHtml(id,newdata){
	document.getElementById(id).innerHTML = newdata;
	}

    function handle(e){
	result2="";
        if(e.keyCode == 13 || e.keyCode == 9){
            e.preventDefault(); // Ensure it is only this code that runs
	}
//	alert(e.keyCode);
	keypressed=e.keyCode
	if (keypressed == 13)
		{
		keypressed =9;
		if (clearoptions==1)
			{
//			gotoUrl("activities.html");
		//	alert(destination);
			document.forms["new_booking"].submit();
			}
		clearoptions =1;
		}
	else clearoptions=0;
	if (keypressed >64 && keypressed <91)
		{
		keypressed=keypressed+32;
		}
	if (keypressed == 8||keypressed==36)
		{
		selected=0;
		searchString=searchString.slice(0,-1);
		}	
	else if (keypressed == 9&& counter>-1)
		{
		updateinput(selectedArray[selected]);
		highlightdiv();
		}
	else if (keypressed == 40)
		{
		selected=selected+1;
		if (selected>counter)
			selected=counter;
		}
	else if (keypressed == 38)
		{
		selected=selected-1;
		if (selected<0)
			selected=0;
		}
	else if (keypressed>95&&keypressed<123)
		{
		searchString=searchString+String.fromCharCode(keypressed);
		}

	counter=-1;
	if (searchString.length>0)
	{
	for (q=0;q<cnames.length;q++)
		{
		success=0;
		success2=0;
		success3=0;
		lower=cnames[q].toLowerCase();
		lower2=cnames2[q].toLowerCase();
		lower3=cnames3[q].toLowerCase();
		for (qw=0;qw<cnames[q].length;qw++)
			{	
			if (qw>searchString.length)
				break;
			if (lower[qw]==searchString[qw])
				success++;
			}	
		for (qw=0;qw<cnames2[q].length;qw++)
			{	
			if (qw>searchString.length)
				break;
			if (lower2[qw]==searchString[qw])
				success2++;
			}	
		for (qw=0;qw<cnames3[q].length;qw++)
			{	
			if (qw>searchString.length)
				break;
			if (lower3[qw]==searchString[qw])
				success3++;
			}	
		if (success==searchString.length||success2==searchString.length||success3==searchString.length)		
			{
			counter++;
			selectedArray[counter]=q;
			result2=result2+"<div class='";
			if (selected==counter)
				result2=result2+"highlight'>"
			else result2=result2+"normal'>"
			result2=result2+cnames[q]+", "+cnames2[q]+"</div>";
				asleep=1;
			updateHtml("searchpop",result2);
			}
		}
	}
if (result2.length>0&&clearoptions==0)
	visible("searchpop");
else
	hidden("searchpop");
}

function visible(id){
    document.getElementById(id).style.display = "block";
}

function hidden(id){
    document.getElementById(id).style.display = "none";
}

function updateinput(place){
	//alert("hello");
	document.forms["maplocator"]["place"].value = cnames[place];
	document.getElementById("pname").innerHTML = cnames[place];
	document.getElementById("pimage").innerHTML = '<img src="/assets/' + cimages[place]+ '" width=270px>';
	descriptionData3(cdesc[place]);
	destination=cnames[place];
	//alert(destination);
	updateCookie("destination",cnames[place].toLowerCase());
			document.getElementById("booking_destination").value=destination;
	//updateOptions();
	//document.getElementById("plink").color = "white";
	tempString= cnames[place].toLowerCase();
	searchString=tempString;
}

function whatPlace(){
        var place=getCookie("destination");
        if (place=='dublin')
                {  updateHtml("testplace","You selected Dublin, right?");}
        else if (place=='rome')
                {  updateHtml("testplace","You selected Rome, right?");}
        else 
                {  place=place+" activities go here";
			updateHtml("testplace",place);}
        }
function updateCookie(nameofcookie,cookiedata){
	str=nameofcookie+"=";
	str=str+cookiedata;
	document.cookie=str;
}  



function getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split('|');
        for(var i=0; i<ca.length; i++)
                {
                var c = ca[i].trim();
                if (c.indexOf(name)==0)
                        return c.substring(name.length,c.length);
                }
}

        $(document).ready(function (){
            $("#click").click(function (){
                $('html, body').animate({
                    scrollTop: $("#newcontainer").offset().top
                }, 1000);
         setTimeout(function(){
                blinkcounter=0;
                blink();
                },1000);

            });
            $("#plink").click(function (){
		if (destination.length>1)
		gotoUrl("activities.html");

            });

        });

//Makes our link flash briefly
function highlightdiv(){
	$('#plink').animate({    'opacity': '0.4'}, 500);
	$('#plink').animate({    'opacity': '1.0'}, 500);
	$('#plink').animate({    'opacity': '0.4'}, 500);
	$('#plink').animate({    'opacity': '1.0'}, 500);
}

function gotoUrl(url){
	window.location.href=url;
}

function appear(id){
document.getElementById(id).style.display='block';
}
function disappear(id){
document.getElementById(id).style.display='none';
}
function oneway(x){
if (x==1)
	{
	onewayreturn="oneway";
	returnday="";
	updateCookie("returnday",null);
	returnmonth="";
	updateCookie("returnmonth",null);
	returnyear="";
	updateCookie("returnyear",null);
	returntime="";
	updateCookie("returntime",null);
	}
else onewayreturn="return";
}
function slowappear(id){
$(id).fadeIn('slow');
}
function slowdisappear(id){
$(id).fadeOut('slow');
}




function highdetail(){
document.getElementById("flightdetails").style.backgroundColor="#dfd";
document.getElementById("flightdetails2").style.backgroundColor="#fff";
document.getElementById("flightdetails3").style.backgroundColor="#fff";
document.getElementById("flightdetails4").style.backgroundColor="#fff";
}
function highdetail2(){
document.getElementById("flightdetails").style.backgroundColor="#fff";
document.getElementById("flightdetails2").style.backgroundColor="#dfd";
document.getElementById("flightdetails3").style.backgroundColor="#fff";
document.getElementById("flightdetails4").style.backgroundColor="#fff";
}
function highdetail3(){
document.getElementById("flightdetails").style.backgroundColor="#fff";
document.getElementById("flightdetails2").style.backgroundColor="#fff";
document.getElementById("flightdetails3").style.backgroundColor="#dfd";
document.getElementById("flightdetails4").style.backgroundColor="#fff";
}
function highdetail4(){
document.getElementById("flightdetails").style.backgroundColor="#fff";
document.getElementById("flightdetails2").style.backgroundColor="#fff";
document.getElementById("flightdetails3").style.backgroundColor="#fff";
document.getElementById("flightdetails4").style.backgroundColor="#dfd";
}

$(document).ready(function(){
  setTimeout(function(){
      $('#faded').fadeIn('slow');
    },1500); //1.5 seconds
});
$(document).ready(function(){
  setTimeout(function(){
      $('#faded2').fadeIn('slow');
    },2500); //2.5 seconds
});


function hideslider()
{
slowdisappear('#sliderpop');
slowdisappear('#sliderdarken');
  setTimeout(function(){
document.getElementById("sliderdarken").style.zIndex="-999";
document.getElementById("sliderpop").style.zIndex="-1000";
	},500);
	
}

//Yvette's cool code idea for the sun
$(document).ready(function(){
	if (document.getElementById("sun")!=null)
	{
  setTimeout(function(){
    $('#sun').animate({
      top:'64px'
    },2500);
  },2000);

  
  setTimeout(function(){
    $('#sun').stop().animate({
      left:'275px', top:'59px',width:'50px',height:'50px'
    },{queue:false},1500);
  },4500);

  setTimeout(function(){
    $('#sun').fadeOut('slow');
  },5000);
 setTimeout(function(){
    $('#cover').animate({
      opacity:0.2,
    },300);
  },4700);
 setTimeout(function(){
document.getElementById("cover").style.zIndex = "1000";
  },4700);
 setTimeout(function(){
    $('#cover').animate({
      opacity:0.0,
    },300);
  },5000);
 setTimeout(function(){
document.getElementById("cover").style.zIndex = "-1000";
  },5300);
  setTimeout(function(){
	updateHtml("imagechange","<img src='/assets/downarrowsun2-ab219ec34cf26e5307664949eec198107d4702d601baf856312f7f66dbe98c5f.png' height=40px'>");
	},5000);
	}
});
$(document).ready(function(){
  $('#main-heading').animate({opacity:1},'slow');
});
function scrollfurther(){
                $('html, body').animate({
                    scrollTop: $("#third").offset().top
                }, 1000);
}
function scrollback(){
                $('html, body').animate({
                    scrollTop: $("#newcontainer").offset().top
                }, 1000);
         setTimeout(function(){
                blinkcounter=0;
                blink();
                },1000);

}

$(document).ready( function() {
	setTimeout(function(){
       	slidercanvas = document.getElementById('mySlider');
       	if (slidercanvas!=null)
       	{
       	slidercontext = slidercanvas.getContext('2d');
	slidercanvas.addEventListener('click', function() {
//	alert(mousePos.x);
	var clicked=-1;
	if (mousePos.y>50&&mousePos.y<250)
		if (mousePos.x>25&&mousePos.x<225)
			{
			clicked=0;
			}
		else if (mousePos.x>275&&mousePos.x<475)
			{
			clicked=1;
			}
		else if (mousePos.x>525&&mousePos.x<725)
			{
			clicked=2;
			}
	var guideplace=-1;
	if (clicked!=-1)
		{
		for (q=0;q<7;q++)
			{
			if (imx[q]-250==clicked*250+25)
				guideplace=q;
			}
		if (guideplace>-1)
			{
			guideData(cdesc[guideplace]);
			document.getElementById("sliderdarken").style.zIndex="99";
			document.getElementById("sliderpop").style.zIndex="100";
			slowappear('#sliderpop');
			slowappear('#sliderdarken');
			}
		}
	});
	var cnamesguide=['icelandguide:','newzealandguide:','mexicoguide:','franceguide:','turkeyguide:','australiaguide:','nepalguide:'];
	sliderdest=["  Iceland"," France","   Nepal","New Zealand"," Mexico","Australia"," Turkey"];
        
        img[0]=document.getElementById("ice");
        img[1]=document.getElementById("fra");
        img[2]=document.getElementById("nep");
        img[3]=document.getElementById("new");
        img[4]=document.getElementById("mex");
        img[5]=document.getElementById("aus");
        img[6]=document.getElementById("tur");
	var cdesc=['Iceland','France','Nepal','New_Zealand','Mexico','Australia','Turkey'];
	var q;
	for (q=0;q<7;q++)
		{
		imx[q]=25+250*q;
		}
	for (q=0;q<7;q++)
		{
		slidercontext.drawImage(img[q],imx[q]-250,50,200,200)
       	 	}
        slidercontext.font = '18pt Calibri';
        slidercontext.fillStyle = 'black';
	for (q=0;q<7;q++)
		{
        	slidercontext.fillText(sliderdest[q], 55+imx[q]-250, 280);
		}
        slidercanvas.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(slidercanvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
	//writeMessage(slidercanvas, message);
	
        });
       	}},1000);
});

function slideover(){
	requestAnimationFrame(moveit);
}
function slideback(){
	requestAnimationFrame(moveitback);
}

function moveit(){
	mastercounter=mastercounter+10;
       	slidercanvas = document.getElementById('mySlider');
       	slidercontext = slidercanvas.getContext('2d');
  	slidercontext.clearRect(0, 0, slidercanvas.width, slidercanvas.height); // clear the canvas
	for (q=0;q<7;q++)
		{
		imx[q]=imx[q]+10;
		if (imx[q]==1775)
			imx[q]=25;
		}
	for (q=0;q<7;q++)
		{
		slidercontext.drawImage(img[q],imx[q]-250,50,200,200)
       	 	}
	        slidercontext.font = '18pt Calibri';
       	 	slidercontext.fillStyle = 'black';
		for (q=0;q<7;q++)
			{
        		slidercontext.fillText(sliderdest[q], 55+imx[q]-250, 280);
			}

if (mastercounter%250==0)
	return;
requestAnimationFrame(moveit);
}

function moveitback(){
	mastercounter=mastercounter+10;
       	slidercanvas = document.getElementById('mySlider');
       	slidercontext = slidercanvas.getContext('2d');
  	slidercontext.clearRect(0, 0, slidercanvas.width, slidercanvas.height); // clear the canvas
	for (q=0;q<7;q++)
		{
		imx[q]=imx[q]-10;
		if (imx[q]==15)
			imx[q]=1765;
		}
	for (q=0;q<7;q++)
		{
		slidercontext.drawImage(img[q],imx[q]-250,50,200,200)
       	 	}
	        slidercontext.font = '18pt Calibri';
       	 	slidercontext.fillStyle = 'black';
		for (q=0;q<7;q++)
			{
        		slidercontext.fillText(sliderdest[q], 55+imx[q]-250, 280);
			}
if (mastercounter%250==0)
	return;
requestAnimationFrame(moveitback);
}


function blink(){
blinkcounter=blinkcounter+0.2;
if (blinkcounter%6>3)
        blinker=6-blinkcounter%6;
else blinker=blinkcounter%6;
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
        var radius = 3+blinker;
        context.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas
            var img=document.getElementById("mapmono");

        context.drawImage(img,0,0,canvas.width,canvas.height);
        for (i = 0 ; i<xpos.length;i++)
        {
      context.beginPath();
      context.arc(xpos[i],ypos[i], radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'red';
      context.fill();
        }
if (blinkcounter<30)
requestAnimationFrame(blink);
}
window.onunload = function(){};
