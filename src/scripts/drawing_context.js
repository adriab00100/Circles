function DrawingContext(canvas) {
	this.canvas = canvas;
	this.canvas_bounding = this.canvas.getBoundingClientRect(); // todo: consider call this every time screen size changes
	this.context = this.canvas.getContext('2d');
	this.circle = new TripletCircle(this.canvas.width/2, this.canvas.height/2, 50);
	this.increment = 1.0;
	this.translation_target = new Object();
	
	this.draw = function () {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.circle.radius = this.circle.radius + this.increment;
		// todo: recycle/clean up circles out of scope.
		// todo: move towards target
		// todo: keypress toggle move in/out + indicator
		// todo: track zoomed circle
		this.circle.draw(this.context);
		this.targetDraw();
	}
	
	this.trackMouse = function (e) {
		this.translation_target.x = e.clientX - this.canvas_bounding.left;
		this.translation_target.y = e.clientY - this.canvas_bounding.top;
	}
	
	this.targetDraw = function () {
		this.context.save();
		this.context.lineWidth = 1;
		this.context.strokeStyle = "red";
		this.context.beginPath();
		this.context.moveTo(this.translation_target.x, this.translation_target.y - 10);
        this.context.lineTo(this.translation_target.x, this.translation_target.y - 2.5);
		this.context.stroke();
		this.context.beginPath();
		this.context.moveTo(this.translation_target.x, this.translation_target.y + 10);
        this.context.lineTo(this.translation_target.x, this.translation_target.y + 2.5);
		this.context.stroke();
		this.context.beginPath();
		this.context.moveTo(this.translation_target.x - 10, this.translation_target.y);
        this.context.lineTo(this.translation_target.x - 2.5, this.translation_target.y);
		this.context.stroke();
		this.context.beginPath();
		this.context.moveTo(this.translation_target.x + 10, this.translation_target.y);
        this.context.lineTo(this.translation_target.x + 2.5, this.translation_target.y);
		this.context.stroke();
		this.context.beginPath();
		this.context.arc(this.translation_target.x, this.translation_target.y, 7.5, 0, Math.PI * 2, true);
        this.context.stroke();
		this.context.restore();
	}
}