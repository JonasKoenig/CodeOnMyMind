// scale parameters
int low1 = 0;
float value1;
int high1 = 10;
int low2 = 1;
float value2;
int high2 = 5;

// layout
int SLIDER_HALF_WIDTH = 100;
int CENTER1;
int CENTER2;
int MARGIN;

Slider slider = new Slider();

void setup() {
  size(500, 50);
  surface.setResizable(true);
  textSize(18);
  textAlign(CENTER);
  slider.display();
}


void draw() {
  background(255);  
  CENTER1 = width/4;
  CENTER2 = 3*width/4;
  MARGIN = CENTER1-SLIDER_HALF_WIDTH;
  line(width/2, 20, width/2, height-20);

  // static labels
  fill(000);
  text("Score", CENTER1, height/2-20);
  text(low1, CENTER1-SLIDER_HALF_WIDTH, height/2+28);
  text(high1, CENTER1+SLIDER_HALF_WIDTH, height/2+28);
  
  text("Stars", CENTER2, height/2-20);
  text(low2, CENTER2-SLIDER_HALF_WIDTH, height/2+28);
  text(high2, CENTER2+SLIDER_HALF_WIDTH, height/2+28);
  
  
  // dynamic slider
  stroke(000);
  fill(255);
  rectMode(CENTER);
  rect(CENTER1, height/2, 2*SLIDER_HALF_WIDTH, 20);
  rect(CENTER2, height/2, 2*SLIDER_HALF_WIDTH, 20);
  slider.display();
}

class Slider {
  float x = 0;

  void slide() {
    x = mouseX;
    if (x > width/2) x -= width/2;
    x = constrain(x, CENTER1-SLIDER_HALF_WIDTH, CENTER1+SLIDER_HALF_WIDTH);
    
    // Inverse Lerp
    x = map(x, CENTER1-SLIDER_HALF_WIDTH, CENTER1+SLIDER_HALF_WIDTH, 0, 1);
    
    // Lerp
    value1 = round(10*map(x, 0, 1, low1, high1))/10f;
    value2 = round(map(x, 0, 1, low2, high2));
  }

  void display() {
    rectMode(CORNER);
    fill(000);
    rect(CENTER1-SLIDER_HALF_WIDTH, height/2-10, x*2*SLIDER_HALF_WIDTH, 20);
    text(value1+"", CENTER1, height/2+28);
    rect(CENTER2-SLIDER_HALF_WIDTH, height/2-10, x*2*SLIDER_HALF_WIDTH, 20);
    text((int)value2, CENTER2, height/2+28);
  }
}

void mouseDragged() {
  slider.slide();
}

void mousePressed() {
  slider.slide();
  println(slider.x);
}