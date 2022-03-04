class Particle {
  size;
  position;
  velocity;
  acceleration;
  lifespan;

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
      fill(this.flame());
      circle(this.position.x, this.position.y, this.sizeMapping());
  }

  // size and color mapping
  YELLOW = color(255, 225, 0);
  RED = color(255, 150, 150);
  GREY = color(150);
  smoke = () => lerpColor(this.GREY, this.RED, (this.lifespan/PARTICLE_COUNT)**2);
  flame = () => lerpColor(this.smoke(), this.YELLOW, (this.lifespan - PARTICLE_COUNT + 2)/2);
  sizeMapping = () => this.size * (PARTICLE_COUNT - abs(this.lifespan - PARTICLE_COUNT + 2)) / PARTICLE_COUNT;
}