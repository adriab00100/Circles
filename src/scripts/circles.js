
function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.draw = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#325FA2';
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.restore();
    }
}

function makeCircle(e) {
	var x = e.clientX - $('#mainCanvas').position().left;
	var y = e.clientY - $('#mainCanvas').position().top;
    var c = new Circle(x, y, Math.floor((Math.random() * 90) + 10));
    c.draw($('#mainCanvas')[0].getContext('2d'));
}

function setupCanvasContext() {
    var canvas = $('#mainCanvas')[0];
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	$('#mainCanvas').click(makeCircle);
}

$( document ).ready(function() {
    setupCanvasContext();
});