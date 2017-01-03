
$( document ).ready(function() {    
	var canvas = $('#mainCanvas')[0];
	window.drawingContext = new DrawingContext(canvas);
	window.requestAnimationFrame(mainDraw);
});

function mainDraw() {
	window.drawingContext.draw();
	window.requestAnimationFrame(mainDraw);
}