class Node {
    position;
    parent;
    distFromStart;
    distToGoal;

    constructor(position, parent, goal) {
        this.position = position;
        this.parent = parent;
        this.distFromStart = this.startDistance(parent);
        this.distToGoal = this.manhattanDistance(goal);
    }

    startDistance (parent) {
        if (parent == null) {
            return 0;
        }
        return parent.distFromStart + 1;
    }

    manhattanDistance (otherPosition) {
        let x = abs(this.position.x - otherPosition.x);
        let y = abs(this.position.y - otherPosition.y);
        return (x + y);
    }

    cost () {
        return this.distFromStart + this.distToGoal;
    }
    
}