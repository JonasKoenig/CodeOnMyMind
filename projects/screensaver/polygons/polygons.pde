int radius = 70;

void setup() {
  // fullScreen();
  size(800,600);
}

void draw() {
  // background(0);
  for (int i = 0; i < width/radius; i++) {
    polygon(width/2, height/2, radius*i, 7);
  }
  
  noFill();
  
  if ((frameCount / radius) % 2 == 0) { 
    stroke(0);
  } else {
    stroke(255);
  }
}

void polygon(int x, int y, int radius, int verteces) {
  float angle = TWO_PI / verteces;
  radius = (radius+frameCount/3)%width;
  beginShape();
  for (float a = 0; a < TWO_PI; a += angle) {
    float sx = x + sin(a) * radius;
    float sy = y - cos(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
