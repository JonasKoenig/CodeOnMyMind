class Food {
    position;

    constructor () {
        this.pickLocation();
    }
    
    pickLocation () {
        let x = floor(random(GRID_DIM_X)) * GRID_SCALE;
        let y = floor(random(GRID_DIM_Y)) * GRID_SCALE;
        this.position = createVector(x, y);
    }

    show () {
        fill(220, 60, 60);
        ellipse(this.position.x, this.position.y, GRID_SCALE, GRID_SCALE);
    }
}