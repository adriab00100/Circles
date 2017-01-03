$( document ).ready(function() {    
	var canvas = $('#mainCanvas')[0];
	window.drawingContext = new DrawingContext(canvas);
	$('#mainCanvas').mousemove(function(e) {window.drawingContext.trackMouse(e);});
	window.requestAnimationFrame(mainDraw);
});

function mainDraw() {
	window.drawingContext.draw();
	window.requestAnimationFrame(mainDraw);
}
