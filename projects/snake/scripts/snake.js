class Snake {
    position;
    direction;
    tailLength;
    tail;

    reset () {
        this.position = createVector(1, 1);
        this.direction = RIGHT;
        this.tailLength = 2;
        this.tail = [];
    }


    update () {
        this.checkForGameOver();

        // adjust tail length
        while (this.tail.length >= this.tailLength) {
            this.tail.shift();
        }
        this.tail.push(this.position.copy());

        // apply direction
        this.position.add(this.direction);

        // walk through walls
        this.position = clampPosition(this.position);
    }

    show () {
        fill(0);
        drawPosition(this.position);
        
        fill(100);
        for (let i = 0; i < this.tail.length; i++) {
            const tailSegment = this.tail[i];
            drawPosition(tailSegment);
        }
    }

    steer (vector) {
        if (this.isValidDirection(vector)) {
            this.direction = vector;
        }
    }

    isValidDirection (vector) {
        if (vector) {
            return !equalPosition(vector, this.direction.copy().mult(-1));
        };
        return false;
    }

    checkForEat (food) {
        if (equalPosition(this.position, food.position)) {
            this.tailLength++;
            food.pickLocation();
        }
    }

    checkForGameOver () {
        for (let i = 0; i < this.tail.length; i++) {
            const tailSegment = this.tail[i];
            if (equalPosition(this.position, tailSegment)) {
                this.reset();
            }
        }
    }

    
}