var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
    fabric.Image.fromURL('BirthdayImage.jpg',function(Img) {
    blockImageObject= Img;
    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.set({
         top:170,
         left:170
})
canvas. add(blockImageObject);
})
}

function playSound(){
	x.play();
}
