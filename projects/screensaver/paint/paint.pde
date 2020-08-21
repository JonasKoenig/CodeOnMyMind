float ACCELLERATION = 1.012;

int timer;
int newDot = 0;
Dot[] dots = new Dot[1024];

void setup() {
  // fullScreen();
  size(800,600);
  noStroke();
  noCursor();
  background(0);
}

void draw() {
  fill(0, 0, 0, 4); // determines fade
  rect(0, 0, width, height);
  updateDots();
  drawDots();

  // once per .5 seconds
  if (millis() - timer >= 50) {
    generateDot();
    timer = millis();
  }
}

void generateDot() {
  Dot d = new Dot();
  d.x = random(width);
  d.y = random(-50, 50);
  d.velocity = random(15, 40)/60;
  d.radius = random(30, 50);
  d.fill = color(random(255), random(255), random(255), 255);
  // colorMode(HSB,100);
  // d.fill = color(20+random(40), 100, 100);

  dots[newDot] = d;
  newDot = (newDot+1) % dots.length;
}

void updateDots() {
  for (int i = 0; i < dots.length; i++) {
    if (dots[i] != null) {
      dots[i].y += dots[i].velocity;
      color old = dots[i].fill;
      // dots[i].fill = color(red(old), green(old), blue(old), alpha(old)-0.25);
      dots[i].velocity *= ACCELLERATION;
      dots[i].radius *= 1.001;
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
  background(0);
  for (int i = 0; i < dots.length; i++) {
    dots[i] = null;
  }
}

class Dot {
  float x;
  float y;
  float velocity;
  float radius;
  color fill;
}
