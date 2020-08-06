let FLOCK_SIZE = 150;
let boidFlock = [];
let boidDistance = [];

let separationSlider, alignSlider, cohesionSlider;

function setup() {
  createCanvas(600, 400);

  separationSlider = document.getElementById("separation");
  alignmentSlider = document.getElementById("alignment");
  cohesionSlider = document.getElementById("cohesion");

  for (let i = 0; i < FLOCK_SIZE; i++) {
    boidFlock.push(new Boid());
  }
}

function draw() {
  background(255);

  for (let i = 0; i < FLOCK_SIZE; i++) {
    boidDistance[i] = [];

    for (let j = 0; j < FLOCK_SIZE; j++) {
      if (i == j) {
        boidDistance[i][j] = -1;
      } else {
        let b1 = boidFlock[i].position;
        let b2 = boidFlock[j].position;
        boidDistance[i][j] = dist(b1.x, b1.y, b2.x, b2.y);
      }
    }
    boidFlock[i].adjust(boidDistance[i]);
    boidFlock[i].update();
    boidFlock[i].show();
  }
}
