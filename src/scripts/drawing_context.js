function DrawingContext(canvas) {
	this.canvas = canvas;
	this.context = canvas.getContext('2d');
	this.draw = function () {
		this.context.clearRect(0, 0, canvas.width, canvas.height);
	}
}