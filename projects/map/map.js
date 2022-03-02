let mappa = new Mappa('Leaflet');
let mappaOptions = {
  lat: 0,
  lng: 0,
  zoom: 2,
  zoomSnap: 0.25,
  zoomDelta: 0.25,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
}

// Define map elements
let co2Map;
let canvas;
let tooltip;
let co2Table;

let minScale = 100000
let maxScale = 0;

let systems = [];

function preload() {
  co2Table = loadTable('data/co2.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  tooltip = document.getElementById("tooltip");

  co2Map = mappa.tileMap(mappaOptions);
  co2Map.overlay(canvas);

  // Redraw co2 data overlay when map changes
  co2Map.onChange(resetParticleSystems);

  for (row of co2Table.rows) {
    minScale = min(minScale, row.obj.co2);
    maxScale = max(maxScale, row.obj.co2);
  }
  minScale = sqrt(minScale);
  maxScale = sqrt(maxScale);

  // createParticleSystems();
}

function draw() {
  clear();
  animateParticleSystems();
}

function createParticleSystems() {
  for (let i = 0; i < co2Table.rows.length; i++) {
    let row = co2Table.rows[i].obj;
    let position = co2Map.latLngToPixel(row.lat, row.lng);

    size = map(sqrt(co2Table.rows[i].obj.co2), minScale, maxScale, 2, 25);// * pow(2, co2Map.zoom());
    sys = new ParticleSystem(createVector(position.x, position.y), size);
    systems.push(sys);
  }
}

function animateParticleSystems() {
  for (let i = 0; i < systems.length; i++) {
    if (systems[i] instanceof ParticleSystem) {
      systems[i].addParticle();
      systems[i].run();
    }
  }
}

function resetParticleSystems() {
  systems = [];
  createParticleSystems();
}









//
function drawClouds() {
  clear();
  // for (row of co2Table.rows) {
  //   if (co2Map.map.getBounds().contains({lat: row.obj.lat, lng: row.obj.lng})) {
  //     drawCloud(row.obj);
  //   }
  // }

  minScale = Infinity;
  maxScale = 0;

  for (let i = 0; i < co2Table.rows.length; i++) {
    let row = co2Table.rows[i].obj;
    minScale = min(minScale, row.co2);
    maxScale = max(maxScale, row.co2);


    position = co2Map.latLngToPixel(row.lat, row.lng);
    size = map(sqrt(row.co2), minScale, maxScale, 1, 30) * pow(2, co2Map.zoom());
    systems[i] = new ParticleSystem(position);
  }

  minScale = sqrt(minScale);
  maxScale = sqrt(maxScale);
}

// //
// function drawCloud(c) {
//   pos = co2Map.latLngToPixel(c.lat, c.lng);
//   size = map(sqrt(c.co2), minScale, maxScale, 1, 30) * pow(2, co2Map.zoom());
//   return pos
// }
