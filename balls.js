const canvas = document.getElementById("canvas");
const n = 10;

class Ball {
  // конструктор для шариков
  constructor(canvas, n = 10, colors = ["blue"], x = 100, y = 100) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.n = n;
    this.x = x;
    this.y = y;
    this.colors = colors;
    this.width = canvas.width;
    this.height = canvas.height;
    this.xSpeed = Math.floor(Math.random() * 10);
    this.ySpeed = Math.floor(Math.random() * 10);
  }

  // функция рисования шарика
  circle(x, y, radius, fillCircle = true) {
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
      this.context.fill();
    } else {
      this.context.stroke();
    }
  }

  // рисование шарика заданным цветом
  draw() {
    this.context.fillStyle = this.getColor();
    this.circle(this.x, this.y, 5, true);
  }

  getColor() {
    return this.colors[0];
  }
}
const ball = new Ball(canvas);
// alert(ball.colors);
// ball.circle(100, 100, 10);
ball.draw();
