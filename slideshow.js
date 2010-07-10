/***********************************************
* DHTML slideshow script-  © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice must stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

var photos=new Array()
var photoslink=new Array()
var which=0

//define images. You can have as many as you want:
photos[0]="slideshow/1_thumb.jpg"
photos[1]="slideshow/2_thumb.jpg"
photos[2]="slideshow/3_thumb.jpg"
photos[3]="slideshow/4_thumb.jpg"
photos[4]="slideshow/5_thumb.jpg"
photos[5]="slideshow/6_thumb.jpg"
photos[6]="slideshow/7_thumb.jpg"
photos[7]="slideshow/8_thumb.jpg"
photos[8]="slideshow/9_thumb.jpg"
photos[9]="slideshow/10_thumb.jpg"
photos[10]="slideshow/11_thumb.jpg"
photos[11]="slideshow/12_thumb.jpg"


//Specify whether images should be linked or not (1=linked)
var linkornot=1

//Set corresponding URLs for above images. Define ONLY if variable linkornot equals "1"
photoslink[0]="viewpic.html?pic=1_full.jpg"
photoslink[1]="viewpic.html?pic=2_full.jpg"
photoslink[2]="viewpic.html?pic=3_full.jpg"
photoslink[3]="viewpic.html?pic=4_full.jpg"
photoslink[4]="viewpic.html?pic=5_full.jpg"
photoslink[5]="viewpic.html?pic=6_full.jpg"
photoslink[6]="viewpic.html?pic=7_full.jpg"
photoslink[7]="viewpic.html?pic=8_full.jpg"
photoslink[8]="viewpic.html?pic=9_full.jpg"
photoslink[9]="viewpic.html?pic=10_full.jpg"
photoslink[10]="viewpic.html?pic=11_full.jpg"
photoslink[11]="viewpic.html?pic=12_full.jpg"

//do NOT edit pass this line

var preloadedimages=new Array()
for (i=0;i<photos.length;i++){
preloadedimages[i]=new Image()
preloadedimages[i].src=photos[i]
}


function applyeffect(){
if (document.all && photoslider.filters){
photoslider.filters.revealTrans.Transition=Math.floor(Math.random()*23)
photoslider.filters.revealTrans.stop()
photoslider.filters.revealTrans.apply()
}
}



function playeffect(){
if (document.all && photoslider.filters)
photoslider.filters.revealTrans.play()
}

function keeptrack(){
window.status="Image "+(which+1)+" of "+photos.length
}


function backward(){
if (which>0){
which--
applyeffect()
document.images.photoslider.src=photos[which]
playeffect()
keeptrack()
}
}

function forward(){
if (which<photos.length-1){
which++
applyeffect()
document.images.photoslider.src=photos[which]
playeffect()
keeptrack()
}
}

function transport(){
//window.location=photoslink[which]
window.open( photoslink[which], "myWindow", "status = 1, height = 800, width = 800, resizable = 0");
}
