// see also: https://www.w3schools.com/howto/howto_js_filter_table.asp

// called when modifying the input string
function updateFilter() {
  var string = document.getElementById("filterString").value.toUpperCase();
  var column = document.getElementById("filterSelector").value;
  applyFilter(string, column);
}

// worker: compare all rows to given string
function applyFilter(string, column) {
  var rows = document.getElementById("list").getElementsByTagName("tr");
  var row, rowText;

  for (var i = 0; i < rows.length; i++) {
    row = rows[i].getElementsByTagName("td")[column];
    if (row) {
      rowText = row.textContent || row.innerText;
      rows[i].style.display = (rowText.toUpperCase().indexOf(string) > -1) ? "" : "none";
    }
  }
}
