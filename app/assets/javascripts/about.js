function showabout(){
    document.getElementById("about").innerHTML="<div class='aboutleftpic'><img src='/assets/flowerleft.jpg' width='160px'></div><div class='abouthead'>About Us</div><div class='aboutrightpic'><img src='/assets/flowerright.jpg' width='160px'></div><div class='abouttext'><br>Welcome to New Horizons! Founded in 2016, we're a young company, dedicated to offering a place where adventurous souls can find just what they need for their trip away.Whether you're scuba diving in the great barrier reef, making the climb at Croagh Patrick, or camping in Yosemite, we have just what you need at our store.<br><br>If you're unsure what you want to do when away, check our local accommodaton and activity pages to get you started on your next big adventure. Some locations will require vaccinations befo$We're keen to provide a friendly and professional service, and we hope you enjoy the time you spend at our site!</div><br><br><center><img src='/assets/campsite.jpg' width='500px'><br>"
    slowappear('#about');
    slowappear('#aboutdarken');
}
function hideabout(){
    slowdisappear('#about');
    slowdisappear('#aboutdarken');
}
