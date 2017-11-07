$( document ).ready(function() {    
	var canvas = $('#mainCanvas')[0];
	window.drawing_context = new DrawingContext(canvas);
	$( document ).keypress(function(e) {window.drawing_context.onKeyPress(e);});
	$('#mainCanvas').mousemove(function(e) {window.drawing_context.trackMouse(e);});
	window.requestAnimationFrame(mainDraw);
});

function mainDraw() {
	window.drawing_context.draw();
	window.requestAnimationFrame(mainDraw);
}
