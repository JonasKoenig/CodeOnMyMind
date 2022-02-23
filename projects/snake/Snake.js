class Snake {
    position;
    direction;
    tail;
    targetLength;

    constructor () {
        this.reset();
    }

    reset () {
        this.position = createVector(GRID_SCALE, GRID_SCALE);
        this.direction = RIGHT;
        this.tail = [];
        this.targetLength = 2;
    }

    update () {
        // shift tail positions if tail is long enough
        if (this.targetLength === this.tail.length) {
            this.tail.shift();
        }

        // add current position to tail
        this.tail[this.targetLength - 1] = this.position.copy();    

        // apply direction to position
        this.position.add(this.direction);

        // move through walls
        this.position.add(width, height).rem(width, height);
    }

    show () {
        fill(165, 108, 74);
        for (let i = 0; i < this.targetLength; i++) {
            let segment = this.tail[i];
            if (segment == undefined) continue;        
            rect(segment.x, segment.y, GRID_SCALE, GRID_SCALE);
        }
        rect(this.position.x, this.position.y, GRID_SCALE, GRID_SCALE);
    }

    steer (direction) {
        // prohibits snake from going backwards
        if (this.direction.x * direction.x == 0 && this.direction.y * direction.y == 0) {
            this.direction = direction;
        }
    }

    checkForEat (food) {
        if (vectorEquals(this.position, food.position)) {
            this.targetLength++;
            food.pickLocation();
        }
    }

    checkForDeath () {
        for (let i = 0; i < this.targetLength; i++) {
            let segment = this.tail[i];
            if (segment == undefined) continue;

            if (vectorEquals(this.position, segment)) this.reset();
        }
    }
}