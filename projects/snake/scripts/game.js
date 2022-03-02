const GRID = 30;
const GRID_COLS = 20;
const GRID_ROWS = 13;
const AUTOPILOT_ON = true;

let snake, food, autopilot;
let UP, DOWN, LEFT, RIGHT;

// initialize canvas and game elements
function setup () {
    createCanvas(GRID_COLS * GRID, GRID_ROWS * GRID);
    frameRate(10);  
    stroke(255);

    UP = createVector(0, -1);
    DOWN = createVector(0, 1);
    LEFT = createVector(-1, 0);
    RIGHT = createVector(1, 0);

    snake = new Snake();
    snake.reset();

    food = new Food();
    food.pickLocation();

    autopilot = new Autopilot();
    autopilot.reset();
    autopilotOn = true;
}

// game loop
function draw () {
    background(255);

    if (AUTOPILOT_ON) {
        if (!autopilot.hasPath()) {
            autopilot.searchPath(snake, food);
        }
        snake.steer(autopilot.nextDirection(snake));
        autopilot.show();
    }

    snake.update();
    snake.show();
    
    if (snake.checkForEat(food)) {
        snake.tailLength++;
        food.pickLocation();
        autopilot.searchPath(snake, food);
    }

    food.show();
}

// controls
const KeyMapping = {
    'ArrowUp': () => snake.steer(UP),
    'ArrowDown': () => snake.steer(DOWN),
    'ArrowLeft': () => snake.steer(LEFT),
    'ArrowRight': () => snake.steer(RIGHT),
    '+': () => snake.tailLength++,
    '-': () => snake.tailLength--
};

function keyPressed () {
    let fn = KeyMapping[key];
    if (fn) fn();
}

// utility functions
function drawPosition (v) {
    return rect(v.x * GRID, v.y * GRID, GRID, GRID);
}

function clampPosition (v) {
    v.x = (v.x + GRID_COLS) % GRID_COLS;
    v.y = (v.y + GRID_ROWS) % GRID_ROWS;
    return v;
}

function equalPosition (v1, v2) {
    return (p5.Vector.dist(v1, v2) < 0.1);
}
