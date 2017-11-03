function DrawingContext(canvas) {
	this.canvas = canvas;
	this.canvas_bounding = this.canvas.getBoundingClientRect(); // todo: consider call this every time screen size changes
	this.context = this.canvas.getContext('2d');
	this.circle = new TripletCircle(this.canvas.width/2, this.canvas.height/2, 50);
	this.increment_speed = 1.0;
	this.increment_direction = 1.0;
	this.max_speed = 3.0;
	this.min_speed = 0;
	this.speed_delta = 0.01;
	this.translationTarget = new TargetReticle();
	
	this.draw = function () {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.circle.radius = this.circle.radius + (this.increment_speed * this.increment_direction);
		// todo: move towards target
		// todo: track zoomed circle
		this.circle.draw(this.context);
		this.translationTarget.draw(this.context);
		
	};
	
	
	this.trackMouse = function (e) {
		this.translationTarget.x = e.clientX - this.canvas_bounding.left;
		this.translationTarget.y = e.clientY - this.canvas_bounding.top;
	};
	
	this.onKeyPress = function (e) {
		if (this.isKeyReverseDirection(e.keyCode)) {
			this.increment_direction *= -1.0;
		}
		else if (this.isKeySlowDown(e.keyCode)) {
			if (this.increment_speed > this.min_speed) {
				this.increment_speed -= this.speed_delta;
			}
			if (this.increment_speed < this.min_speed) {
				this.increment_speed = this.min_speed;
			}
		}
		else if (this.isKeySpeedUp(e.keyCode)) {
			if (this.increment_speed < this.max_speed) {
				this.increment_speed += this.speed_delta;
			}
		}
	};
	
	this.isKeyReverseDirection = function (keyCode) {
		return keyCode == 13 || keyCode == 32;
	}
	this.isKeySlowDown = function (keyCode) {
		return keyCode == 45 || keyCode == 95;
	}
	
	this.isKeySpeedUp = function (keyCode) {
		return keyCode == 43 || keyCode == 61;
	}
} 