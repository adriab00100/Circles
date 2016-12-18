
function setupCanvasContext() {
	var ctx = $('#mainCanvas')[0].getContext('2d');
	ctx.save();
	ctx.clearRect(0,0,150,150);
	ctx.translate(75,75);
	ctx.scale(0.4,0.4);
	ctx.beginPath();
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#325FA2';
	ctx.arc(0,0,142,0,Math.PI*2,true);
	ctx.stroke();
}


$( document ).ready(function() {
    setupCanvasContext();
});