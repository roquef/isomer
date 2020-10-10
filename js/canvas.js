function Canvas(elem) {
  this.elem = elem;
  this.ctx = this.elem.getContext('2d');

  this.width = elem.width;
  this.height = elem.height;
}

Canvas.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.width, this.height);
};

Canvas.prototype.path = function (points, color) {
  // console.log(points);
  this.ctx.beginPath();
  this.ctx.moveTo(points[0].x, points[0].y);

  for (var i = 1; i < points.length; i++) {
    this.ctx.lineTo(points[i].x, points[i].y);
  }

  this.ctx.closePath();

  /* Set the strokeStyle and fillStyle */
  this.ctx.save();

  this.ctx.globalAlpha = color.a;
  this.ctx.fillStyle = this.ctx.strokeStyle = color.toHex();
  this.ctx.stroke();
  this.ctx.fill();
  this.ctx.restore();
};

Canvas.prototype.sprite = function (position, sprite) {
  let draw = () => {
    this.ctx.drawImage(sprite.img, position.x - (sprite.img.width / 2), position.y - sprite.img.height, sprite.img.width, sprite.img.height);
  };

  !sprite.img.complete ? sprite.img.onload = draw : draw();
};


export default Canvas;
