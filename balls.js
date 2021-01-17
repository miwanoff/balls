const canvas = document.getElementById("canvas");
const n = 10;

class Ball {
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
}
// const ball = new Ball(canvas);
// alert(ball.colors);
