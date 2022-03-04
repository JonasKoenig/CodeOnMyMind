class ParticleEmitter {
    size;
    position;
    particles;
    particleCount;
    index;
    tooltip;

    constructor(size, position, particleCount, country, emissions) {
        this.size = size;
        this.position = position;
        this.particleCount = particleCount;
        this.particles = [];
        this.index = floor(random(0, particleCount));
        this.tooltip = new Tooltip(position, country, emissions, worldMap.zoom());

        for (let i = 0; i < this.particleCount; i++) {
            let particle = new Particle();
            particle.reset(this.size, this.position, this.particleCount);
            this.particles.push(particle);
        }
    }

    animate() {
        for (let i = 0; i < this.particles.length; i++) {

            if (i == this.index) {
                this.particles[i].reset(this.size, this.position, this.particleCount);
            } else {
                this.particles[i].update();
                this.particles[i].show();
            }
        }
        this.particles[this.index].show();
        this.index = (this.index + 1) % this.particleCount;

        this.tooltip.show();
    }
}  