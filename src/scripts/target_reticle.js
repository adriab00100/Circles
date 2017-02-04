
function TargetReticle() {
	this.x = -10;
	this.y = -10;
	
	this.draw = function draw(ctx) {
		ctx.save();
		ctx.lineWidth = 1;
		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(this.x, this.y - 10);
        ctx.lineTo(this.x, this.y - 2.5);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(this.x, this.y + 10);
        ctx.lineTo(this.x, this.y + 2.5);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(this.x - 10, this.y);
        ctx.lineTo(this.x - 2.5, this.y);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(this.x + 10, this.y);
        ctx.lineTo(this.x + 2.5, this.y);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(this.x, this.y, 7.5, 0, Math.PI * 2, true);
        ctx.stroke();
		ctx.restore();
	};
}