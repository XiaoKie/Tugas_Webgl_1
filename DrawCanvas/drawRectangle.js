function main() {
  var canvas = document.getElementById("glcanvas");
  if (!canvas) {
    console.log("canvas not exist");
    return;
  }

  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgba(0,0,255,1.0)";
  ctx.fillRect(10, 10, 150, 150);
  let blue = true;

  canvas.addEventListener("click", (e) => {
    if (blue) {
      ctx.fillStyle = "rgba(255,0,0,1.0)";
    } else {
      ctx.fillStyle = "rgba(0,0,255,1.0)";
    }
    ctx.fillRect(10, 10, 150, 150);
    blue = !blue;
  });
}
