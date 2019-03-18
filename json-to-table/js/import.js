var table = document.getElementById("list");
var filterSelector = document.getElementById("filterSelector");

function importJSON() {
  sorted = false;

  // gather columns from JSON keys
  var columns = [];
  for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
      if (columns.indexOf(key) === -1) {
        columns.push(key);
      }
    }
  }

  // build table
  var newTable = document.createElement("tbody");
  var tr = newTable.insertRow();
  filterSelector.innerHTML = "";

  for (var i = 0; i < columns.length; i++) {
    // table header
    var th = document.createElement("th");
    th.onclick = (function(i) {
      return function() {
        sort(i);
      };
    })(i);
    th.innerHTML = columns[i];
    tr.appendChild(th);

    // filter select options
    var option = document.createElement("option");
    option.text = columns[i];
    option.value = i;
    filterSelector.add(option);
  }

  // add data rows
  for (var i = 0; i < data.length; i++) {
    tr = newTable.insertRow(-1);
    for (var j = 0; j < columns.length; j++) {
      tr.insertCell(-1).innerHTML = data[i][columns[j]] || "[undefined]";
    }
  }

  table.innerHTML = "";
  table.appendChild(newTable);
}
