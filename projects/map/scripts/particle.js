class Particle {
  size;
  position;
  velocity;
  acceleration;
  lifespan;

  constructor (size, position, lifespan) {

  }

  reset (size, position, lifespan) {
    this.size = size;
    this.position = position.copy();
    this.velocity = createVector(random(-.03*size, .03*size), random(-.1*size, -.15*size));
    this.acceleration = createVector(.01*size, 0);
    this.lifespan = lifespan;
  }

  update () {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.lifespan--;
  }
  
  show () {
    if (this.lifespan > PARTICLE_COUNT - 2) {
      fill(this.YELLOW);
      circle(this.position.x, this.position.y, this.size * .7);
    } else {
      fill(this.colorMap());
      circle(this.position.x, this.position.y, this.size * this.lifespan / PARTICLE_COUNT);
    }
  }

  // size and color mapping
  YELLOW = color(255, 225, 0);
  RED = color(255, 127, 127, 245);
  GREY = color(150, 255);
  colorMap = () => lerpColor(this.GREY, this.RED, (this.lifespan/PARTICLE_COUNT)**2)
}