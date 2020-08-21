// Using Mappa library. See: https://mappa.js.org/
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

let minScale = Infinity;
let maxScale = 0;

// Load CO2 data before drawing the map
function preload() {
  co2Table = loadTable('data/co2.csv', 'csv', 'header');
}

// Map setup
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  tooltip = document.getElementById("tooltip");

  co2Map = mappa.tileMap(mappaOptions);
  co2Map.overlay(canvas);

  // Redraw co2 data overlay when map changes
  co2Map.onChange(drawClouds);

  for (row of co2Table.rows) {
    minScale = min(minScale, row.obj.co2);
    maxScale = max(maxScale, row.obj.co2);
  }

  minScale = sqrt(minScale);
  maxScale = sqrt(maxScale);

  fill(127, 100);
  stroke(0, 100);
}

// 
function drawClouds() {
  clear();
  for (row of co2Table.rows) {
    if (co2Map.map.getBounds().contains({lat: row.obj.lat, lng: row.obj.lng})) {
      drawCloud(row.obj);
    }
  }
}

//
function drawCloud(c) {
  pos = co2Map.latLngToPixel(c.lat, c.lng);
  size = map(sqrt(c.co2), minScale, maxScale, 1, 30) * pow(2, co2Map.zoom());
  fill(127, 127);
  ellipse(pos.x, pos.y, size);
}
