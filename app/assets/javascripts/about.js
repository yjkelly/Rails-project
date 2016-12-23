function showabout(){
    document.getElementById("about").innerHTML="<div class='aboutleftpic'><img src='/assets/flowerleft-90a54a951f8ec05f744d35a466429c2a54056d764679e2c1d1f8dbdfaab11987.jpg' width='160px'></div><div class='abouthead'>About Us</div><div class='aboutrightpic'><img src='/assets/flowerright-e850a9de8549dd3f7841442c1a143d633344108e6c3f50f9ea22bac820113167.jpg' width='160px'></div><div class='abouttext'><br>Welcome to New Horizons! Founded in 2016, we're a young company, dedicated to offering a place where adventurous souls can find just what they need for their trip away.Whether you're scuba diving in the great barrier reef, making the climb at Croagh Patrick, or camping in Yosemite, we have just what you need at our store.<br><br>If you're unsure what you want to do when away, check our local accommodaton and activity pages to get you started on your next big adventure. Some locations will require vaccinations befo$We're keen to provide a friendly and professional service, and we hope you enjoy the time you spend at our site!</div><br><br><center><img src='/assets/campsite-bb51b7bd74d10f7b1231c514fa5ac2b2b992e441ad7055e3b96936218fd7f63e.jpg' width='500px'><br>"
    slowappear('#about');
    slowappear('#aboutdarken');
}
function hideabout(){
    slowdisappear('#about');
    slowdisappear('#aboutdarken');
}
