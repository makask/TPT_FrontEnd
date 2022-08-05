window.onload = rotate;

var adImages = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");
var thisAd = 0;

function rotate(){
    
    thisAd++;
    if(thisAd == adImages.length){
        thisAd = 0; 
    }
    document.getElementById("adBanner").src = adImages[thisAd]; 

    setTimeout("rotate()", 3 * 1000); 

    initAll();
}

var currentImage = 0;

var captionText = new Array("Karu","Lõvi","Tiiger");

function initAll(){
    document.getElementById("imgText").innerHTML = captionText[0];
    document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick = processNext;
}

function processPrevious() { 
	newSlide(-1);
}

function processNext() {
	newSlide(1);
}

function newSlide(direction){
    var imgCt = captionText.length;

    currentImage = currentImage + direction;
    if(currentImage < 0){
        currentImage = imgCt - 1;
    }
    if(currentImage == imgCt){
        currentImage = 0;
    }
    document.getElementById("slideshow").src = "images/animal" + currentImage + ".jpg"; 
	document.getElementById("imgText").innerHTML = captionText[currentImage];  
}

