function TripletCircle(x, y, radius) {
	this.twoPi = Math.PI * 2.0;
	this.piOverTwo = Math.PI/2.0;
	this.sevenPiOverSix = 7.0*Math.PI/6.0;
	this.elevenPiOverSix = 11.0*Math.PI/6.0;
    this.childDrawMin = 2;
	
	this.x = x;
    this.y = y;
    this.radius = radius;
	
    this.draw = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = this.radius / 20;
        ctx.strokeStyle = "hsl(0, 0%, " + (75-(ctx.lineWidth * 100)) + "%)";
        ctx.arc(this.x, this.y, this.radius, 0, this.twoPi, true);
        ctx.stroke();
        ctx.restore();
		if (this.radius > this.childDrawMin ) {
			this.drawChildren(ctx, this.x, this.y, this.radius);
		}
    };
	
	this.drawChildren = function (ctx, parentX, parentY, parentRadius) {
		this.drawChild(ctx, this.piOverTwo, parentX, parentY, parentRadius);
		this.drawChild(ctx, this.sevenPiOverSix, parentX, parentY, parentRadius);
		this.drawChild(ctx, this.elevenPiOverSix, parentX, parentY, parentRadius);
	};
	
	this.child_center_modifer = 0.3;
	this.drawChild = function (ctx, angle, parentX, parentY, parentRadius) {
		var childRadius = parentRadius/5.0;
		var childX = this.child_center_modifer * parentRadius * Math.cos(angle) + parentX;
		var childY = -1.0 * this.child_center_modifer * parentRadius * Math.sin(angle) + parentY;
		
		ctx.save();
        ctx.beginPath();
        ctx.lineWidth = childRadius/20;
        ctx.strokeStyle = "hsl(0, 0%, " + (75-(ctx.lineWidth * 100)) + "%)";
        ctx.arc(childX, childY, childRadius, 0, this.twoPi, true);
        ctx.stroke();
        ctx.restore();
		if (childRadius > this.childDrawMin ) {
			this.drawChildren(ctx, childX, childY, childRadius);
		}
	};
	
	this.getChildX = function(childName) {
		var angle = this.getChildAngle(childName);
		return this.child_center_modifer * this.radius * Math.cos(angle) + this.x;
	};
	
	this.getChildAngle = function(childName) {
		var angle = 0;
		if (childName === "top") {
			angle = this.piOverTwo;
		}
		else if (childName === "left") {
			angle = this.sevenPiOverSix;
		}
		else if (childName === "right") {
			angle = this.elevenPiOverSix;
		}
		else {
			throw 'Bad Child'
		}
		return angle;
	};
	
	this.getChildY = function(childName) {
		var angle = this.getChildAngle(childName);
		return -1.0 * this.child_center_modifer * this.radius * Math.sin(angle) + this.y;
	};
}