float SPEED_MIN = 2;
float SPEED_MAX = 50;
float ORBIT_MIN = 0.2;
float ORBIT_MAX = 6;
float SIZE_MIN = 0.5;
float SIZE_MAX = 4;
float MOUSEOVER_MARGIN = 10;
float INIT_ANIMATION = 2;
float init;

Planet neptune;
Planet uranus;
Planet saturn;
Planet jupiter;
Planet mars;
Planet earth;
Planet venus;
Planet mercury;

PImage img_neptune;
PImage img_uranus;
PImage img_saturn;
PImage img_jupiter;
PImage img_mars;
PImage img_earth;
PImage img_venus;
PImage img_mercury;
PImage img_sun;

class Planet {

  String name;
  float orbit_diameter;
  float orbit_position;
  float orbit_speed;
  float planet_diameter;
  float planet_gravity;
  color planet_color;
  boolean mouseover;
  PImage img;


  // constructor
  Planet (String name, float orbit_diameter, float orbit_duration, float planet_diameter, float planet_gravity, color planet_color, PImage img) {
    this.name = name;
    this.orbit_diameter = orbit_diameter;
    this.orbit_position = 0;
    this.orbit_speed = 1/orbit_duration;
    this.planet_diameter = planet_diameter;
    this.planet_gravity = planet_gravity;
    this.planet_color = planet_color;
    this.mouseover = false;
    this.img = img;
  }

  // mouseover event
  void mouseover() {
    float pyt = abs(sqrt(pow((mouseX - width/2), 2) + pow((mouseY - height/2), 2)) - (orbit_diameter/(2*slider.orbit())));
    if (pyt <= MOUSEOVER_MARGIN  && init <= 0) /*println("Mouseover"+this.name);*/mouseover = true;
    else mouseover = false;
  }

  // display label
  void label() {
    int size_x = 350;
    int size_y = 100;
    int box_x = width - size_x - 50;
    int box_y = height- size_y - 50;
    int margin = 18;
    int text_y = box_y+30;

    stroke(50);
    fill(000);
    rect(box_x, box_y, size_x, size_y);
    fill(255);
    text(name, box_x+margin, text_y);
    text_y += margin;
    text("Orbit: "+(float)((int)(100*(orbit_diameter*Math.PI)))/100+"M km", box_x+margin, text_y);
    text_y += margin;
    text("Gravity: "+planet_gravity+" m/s²", box_x+margin, text_y);
    text_y += margin;
    text("Diameter: "+(int)(1000*planet_diameter)+" km", box_x+margin, text_y);

    image(img, box_x+size_x-100, box_y+size_y-99, 98, 98);
  }

  // display orbit + planet
  void display() {
    ellipseMode(CENTER);
    mouseover();

    // planet coordinates
    float x = width/2 + (orbit_diameter/2 * sin(orbit_position))/slider.orbit();
    float y = height/2 - (orbit_diameter/2 * cos(orbit_position))/slider.orbit();

    // Orbit
    if (mouseover) {
      stroke(255);
      line(width/2, height/2, x, y);
    } else {
      stroke(50);
    }
    noFill();
    ellipse(width/2, height/2, orbit_diameter/slider.orbit(), orbit_diameter/slider.orbit());

    // Planet
    noStroke();
    fill(planet_color);
    ellipse(x, y, planet_diameter/slider.size(), planet_diameter/slider.size());
    if (mouseover) {
      label();
    }
  }

  void animate() {
    orbit_position = ((orbit_position + orbit_speed*slider.speed())%360);
    this.display();
  }
}

void sun() {
  int diameter = 30;
  fill(249, 179, 2);
  noStroke();
  ellipse(width/2, height/2, diameter, diameter);

  // mouseover
  if ((abs(width/2 - mouseX) < diameter/2) && (abs(height/2 - mouseY) < diameter/2) && init <= 0) {
    int size_x = 350;
    int size_y = 100;
    int box_x = width - size_x - 50;
    int box_y = height- size_y - 50;
    int margin = 18;
    int text_y = box_y+30;

    stroke(50);
    fill(000);
    rect(box_x, box_y, size_x, size_y);
    fill(255);
    text("Sun", box_x+margin, text_y);
    text_y += margin;
    text("Orbit: -", box_x+margin, text_y);
    text_y += margin;
    text("Gravity: "+274+" m/s²", box_x+margin, text_y);
    text_y += margin;
    text("Diameter: "+1392684+" km", box_x+margin, text_y);

    image(img_sun, box_x+size_x-100, box_y+size_y-99, 98, 98);
  }
}

Slider slider = new Slider();

void setup() {
  size(1200, 800);
  surface.setResizable(true);
  background(000);
  textSize(18);
  fill(255);
  text("Loading...", width/2-50, height/2);

  init = INIT_ANIMATION * 60; // 60 fps

  // images
  img_neptune = loadImage("data/neptune.jpg");
  img_uranus = loadImage("data/uranus.jpg");
  img_saturn = loadImage("data/saturn.jpg");
  img_jupiter = loadImage("data/jupiter.jpg");
  img_mars = loadImage("data/mars.jpg");
  img_earth = loadImage("data/earth.jpg");
  img_venus = loadImage("data/venus.jpg");
  img_mercury = loadImage("data/mercury.jpg");
  img_sun = loadImage("data/sun.jpg");

  // initialize
  mercury = new Planet("Mercury", 58.9, 88, 4.879, 3.7, color(158, 154, 151), img_mercury);
  venus = new Planet("Venus", 108.16, 225, 12.103, 8.87, color(163, 86, 35), img_venus);
  earth = new Planet("Earth", 149.6, 365, 12.756, 9.81, color(46, 112, 173), img_earth);
  mars = new Planet("Mars", 228, 687, 6.792, 3.69, color(206, 174, 101), img_mars);
  jupiter = new Planet("Jupiter", 788.36, 4330, 142.984, 24.79, color(193, 176, 135), img_jupiter);
  saturn = new Planet("Saturn", 1433.5, 10751, 120.536, 10.44, color(232, 230, 178), img_saturn);
  uranus = new Planet("Uranus", 2872.4, 30664, 51.118, 8.87, color(192, 229, 228), img_uranus);
  neptune = new Planet("Neptune", 4498.4, 60148, 49.528, 11.15, color(20, 93, 209), img_neptune);
}

void draw() {
  background(000);
  if (width < 600 || height < 600) {
    fill(255);
    text("Please enlarge window", width/2-100, height/2);
    return;
  }

  neptune.animate();
  uranus.animate();
  saturn.animate();
  jupiter.animate();
  mars.animate();
  earth.animate();
  venus.animate();
  mercury.animate();

  sun();

  // slider
  stroke(255);
  fill(000);
  line(50, 200, 50, height-200);
  slider.display();

  if (init > 0) {
    slider.set_y(slider.y-(int)(600/(INIT_ANIMATION*60)));
    init--;
  }
}

void mouseDragged() {
  slider.slide();
}

void mousePressed() {
  slider.slide();
}

void mouseWheel(MouseEvent event) {
  float e = event.getCount();
  slider.set_y((int)(slider.y+20*e));
}

class Slider {
  // y: 200 - 600
  int y = 600;

  void set_y(int x) {
    if (x < 200) {
      slider.y = 200;
    } else if (x <= height-200) {
      slider.y = x;
    } else {
      slider.y = height-200;
    }
  }

  void slide() {
    if (30 <= mouseX && mouseX <= 70 && 180 <= mouseY && mouseY <= height-180) {
      set_y(mouseY);
    }
  }

  void display() {
    ellipse(50, y, 30, 30);
  }

  float scale(float slider, float slider_max, float slider_min, float x_max, float x_min) {
    return ((slider - slider_min) / (slider_max - slider_min)) * (x_max - x_min) + x_min;
  }

  float orbit() {
    return scale(y, 600, 200, ORBIT_MAX, ORBIT_MIN);
  }

  float speed() {
    return scale(y, 600, 200, SPEED_MAX, SPEED_MIN);
  }

  float size() {
    return scale(y, 600, 200, SIZE_MAX, SIZE_MIN);
  }
}
