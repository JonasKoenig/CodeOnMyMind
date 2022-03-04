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
      circle(this.position.x, this.position.y, .8 * this.size);
    } else {
      fill(this.colorMap());
      circle(this.position.x, this.position.y, this.size);
    }
  }

  // size and color mapping
  YELLOW = color(255, 225, 0);
  RED = color(255, 127, 127, 245);
  GREY = color(100, 0);
  colorMap = () => lerpColor(this.GREY, this.RED, (this.lifespan/PARTICLE_COUNT)**2)
}