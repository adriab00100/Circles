function DrawingContext(canvas) {
	this.canvas = canvas;
	this.context = this.canvas.getContext('2d');
	this.bounding_rect = this.canvas.getBoundingClientRect();
	this.increment_speed = 1.0;
	this.increment_direction = 1.0;
	this.max_speed = 3.0;
	this.min_speed = 0;
	this.speed_delta = 0.01;
	this.translation_offset_x = 0.0;
	this.translation_offset_y = 0.0;
	this.circle = new TripletCircle(this.canvas.width/2, this.canvas.height/2, 50);
	this.translation_target = new TargetReticle();
	
	this.trackMouse = function (e) {
		this.translation_target.x = e.clientX - this.bounding_rect.left;
		this.translation_target.y = e.clientY - this.bounding_rect.top;
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
	};
	
	this.isKeySlowDown = function (keyCode) {
		return keyCode == 45 || keyCode == 95;
	};
	
	this.isKeySpeedUp = function (keyCode) {
		return keyCode == 43 || keyCode == 61;
	};
	
	this.draw = function () {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.circle.radius = this.circle.radius + (this.increment_speed * this.increment_direction);
		// todo: track zoomed circle
		this.circle.draw(this.context);
		this.translation_target.draw(this.context);
		
	};
} 