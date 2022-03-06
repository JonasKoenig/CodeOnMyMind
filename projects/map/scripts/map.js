const PARTICLE_COUNT = 20;
const PARTICLE_MAX_SIZE = 22;
const PARTICLE_MIN_SIZE = 2;

const YEAR = 2020;

let mappa = new Mappa('Leaflet');
let mappaOptions = {
  lat: 0,
  lng: 0,
  zoom: 2,
  zoomSnap: 1,
  zoomDelta: 1,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
}

let worldMap, canvas, tooltip, co2Data, minScale, maxScale, particleSystems;

function preload() {
  co2Data = loadTable('data/co2-countries.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  worldMap = mappa.tileMap(mappaOptions);
  worldMap.overlay(canvas);
  worldMap.onChange(createParticleSystems);

  minScale = sqrt(min(co2Data.getColumn('co2')));
  maxScale = sqrt(max(co2Data.getColumn('co2')));

  frameRate(30);
  noStroke();
  createParticleSystems();
}

function draw() {
  clear();

  for (let i = 0; i < particleSystems.length; i++) {
    particleSystems[i].animate();
  }
}

function createParticleSystems() {
  particleSystems = [];
  for (let i = 0; i < co2Data.rows.length; i++) {
    let row = co2Data.rows[i].obj;

    let coordinates = worldMap.latLngToPixel(row.lat, row.lng);

    if (clipping(coordinates)) continue;

    let size = map(sqrt(row.co2), minScale, maxScale, PARTICLE_MIN_SIZE, PARTICLE_MAX_SIZE) * worldMap.zoom();
    let position = createVector(coordinates.x, coordinates.y);

    sys = new ParticleEmitter(size, position, PARTICLE_COUNT, i);
    particleSystems.push(sys);
  }
}

function clipping(pos) {
  return (pos.x <= 0) || (pos.x >= width) || (pos.y <= 0) || (pos.y >= height);
}