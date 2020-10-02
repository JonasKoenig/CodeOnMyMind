float ACCELLERATION = 1.015;
boolean moving = true;

int timer;
int newDot = 0;
Dot[] dots = new Dot[1024];

void setup() {
  fullScreen();
  // size(800,600);
  noStroke();
  noCursor();
  background(15);
}

void draw() {
  fill(0, 0, 0, 20); // determines fade
  rect(0, 0, width, height);
  updateDots();
  drawDots();

  // once per .5 seconds
  if (millis() - timer >= 1) {
    generateDot();
    timer = millis();
  }
}

void generateDot() {
  if (!moving) return;
  Dot d = new Dot();
  d.x = width/2 + random(-1, 1)*320;
  d.y = height/2 + random(-1, 1)*180;
  d.velocity = ACCELLERATION; // random(25, 60)/60;
  d.radius = random(5, 8);
  d.fill = color(255, 255, 255, 0);

  dots[newDot] = d;
  newDot = (newDot+1) % dots.length;
}

void updateDots() {
  if (!moving) return;
  for (int i = 0; i < dots.length; i++) {
    if (dots[i] != null) {
      dots[i].x = (dots[i].x - width/2) * dots[i].velocity + width/2 + random(-1,1);
      dots[i].y = (dots[i].y - height/2) * dots[i].velocity + height/2 + random(-1,1);
      color old = dots[i].fill;
      dots[i].fill = color(red(old), green(old), blue(old), alpha(old)+1);
      // dots[i].velocity = ACCELLERATION;
      if (moving) dots[i].radius *= 1.005;
    }
  }
}

void drawDots() {
  for (int i = 0; i < dots.length; i++) {
    if (dots[i] != null) {
      fill(dots[i].fill);
      ellipse(dots[i].x, dots[i].y, dots[i].radius, dots[i].radius);
    }
  }
}

void mousePressed() {

}

void keyPressed() {
  if (key == 's') {
    moving = !moving;
  } else if (key == 'r') {
    background(15);
    moving = true;
    for (int i = 0; i < dots.length; i++) {
      dots[i] = null;
    }
  }
}

class Dot {
  float x;
  float y;
  float velocity;
  float radius;
  color fill;
}
