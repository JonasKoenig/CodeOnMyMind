let snake, food, isAutoPilot;
let UP, DOWN, LEFT, RIGHT;

const GRID_DIM_X = 25;
const GRID_DIM_Y = 15;
const GRID_SCALE = 30;
const vectorEquals = (a,b) => p5.Vector.dist(a, b) < .1;

function setup () {
    createCanvas(GRID_DIM_X * GRID_SCALE, GRID_DIM_Y * GRID_SCALE);
    frameRate(10);
    stroke(38, 34, 22);
    strokeWeight(5);
    ellipseMode(CORNER);

    UP =    createVector(0, -GRID_SCALE);
    DOWN =  createVector(0, GRID_SCALE);
    LEFT =  createVector(-GRID_SCALE, 0);
    RIGHT = createVector(GRID_SCALE, 0);

    snake = new Snake();
    food = new Food();

    isAutoPilot = true;
    let a = new AStar(createVector(0,0), createVector(GRID_SCALE,GRID_SCALE), [DOWN]);
    console.log(a.navigate());
}

// game loop
function draw () {
    background(242, 242, 242);

    snake.update();
    snake.checkForDeath();
    snake.show();
    
    snake.checkForEat(food);
    food.show();
}

// controls
function keyPressed () {
    if (key == '+') {
        snake.targetLength++;
    } else if (key == 'a') {
        isAutoPilot = !isAutoPilot;
    } else if (keyCode == UP_ARROW) {
        snake.steer(UP);
    } else if (keyCode == DOWN_ARROW) {
        snake.steer(DOWN);
    } else if (keyCode == LEFT_ARROW) {
        snake.steer(LEFT);
    } else if (keyCode == RIGHT_ARROW) {
        snake.steer(RIGHT);
    }
}


