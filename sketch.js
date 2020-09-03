var gif_teacher;

function preload() {
  gif_teacher = createImg("2.gif");
}

function setup() {
  createCanvas(gif_teacher.width, gif_teacher.height);
  background("blue");
}

function draw() {
  gif_teacher.position(0, 0);
}