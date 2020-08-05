let FLOCK_SIZE = 200;
let boidFlock = [];
let boidDistance = [];

let separationSlider, alignSlider, cohesionSlider;

function setup() {
  createCanvas(600, 400);

  separationSlider = createSlider(0, 1, 0.2, 0.05);
  alignmentSlider  = createSlider(0, 1, 0.2, 0.05);
  cohesionSlider   = createSlider(0, 1, 0.2, 0.05);

  for (let i = 0; i < FLOCK_SIZE; i++) {
    boidFlock.push(new Boid());
  }
}

function draw() {
  background(150,10,150);

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
