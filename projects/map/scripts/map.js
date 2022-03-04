const PARTICLE_COUNT = 20;
const PARTICLE_MAX_SIZE = 22;
const PARTICLE_MIN_SIZE = 2;

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
  co2Data = loadTable('data/co2.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  worldMap = mappa.tileMap(mappaOptions);
  worldMap.overlay(canvas);
  worldMap.onChange(createParticleSystems);

  minScale = sqrt(min(co2Data.getColumn('co2')));
  maxScale = sqrt(max(co2Data.getColumn('co2')));

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

    let size = map(sqrt(row.co2), minScale, maxScale, PARTICLE_MIN_SIZE, PARTICLE_MAX_SIZE) * worldMap.zoom();
    let position = worldMap.latLngToPixel(row.lat, row.lng);
    position = createVector(position.x, position.y);

    sys = new ParticleEmitter(size, position, PARTICLE_COUNT, row.country, row.co2);
    particleSystems.push(sys);
  }
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

  for (let i = 0; i < co2Data.rows.length; i++) {
    let row = co2Data.rows[i].obj;
    minScale = min(minScale, row.co2);
    maxScale = max(maxScale, row.co2);

    position = worldMap.latLngToPixel(row.lat, row.lng);
    size = map(sqrt(row.co2), minScale, maxScale, 1, 30) * pow(2, worldMap.zoom());
    particleSystems[i] = new ParticleEmitter(position);
  }

  minScale = sqrt(minScale);
  maxScale = sqrt(maxScale);
}
