class AStar {
    start;
    target;
    obstacles;
    open;
    closed;

    constructor (start, target, obstacles) {
        this.start = new Node(start, undefined, target);
        this.target = target;
        this.obstacles = obstacles;
        this.open = new Set();
        this.closed = new Set();

    }

    navigate () {
        this.open.add(this.start);
        let current = this.start;
        
        while (this.open.size > 0) {

            current = this.fetchNextNode();

            console.log(current);
            console.log(Array.from(this.open));
            console.log(Array.from(this.closed));
            console.log("");

            this.open.delete(current);
            this.closed.add(current);

            if (vectorEquals(current.position, this.target)) {
                console.log('Path has beeen found');
                return;
            } else {
                let neighbors = this.fetchNeighbors(current);
                neighbors = neighbors.filter(this.isTraversable);
                neighbors = neighbors.filter(this.isNotClosed);
                neighbors.forEach(n => {
                    if (this.isOpen(n)) {
                        this.updateOpen(n);
                    } else {
                        this.open.add(n);
                    }
                });
            }
        }
        return false;
    }

    fetchNextNode () {
        // TODO: nodes werden nicht gescheit aus open ausgelesen
        // let minCostNode = this.open[0].cost();
        // console.log(minCostNode);
        // for (let i = 1; i < this.open.size; i++) {
        //     const node = this.open[i];
        //     if (node.cost() < minCostNode.cost()) {
        //         minCostNode = node;
        //     }
        // }

        // Array.from(this.open).forEach( node => {
        //     console.log(node.cost());
        //     if (minCostNode == undefined || node.cost() < minCostNode.cost()) {
        //         minCostNode = node;
        //     }
        // })
        return minCostNode;
    }

    fetchNeighbors (node) {
        return [UP, DOWN, LEFT, RIGHT].map(
            dir => new Node(node.position.copy().add(dir), node, this.target)
        );
    }

    isTraversable = (node) => {
        let matches = this.obstacles.map(o => vectorEquals(o, node.position));
        return !matches.includes(true);
    }

    isNotClosed = (node) => {
        let matches = Array.from(this.closed).map(
            c => vectorEquals(c.position, node.position)
            );
        return !matches.includes(true);
    }

    isOpen (node) {
        let matches = Array.from(this.open).map(
            c => vectorEquals(c.position, node.position)
            );
        return matches.includes(true);
    }

    updateOpen (newNode) {
        Array.from(this.open).forEach( old => {
            if (vectorEquals(old.position, newNode.position)) {
                if (old.distFromStart > newNode.distFromStart) {
                    old.distFromStart = newNode.distFromStart;
                    old.parent = newNode.parent;
                }
                return;
            }
        });
    }

}


class Node {

    constructor (position, parent, target) {
        this.position = position;
        this.parent = parent;
        this.distFromStart = this.startDistance();                  // G-Cost
        this.distToTarget = this.manhattanDistance(target);         // H-Cost
        console.log('new node: ' + this.distFromStart + ', ' + this.distToTarget);
    }
    cost () {// F-Cost
        return this.distFromStart + this.distFromTarget;
    }

    startDistance () {
        if (this.parent == undefined) {
            return 0;
        }
        return this.parent.distFromStart + GRID_SCALE;
    }

    manhattanDistance (otherPosition) {
        let x = abs(this.position.x - otherPosition.x);
        let y = abs(this.position.y - otherPosition.y);
        return x + y;
    }
}