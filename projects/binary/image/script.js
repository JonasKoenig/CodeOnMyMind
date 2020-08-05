let drawingCanvas = document.getElementById("drawingCanvas");
drawingCanvas.addEventListener("mousedown", e => draw(true, e));
drawingCanvas.addEventListener("mousemove", e => draw(isDrawing, e));
drawingCanvas.addEventListener("mouseout", e => draw(false, e));
drawingCanvas.addEventListener("mouseup", e => draw(false, e));

let ctx = drawingCanvas.getContext("2d");

document.getElementById("colorPicker").addEventListener("change", e => BRUSH_COLOR = e.target.value);

let BRUSH_COLOR;
let GRID = 30;
let isDrawing = false;
let offsetX = 0;
let offsetY = 0;
let mouseX, mouseY = 0;
let [r, g, b, a] = [0, 1, 2, 3];


// 1. Image

function initialImage() {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(GRID, 2 * GRID, 2 * GRID, 2 * GRID);
  ctx.fillStyle = "#00FF00";
  ctx.fillRect(3 * GRID, 2 * GRID, 2 * GRID, 2 * GRID);
  ctx.fillStyle = "#0000FF";
  ctx.fillRect(5 * GRID, 2 * GRID, 2 * GRID, 2 * GRID);

  updatePipeline();
}

function getMousePos(e) {
  var rect = drawingCanvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function draw(flag, e) {
  isDrawing = flag;

  if (isDrawing) {
    mouseX = Math.floor(getMousePos(e).x / GRID) * GRID;
    mouseY = Math.floor(getMousePos(e).y / GRID) * GRID;
    ctx.fillStyle = BRUSH_COLOR;
    ctx.fillRect(mouseX, mouseY, GRID, GRID);
    updatePipeline();
  }

}

// 2. Color Channels

function imageToChannel(c) {
  let img = ctx.getImageData(0, 0, drawingCanvas.width, drawingCanvas.height);
  for (var pixel = 0; pixel < img.data.length / 4; pixel++) {
    let p = 4 * pixel;
    img.data[p + r] = img.data[p + c];
    img.data[p + g] = img.data[p + c];
    img.data[p + b] = img.data[p + c];
  }
  return img;
}

// 3. Encoding

function channelEncoding(c) {
  let encoding = "<table>";
  for (var col = 0; col < drawingCanvas.height / GRID; col++) {
    encoding += "<tr>"
    for (var row = 0; row < drawingCanvas.width / GRID; row++) {
      let pixelIndex = 4 * row * GRID + col * 4 * drawingCanvas.width * GRID;
      encoding += "<td>" + c.data[pixelIndex] + "</td>";
    }
    encoding += "</tr>"
  }
  return encoding + "</table>";
}

// 4. Binary

function encodingToBinary() {
  let binary = "";
  for (var col = 0; col < drawingCanvas.height / GRID; col++) {
    for (var row = 0; row < drawingCanvas.width / GRID; row++) {
      let pixelIndex = 4 * row * GRID + col * 4 * drawingCanvas.width * GRID;
      for (var c in [r, g, b]) {
        binary += "<span>" + imageToChannel(c).data[pixelIndex] + "</span>";
      }
    }
  }
  return binary;
}

// Print Pipeline

function updatePipeline() {
  let red = imageToChannel(r);
  let green = imageToChannel(g);
  let blue = imageToChannel(b);

  // 2. Color Channels
  document.getElementById("channelRed").getContext("2d").putImageData(red, 0, 0);
  document.getElementById("channelGreen").getContext("2d").putImageData(green, 0, 0);
  document.getElementById("channelBlue").getContext("2d").putImageData(blue, 0, 0);

  // 3. Encoding
  document.getElementById("encodingRed").innerHTML = channelEncoding(red);
  document.getElementById("encodingGreen").innerHTML = channelEncoding(green);
  document.getElementById("encodingBlue").innerHTML = channelEncoding(blue);

  // 4. Binary
  document.getElementById("binary").innerHTML = encodingToBinary();
}
