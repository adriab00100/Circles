function DrawingContext(canvas) {
	this.canvas = canvas;
	this.canvas_bounding = this.canvas.getBoundingClientRect(); // todo: consider call this every time screen size changes
	this.context = this.canvas.getContext('2d');
	this.circle = new TripletCircle(this.canvas.width/2, this.canvas.height/2, 50);
	this.increment = 1.0;
	this.translationTarget = new TargetReticle();
	
	this.draw = function () {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.circle.radius = this.circle.radius + this.increment;
		// todo: recycle/clean up circles out of scope.
		// todo: move towards target
		// todo: keypress toggle move in/out + indicator
		// todo: track zoomed circle
		this.circle.draw(this.context);
		this.translationTarget.draw(this.context);
	};
	
	this.trackMouse = function (e) {
		this.translationTarget.x = e.clientX - this.canvas_bounding.left;
		this.translationTarget.y = e.clientY - this.canvas_bounding.top;
	};
	
	this.onKeyPress = function (e) {
		if (e.keyCode = 13 || e.keyCode = 32) {
			this.increment *= -1.0;
		}
	}
}