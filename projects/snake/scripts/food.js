class Food {
    position;

    pickLocation () {
        let x = floor(random(0, GRID_COLS));
        let y = floor(random(0, GRID_ROWS));
        this.position = createVector(x, y);
    }

    show () {
        fill(255, 0, 0);
        drawPosition(this.position);
    }
}