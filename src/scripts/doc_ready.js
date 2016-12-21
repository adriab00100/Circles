
function makeCircle(e) {
	var x = e.clientX - $('#mainCanvas').position().left;
	var y = e.clientY - $('#mainCanvas').position().top;
    var c = new Circle(x, y, Math.floor((Math.random() * 90) + 10));
    c.draw($('#mainCanvas')[0].getContext('2d'));
}

$( document ).ready(function() {    
	var drawingContext = new DrawingContext($('#mainCanvas')[0]);
	drawingContext.draw();
	$('#mainCanvas').click(makeCircle);
});