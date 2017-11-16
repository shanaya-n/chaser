const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "yellowgreen";

let ball = { x: 250, y: 150, radius: 25, color: "teal", speed: .05};
let enemy = { x: 250, y: 250, width: 30, color: "red", speed: .02};
let mouse = { x: 0, y: 0 };
let radius = 25;

function updateMouse(x, y) {
  const canvasRectangle = canvas.getBoundingClientRect();
  mouse.x = event.clientX - canvasRectangle.left;
  mouse.y = event.clientY - canvasRectangle.top;
}

document.body.addEventListener("mousemove", updateMouse);

function clearBackground() {
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBall() {
  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

function drawEnemy() {
  ctx.fillStyle = enemy.color;
  ctx.strokeRect(
    enemy.x - enemy.width / 2,
    enemy.y - enemy.width / 2,
    enemy.width,
    enemy.width
  );
  ctx.fillRect(
    enemy.x - enemy.width / 2,
    enemy.y - enemy.width / 2,
    enemy.width,
    enemy.width
  );
}

function moveToward(follower, leader, speed){
  follower.x += (leader.x-follower.x)*speed;
  follower.y += (leader.y-follower.y)*speed;
}
function updateScene() {
  moveToward(ball,mouse,ball.speed);
  moveToward(enemy,ball,enemy.speed);
  }

function drawScene() {
  clearBackground();
  drawBall();
  drawEnemy();
  updateScene();
  requestAnimationFrame(drawScene);
}
requestAnimationFrame(drawScene);
