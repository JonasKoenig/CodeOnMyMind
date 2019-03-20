// see also: https://www.w3schools.com/howto/howto_js_sort_table.asp

var table = document.getElementById("list");
var rows = table.rows;
var sorted;

function sort(n) {
  (n == sorted) ? reverse() : bubbleSort(n);
}

function reverse() {
  var newTable = document.createElement('tbody');

  newTable.appendChild(rows[0]);
  for (var i = rows.length - 1; i >= 0; i--) {
    newTable.appendChild(rows[i]);
  }

  table.replaceChild(newTable, table.tBodies[0]);
}

function bubbleSort(n) {
  var current, next;
  var dirty = true;

  while (dirty) {
    dirty = false;
    current = rows[1].getElementsByTagName("td")[n].innerHTML.toLowerCase();

    for (var i = 1; i < rows.length - 1; i++) {
      next = rows[i + 1].getElementsByTagName("td")[n].innerHTML.toLowerCase();

      if (current > next) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        dirty = true;
      }
      current = next;
    }
  }
  sorted = n;
}
