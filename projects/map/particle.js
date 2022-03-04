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
    this.acceleration = createVector(.01*size, 0)//-.03*size);
    this.lifespan = lifespan;
  }

  update () {
    if (this.velocity == undefined) {
      return;
    }
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.lifespan--;
  }
  
  show () {
    if (this.velocity == undefined) {
      return;
    }
    
    fill(this.r(), this.g(), this.b(), this.a());
    circle(this.position.x, this.position.y, this.s());
  }

  // size and color mapping
  s = () => (this.lifespan > 28) ? .8*this.size : this.size;
  r = () => (this.lifespan > 18) ? map(this.lifespan, 18, 30, 150, 255) : 127;
  g = () => (this.lifespan > 28) ? 225 : 127;
  b = () => (this.lifespan > 28) ? 0 : 127;
  a = () => map(this.lifespan, 0, 30, 0, 245);
}