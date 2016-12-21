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