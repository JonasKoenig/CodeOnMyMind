// inputs
var inputPicker = document.getElementById("colorPicker");
var inputHex = document.getElementById("colorHex");
var inputR = document.getElementById("colorR");
var inputG = document.getElementById("colorG");
var inputB = document.getElementById("colorB");

// outputs
var outputs = document.getElementsByClassName("code");

// input onchange functions

function hexOnChange(trigger) {
  var c = rgbToHex(hexToRgb(trigger.value).r, hexToRgb(trigger.value).g, hexToRgb(trigger.value).b)
  updateAllOutputs(c);
}

function componentOnChange(trigger) {
  var c = rgbToHex(inputR.value, inputG.value, inputB.value);
  updateAllOutputs(c);
}

function updateAllOutputs(c) {
  for (var i = 0; i < outputs.length; i++) {
    outputs[i].value = hexToCode(c.toUpperCase(), outputs[i].id);
  }
}

// conversion functions

function hexToCode(c, id) {
  var r = hexToRgb(c).r;
  var g = hexToRgb(c).g;
  var b = hexToRgb(c).b;
  switch (id) {
    case "colorR":
      return r;
    case "colorG":
      return g;
    case "colorB":
      return b;
    case "css-rgb":
      return "rgb(" + r + "," + g + "," + b + ")";
    case "python":
      return "c = '" + c + "'";
    case "latex-rgb":
      return "\\definecolor{name}{rgb}{" + Math.round(r / .255) / 1000 + "," + Math.round(g / .255) / 1000 + "," + Math.round(b / .255) / 1000 + "}";
    case "latex-RGB":
      return "\\definecolor{name}{RGB}{" + r + "," + g + "," + b + "}";
    case "latex-html":
      return "\\definecolor{name}{HTML}{" + c.slice(1) + "}";
    case "processing-hex":
      return "color c = " + c + ";"
    case "processing-rgb":
      return "color c = color(" + r + "," + g + "," + b + ");"
    default:
      return c;
  }
}

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function componentToHex(c) {
  var hex = parseInt(c).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
