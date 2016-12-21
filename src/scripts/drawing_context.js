function DrawingContext(canvas) {
	this.canvas = canvas;
	this.context = this.canvas.getContext('2d');
		this.circle = new TripletCircle(this.canvas.width/2, this.canvas.height/2, 50);
	this.increment = 1.0;
	
	this.draw = function () {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		if(this.circle.radius * 2 >= this.canvas.width || this.circle.radius * 2 >= this.canvas.height) {
			this.increment = -1.0;
		}
		if(this.circle.radius <= 10) {
			this.increment = 1.0;
		}
		this.circle.radius = this.circle.radius + this.increment;
		this.circle.draw(this.context);
		window.requestAnimationFrame(window.mainDraw);
	}
}