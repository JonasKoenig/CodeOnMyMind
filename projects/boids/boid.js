class Boid {

  // construct new boid
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();

    this.maxSpeed = random(2, 5);
    this.maxForce = 1;
  }


  // separation: steer to avoid crowding local flockmates
  separation(distances) {
    let perceptionRadius = 20;
    let steering = createVector();
    let total = 0;
    for (let i = 0; i < FLOCK_SIZE; i++) {
      let d = distances[i];
      if (d != -1 && d < perceptionRadius) {
        let diff = p5.Vector.sub(this.position, boidFlock[i].position);
        diff.div(d * d);
        steering.add(diff);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
      steering.mult(separationSlider.value());
    }
    return steering;
  }


  // alignment: steer towards the average heading of local flockmates
  alignment(distances) {
    let perceptionRadius = 25;
    let steering = createVector();
    let total = 0;
    for (let i = 0; i < FLOCK_SIZE; i++) {
      let d = distances[i];
      if (d != -1 && d < perceptionRadius) {
        steering.add(boidFlock[i].velocity);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
      steering.mult(alignmentSlider.value());
    }
    return steering;
  }


  // cohesion: move toward the average position of local flockmates
  cohesion(distances) {
    let perceptionRadius = 50;
    let steering = createVector();
    let total = 0;
    for (let i = 0; i < FLOCK_SIZE; i++) {
      let d = distances[i];
      if (d != -1 && d < perceptionRadius) {
        steering.add(boidFlock[i].position);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.sub(this.position);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
      steering.mult(cohesionSlider.value());
    }
    return steering;
  }


  // apply alignment, cohesion and separation
  adjust(distances) {
    let s = this.separation(distances);
    let a = this.alignment(distances);
    let c = this.cohesion(distances);
    this.acceleration.set(s).add(a).add(c);
  }


  // apply velocity and accelleration
  update() {
    this.position.add(this.velocity).add(width, height,0);
    // this.position.rem(width,height,1);
    this.position.x %= width;
    this.position.y %= height;
    this.velocity.add(this.acceleration);
    this.velocity.setMag(this.maxSpeed);
  }


  // display boid heading towards velocity
  show() {
    noFill();
    stroke(255);
    let p = this.position;
    let v = this.velocity;
    triangle(
      p.x + 3 * v.x, p.y + 3 * v.y,
      p.x - v.y,     p.y + v.x,
      p.x + v.y,     p.y - v.x
    );
  }
}
