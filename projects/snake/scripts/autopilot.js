class Autopilot {
    queue;
    path;
    visited;

    reset () {
        this.queue = [];
        this.path = [];
        this.visited = [];
    }

    searchPath (snake, food) {

        // initial state of search
        this.reset();
        let startNode = new Node(snake.position, null, food.position);
        this.queue.push(startNode);

        while (this.queue.length > 0 && this.visited.length < GRID_COLS*GRID_ROWS) {

            let currentNode = this.queue[0];
            this.visited.push(currentNode);
            this.queue.shift();

            if (currentNode.distToGoal == 0) {

                console.log('Autopilot: Success! Gathering path ...');
                this.backtrackingPath(currentNode);
                return;

            } else {

                let neighbors = this.createNeighbors(currentNode);
                neighbors = neighbors.filter((n) => this.isTraversable(n.position, snake));
                neighbors = neighbors.filter((n) => this.isNotVisited(n.position));
                neighbors.forEach((n) => this.queueInsert(n));

            }
        }

        console.log('Autopilot: No path could be found.');
        return false;
    }

    createNeighbors (node) {
        let neighborNodes = [];
        let allDirections = [UP, DOWN, LEFT, RIGHT];
        allDirections.forEach(function (dir) {
            let neighborPosition = clampPosition(node.position.copy().add(dir));
            neighborNodes.push(new Node(neighborPosition, node, food.position));
        });
        return neighborNodes;
    }

    isTraversable (position, snake) {
        for (let i = 0; i < snake.tail.length; i++) {
            if (equalPosition(position, snake.tail[i])) {
                return false;
            }
        }
        return !equalPosition(position, snake.position);
    }

    isNotVisited (position) {
        for (let i = 0; i < this.visited.length; i++) {
            if (equalPosition(position, this.visited[i].position)) {
                return false;
            }
        }
        return true;
    }

    queueInsert (node) {
        if (this.queue.length == 0) {
            this.queue = [node];
            return;
        }
        for (let i = 0; i < this.queue.length; i++) {
            if (node.cost() <= this.queue[i].cost()) {
                this.queue.splice(i, 0, node);
                return;
            } 
        }
    }

    backtrackingPath (node) {
        if (node.parent == null) {
            return;
        }
        this.path.push(node);
        this.backtrackingPath(node.parent);
    }

    nextDirection (snake) {
        if (this.path.length > 0) {
            let nextNode = this.path.pop();
            return nextNode.position.sub(snake.position);
        }
        return false;
    }

    hasPath () {
        return (this.path.length > 0);
    }

    show () {
        fill(0, 0, 255, 40);
        this.path.forEach((n) => drawPosition(n.position));
    }
}