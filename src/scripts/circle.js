function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.draw = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "hsl(0, 0%, " + (this.radius/4) + "%)";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.restore();
    }
}

function TripletCircle(x, y, radius, subcircleAngle = null) {
	this.piOverTwo = Math.PI/2.0;
	this.fivePiOverFour = 5.0*Math.PI/4.0;
	this.sevenPiOverFour = 7.0*Math.PI/4.0;
    this.x = x;
    this.y = y;
	this.subcircleAngle = subcircleAngle;
    this.radius = radius;
	this.subcircles = [];
    this.draw = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = this.radius/20;
        ctx.strokeStyle = "hsl(0, 0%, " + (75-(ctx.lineWidth * 100)) + "%)";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.restore();
		if (this.radius > 2 ) {
			if (this.subcircles.length === 0) {
				this.subcircles.push(new TripletCircle(0.3* this.radius * Math.cos(this.piOverTwo) + this.x, -0.3 * this.radius * Math.sin(this.piOverTwo) + this.y, this.radius/5.0, this.piOverTwo));
				this.subcircles.push(new TripletCircle(0.3* this.radius * Math.cos(this.fivePiOverFour) + this.x, -0.3 * this.radius * Math.sin(this.fivePiOverFour) + this.y, this.radius/5.0, this.fivePiOverFour));
				this.subcircles.push(new TripletCircle(0.3* this.radius * Math.cos(this.sevenPiOverFour) + this.x, -0.3 * this.radius * Math.sin(this.sevenPiOverFour) + this.y, this.radius/5.0, this.sevenPiOverFour));
			}
			for(var i = 0; i < this.subcircles.length; i++) {
				this.subcircles[i].radius = this.radius/5.0;
				this.subcircles[i].x = 0.3 * this.radius * Math.cos(this.subcircles[i].subcircleAngle) + this.x;
				this.subcircles[i].y = -0.3 * this.radius * Math.sin(this.subcircles[i].subcircleAngle) + this.y;
				this.subcircles[i].draw(ctx);
			}
		}
    }
}