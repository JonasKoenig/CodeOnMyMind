// A simple Particle class
let Particle = function(position, size) {
  let direction = createVector(random(-1, 1), random(-1, 1))
  this.acceleration = direction.setMag(0.5);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.position = position.copy();
  this.lifespan = 45;
  this.size = size;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(100, this.lifespan-100);
  strokeWeight(2);
  // noStroke();
  fill(127, this.lifespan*4);
  ellipse(this.position.x, this.position.y, this.size, this.size);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem = function(position, size) {
  this.origin = position;//.copy();
  this.size = size;
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin, this.size));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
