var mousePos;
	var imx=[]; // horizontal position of each image
	var img=[];

	var cnames=['Iceland','France','Nepal','New Zealand','Mexico','Australia','Turkey'];
	var cnames2=['Reykjavik','Paris','Kathmandu','Wellington','Mexico City','Sydney','Ankara'];
	var cnames3=['iceland','France','Nepal','new zealand','Mexico','Aussie','Turkey'];
	var cimages=['iceland1.jpg','france1.jpg','nepal1.jpg','newzealand1.jpg','mexico1.jpg','australia1.jpg','turkey1.jpg'];
	var cdesc=['Iceland','France','Nepal','New_Zealand','Mexico','Australia','Turkey'];
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

//http://stackoverflow.com/questions/11589387/load-txt-file-using-jquery-or-ajax
//We use this code to hold data we may need to display on the page
/*
var datastore = {

    fileContents:"Null",
    pagePrefix:"Null",
    slides:"Null",

    init: function () {
        $.ajax({
            url: "data2.txt",
            async: true,
            success: function (data){
                datastore.fileContents = data;
		holddata=data;
		}
        });
    }
};
*/
holddata="Data for the map page;===============================================================================================================;iceland: The land of fire and ice. Visit beautiful iceland, with it's otherworldy landscapes and striking volcanoes and geysers.france: Ooh-la-la. From the staggering peaks of the alps, to lazy summer vineyards and breathtaking meditteranean beaches. France has romance and adventure galore.;mexico: Canyons, Jungles, Pyramids and Salsa. What more could you ask for? Mexico is a vibrant country with secrets and excitement in spades.;nepal: Buddhist and Hindu temples abound in this remote exciting location. Hiking trails in the Himalayas, Jungles and the highest mountain in the world. Go see it for yourself!;turkey: A culturally diverse country, bordering three contintents, Turkey is full of historic sites and archaeologigcal wonder. Beaches, valleys, mountains, churches, palaces. The list of things to see is endless.;australia: The home of kangaroos, koalas and Crocodile Dundee. From its beautiful and vast coastline, to the unknown adventure of the outback, Australia offers more than meets the eye. ;newzealand: Staggering landscapes, rolling mountains, beaches, lakes and forests. New Zealand is one of the best countries on earth to travel to. Keep a watchful eye out for Hobbits..;franceguide: <img src='/assets/france3.jpg' width='100%' height='200px'><div class='guidecontent'>You could spend a lifetime’s worth of holidays in France and still not feel you’d done the country justice. It remains the planet’s most visited tourist destination, meriting its standing with an almost overwhelming mass of historical treasures, storybook landscapes and cultural idiosyncrasies. The teeming glam of Paris makes for one hell of a centrepiece, matching any city on the planet for ambiance, individuality and set-piece sights. <br><br>But the real beauty of France, in many ways, lies elsewhere. The country’s natural gifts are striking, with white sands, hulking mountains and swathes of rolling countryside. It’s a land that has inspired dreamers and drinkers, revolutionaries and artists. Little wonder that Francophiles (and it’s telling that even the country’s devotees have a given word to describe them) are found the world over. <Br><br>You can soak up the A-list beaches of the Cote d’Azur, drowse in the timeless greenery of the Loire Valley or gaze up at the monumental peaks of the Alps. Wander the lavender fields of Provence, eat your way round the legendary bistros of Lyon or sample the rugged charm of Corsica. France’s cities, coastline and countryside all have their own ooh-la-la rewards, and when taken as a whole, they present a near-perfect visitor package</div>;australiaguide:<img src='/assets/australia3.jpg' width='100%' height='200px'><div class='guidecontent'>Australia is a land of savage beauty, big adventure and even bigger horizons. There are good reasons why it finds itself touted as one of the ultimate travel getaways. it has personality in spades, landscapes to die for and more than its fair share of sunshine. And if beaches, rainforest and outback aren’t your thing, then its major cities are outstanding destinations in their own right.<br><br>In many ways the country breeds extremes. The fiery atmosphere of an Aussie Rules match in Melbourne and the champagne glitz of Sydney Harbour belong to another planet entirely when compared to the quiet expanse of the Red Centre or the surf-bashed coastlines of the west.<br><br>Knowing where to go is arguably the toughest part. There are well-travelled paths, with Sydney and the east coast being a perennially popular choice, although when you’re faced with a country of this magnitude potential itineraries are numberless. The Great Barrier Reef? Uluru? The Great Ocean Road? Kakadu? Hobart? The Kimberley? When the tourist board controversially coined the slogan “So where the bloody hell are you?” it raised a fair point.<br><br>There are iconic Aussie clichés by the barrel-load (from cork hats, barbecues and koalas to crocodiles, cricketers and bush tucker) but the real beauty of the place lies in the stuff you’re not expecting. the dusty open road that unfurls to reveal verdant hills; the cold beer at an outback pub that turns into an evening-long session, the stroll to the beach that throws up a street market, open-air concert and implausibly beautiful sunset.<br><br>A trip Down Under has long been synonymous with escape, exploration and adventure – an image that's unlikely to change anytime soon.</div>;turkeyguide: <img src='/assets/turkey3.jpg' width='100%' height='200px'><div class='guidecontent'>For sheer diversity, Turkey is hard to beat. The country is best measured in multitudes – of people, natural landscapes and cultures. It is a land of vast open spaces and massive mountain ranges, fertile valleys and rugged coastline, fast-growing cities and sleepy villages, seaside resorts and remote beaches.<br><br>Turkey overflows with historic sites and archaeological wonders, all set in a varied and beautiful landscape. The Mediterranean coastline is punctuated with well-preserved Greco-Roman cities like Pergamom and Ephesus, while the otherworldly landscapes of the Cappadocia region harbour cave churches and underground cities.<br><br>Though capital status eludes it, Istanbul is very much the beating heart of the nation. The city is an archive of cultural influences throughout the centuries, playing host to Roman aqueducts, Byzantine churches and Ottoman mosques and palaces. Yet it’s no relic. Cafes, bustling bazaars, hammams (public baths), and nightclubs all buzz with activity.<br><br>Still, Istanbul is just one piece of the vast Turkish puzzle. Beach-lovers can while away lazy sunny days at the ever-popular Bodrum, Marmaris and Izmir resorts along Turkey’s Aegean and Mediterranean coasts.<br><br>The unlikely capital city, Ankara, may be less frequented, but its location in central Anatolia makes it worthy of a few days’ visit, if only to witness the contrast between the city’s modernity and the surviving citadel. Away from the more European sensibilities of Istanbul, Ankara also presents an opportunity to gain insight into other facets of Turkish culture.</div>;newzealandguide: <img src='/assets/newzealand3.jpg' width='100%' height='200px'><div class='guidecontent'>Widely held to be one of the most breathtaking countries on the planet, New Zealand is a phenomenal travel destination. The rugged mountains and remote valleys that thrust the destination into the world’s spotlight through The Lord of the Rings trilogy tell only part of the story – you’ll also find beaches, fjords, lakes and gorgeous swathes of forest, not to mention age-old Maori culture, forward-looking cities and, famously, a world-class array of outdoor activities. Not only does it pack a punch as hard as an All Black tackle, but it's also incredibly easy to travel around. What’s not to love?<br><br>Split into two main landmasses – the North and South Islands –New Zealand is a deceptively diverse and complicated destination that rewards both first-time and repeat visitors. The North Island is less visually dramatic than its southern counterpart, but it is home to around two thirds of the country’s inhabitants. The majority of the major urban centres are here, including the capital, Wellington, and the increasingly dynamic city of Auckland. But nature is still a major player, thanks to volcanoes, thermal regions and the magnificent Bay of Islands.<br><br>The South Island is home to far fewer people, but boasts the country’s most spectacular scenery. Empty beaches, soaring mountain ranges, glaciers, fjords, wide-open expanses – they’re all here. Outdoor enthusiasts can take their pick from tramping (hiking), cycling, climbing, white-water rafting, caving, zorbing, sky-diving, bungee jumping and more. Christchurch, a city bouncing back with extraordinary creativity from earthquake damage, is also here.</div>;nepalguide: <img src='/assets/nepal3.jpg' width='100%' height='200px'><div class='guidecontent'>Officially the highest country on Earth, lofty Nepal is commonly referred to as the “roof of the world.” That seems like a fitting moniker for this Himalayan nation, where soaring, snow-capped mountains disappear into the clouds like stairways to heaven.<br><br>Mount Everest is the star attraction. Tourists come in their droves to climb, hike and admire the world’s tallest peak, which flirts with the stratosphere at 8,848m (29,029ft). But this charming country is much more than just mountains. <br><br>Holy places abound in Nepal, but not just of the Buddhist variety: Hinduism has a strong foothold in the country and there are many Hindu temples scattered across the country (though some have been severely damaged by the 2015 earthquakes).<br><br>Also hit hard was the Nepali capital, Kathmandu, which is encircled by soaring mountain ranges. A beautiful, bustling city it stands at a cultural crossroads between India and China, whose influences can be seen in the architecture and tasted in the cuisine. Meanwhile, a Western vibe prevails in the lively Thamel district, which is lined with bars.<br><br>Kathmandu is a good starting point for travellers venturing into the jungle at Chitwan National Park, which is home to Bengali tigers, crocodiles and one-horned rhinos, plus myriad bird species. Phewa Lake is another draw for tourists, as are the hiking trails in the Himalayas.</div>;mexicoguide: <img src='/assets/mexico3.jpg' width='100%' height='200px'><div class='guidecontent'>As spicy as salsa, intoxicating as tequila and surreal as a Frida Kahlo canvas, Mexico fills the senses, energizes the intellect and nourishes the soul. This huge country encompasses epic landscapes, from northern deserts and snowy peaks of the central sierra, to the jungle highlands of southern Chiapas and the beaches of the Yucatán Peninsula.<br><br>Pre-Colombian civilisations made their mark with the vast pyramids of Teotihuacán, stunning temples of Chichén Itzá and countless other archaeological wonders. The Spanish heritage has also been well preserved, with charming towns built around shady plazas and whitewashed churches, San Miguel de Allende, Guanajuato and Dolores Hidalgo are treasures of the central Colonial Heartland.<br><br>Mexico today is a booming modern economy, led by its gargantuan capital, Mexico City. Once you adjust to the relentless pace of life in this metropolis, you can indulge in world-class museums, dine in exquisite restaurants, cut shapes in clubs and barter at sprawling markets. Beyond the modern cities, lie sleepy villages where age-old customs and ancient beliefs endure. San Cristobal de las Casas is a major hub, ringed by indigenous villages, with churches combining pagan beliefs with Roman Catholicism. Across the country, lively festivals reflect this blending of faiths, most famously at the Day of the Dead ceremony.<br><br>For visitors seeking outdoor adventure, Mexico delivers. Nature lovers can go whale watching in Baja California, reef diving off the Yucatán Peninsula and trekking through the jungle to glowing blue lagoons bordering Guatemala. Adrenaline activities are in amply supply too, from canyoning in Veracruz and hang-gliding in Hidalgo to volcano climbing, caving and river rafting.</div>;icelandguide: <img src='/assets/iceland3.jpg' width='100%' height='200px'><div class='guidecontent'>A small dot in the Atlantic between Scandinavia and America, Iceland has built an impressive tourist industry from its abundant natural wonders. Even financial collapse during the global economic crisis failed to hold back “the land of fire and ice” for long, and visitors are once again flocking to its wilderness parks and dramatic landscapes.<br><br>The fire in question, of course, comes from Iceland’s abundant volcanoes, which burst periodically into life, with sometimes costly consequences for European aviation. Elemental forces bubble just below the surface across the island, heating the water in Iceland’s taps and swimming pools, and creating otherworldly landscapes of twisted lava and rainbow-coloured mineral sands.<br><br>Volcanic tourism is big news, with trips to bubbling fumaroles, live lava flows and perhaps the world’s most reliable geyser at Geysir, which blows its top every four to eight minutes. Thermal springs surface everywhere, providing hot spots on the nation’s beaches and heating the waters of the iconic Blue Lagoon, a surreal open-air swimming pool surrounded by a landscape of tortured black lava.<br><br>Ice is Iceland’s other big draw (the clue is in the name) – more specifically, the dramatic glaciers which slice down towards the coast, calving icebergs into eerie lagoons. Glacier tours, by snowmobile, on foot, or on the back of a tiny Icelandic pony, are an integral part of the Iceland experience. In places, you can even tick off a glacier and a volcano on a single trip.</div>;"


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

window.onload = function() {
	updateCookie("destination",null);
    var c=document.getElementById("myCanvas");
	if (c!=null)
	{
	document.getElementById("booking_destination_id").value="0";
    var ctx=c.getContext("2d");
    var img=document.getElementById("mapmono");
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
		document.getElementById("booking_destination_id").value=closest_place;
		//alert(closest_place);
		//updateOptions();
		//document.getElementById("plink").color = "white";
		}
      
	}, false);
}
		
	};

	function descriptionData3(place)
	{
	var descId=place+"d";
	var descript=document.getElementById(descId).innerHTML.split('|')[0];
	var imgId=place+"i";
	var imgsrc=document.getElementById(imgId).innerHTML.split('|')[0];
	asleep=1;
	
//	document.getElementById("pimage").innerHTML = '<img src="'+imgsrc+'" width=75%>';
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

	// search holddata for our label tag
	index=holddata.search(place);
	
	// then set result to be whatever is on the rest of that line 
	index=index+place.length;
	while (holddata[index]!=';')
		{
		result=result+holddata[index];
		index++;
		}
	// update the html in a div to be whatever is in result
	asleep=1;
	//updateHtml("sliderpop",result);
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
	updateHtml("imagechange","<img src='/assets/downarrowsun2.png' height=40px'>");
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


$(window).on("load", function() {
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
       	}
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
;
