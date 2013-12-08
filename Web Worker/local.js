var p1 = 0.21;
var p2 = 0.71;
var p3 = 0.07;
var er = 0; // extra red
var eg = 0; // extra green
var eb = 0; // extra blue

function drawShape() {
	var canvas = document.getElementById('canvasShape');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');

		ctx.beginPath();
		ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
		ctx.fillStyle = 'yellow';
		ctx.fill();
		ctx.moveTo(110,75);
		ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
		ctx.moveTo(65,65);
		ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
		ctx.moveTo(95,65);
		ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
		ctx.stroke();
    }
}
	

function drawImageGrey() {
	var can = document.getElementById("canvasImageGrey");
	var context = can.getContext("2d");
	var img = new Image();
	img.src = 'myImage.png';
	img.onload = function(){
		context.drawImage(img,0,0,275,183);

		var imgdata = context.getImageData(0,0,275,183);
		var data = imgdata.data;


		for (var i = 0, n = imgdata.data.length; i < n; i += 4) {
			one =1;
			var grayscale = imgdata.data[i] * p1 + imgdata.data[i+1] * p2 + imgdata.data[i+2] * p3;
			imgdata.data[i]   = grayscale + er; // red
			imgdata.data[i+1] = grayscale + eg; // green
			imgdata.data[i+2] = grayscale + eb; // blue
		}
		context.putImageData(imgdata,300,0);
	}; 
}

video = document.getElementById("videosample");
c1 = document.getElementById("canvasVideoGrey");
ctx1 = this.c1.getContext("2d");
// c2 = document.getElementById("canvasVideoGrey2");
// ctx2 = this.c2.getContext("2d");
self = this;
video.addEventListener("play", function() {
width = video.videoWidth / 2;
height = video.videoHeight / 2;
timerCallback();
}, false);

  
function timerCallback() {
	if (video.paused || video.ended) {
  		return;
	}
	computeFrame();
	self = this;
	setTimeout(function () {
	    timerCallback();
	}, 0);
}

function computeFrame() {
	ctx1.drawImage(video, 0, 0, width, height);
	frame = ctx1.getImageData(0, 0, width, height);
	l = frame.data.length;

	for (var i = 0, n = l; i < n; i += 4) {
		var grayscale = frame.data[i] * p1 + frame.data[i+1] * p2 + frame.data[i+2] * p3;
		frame.data[i]   = grayscale + er; // red
		frame.data[i+1] = grayscale + eg; // green
		frame.data[i+2] = grayscale + eb; // blue
	}
	ctx1.putImageData(frame, 0, 0);
	return;
}