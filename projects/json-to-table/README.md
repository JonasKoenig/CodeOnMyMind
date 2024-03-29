[⭠ Back to main page](https://github.com/JonasKoenig/CodeOnMyMind) &nbsp;
[⭳ Download](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2FJonasKoenig%2FCodeOnMyMind%2Ftree%2Fmaster%2Fprojects%2Fjson-to-table)

# JSON to table

In this project I attempted to make JSON files more readable by converting them to a table with sorting and filtering.

JSON is short for _JavaScript Object Notation_. Its data structure is a dictionary. That is to say, data in a JSON file consists of objects, which in turn are made of `"key": <value>`-pairs. The key is a name for the value that is to come and the value is one the following:

- boolean: `true` or `false`
- number: a combination of the digits `0-9` and a decimal point or a sign for negative values
- string: text or a sequence of unicode characters encapsuled by double quotation marks `"..."`
- object: this allows for _nesting_ - an object within an object
- empty value: `null`

_Note:_ I hope I didn't just insult your intelligence by explaining what a number is :)

## What does it do?

![table with sorting and filtering](./table.gif)

### 1. Import

The 'Import File' Button loads whatever JSON object is in the `data.json` file (in this case a list of Star Wars movies, because Star Wars is always a safe bank for computer scientists). First all keys are extracted and translated to columns. Then the data is inserted as rows. Omitted fields will result in a value of '[undefined]'.

### 2. Sort

Clicking on a column header, will sort that column. The sorting is done via a simple bubble sort. So if two adjacent values are in the wrong order, they will be swapped. This is done in multiple passes until nothing changes anymore.

```javascript
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
```

### 3. Filter

One can filter the rows by selecting a column and typing a value. Filtering is case insensitive, so "this" is equal to "This". Note the compact syntax of the comparing if-statement: `if-statement ? true-value : false-value`. Shorthands like this help with readability (in my opinion).

```javascript
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
```

## Don't Repeat Yourself
Somewhere along the way this project became a lesson in reusing existing solutions. I took a lot of inspiration from [w3schools](https://www.w3schools.com/). I modified their examples to fit my needs and refactored portions for readability.

- sorting: https://www.w3schools.com/howto/howto_js_sort_table.asp
- filtering: https://www.w3schools.com/howto/howto_js_filter_table.asp
- accordion effect: https://www.w3schools.com/howto/howto_js_accordion.asp

## Outlook
One thing I could improve on is sorting. Right now sorting treats every data type the same. When sorted, all columns are in lexicographical order which does not make too much sense for e.g. roman numerals. A generic sorting algorithm with a compare function as an argument could enable sorting of all kinds of data types.

The JSON to table conversion only works with flat lists. Handling nested dictionaries might be difficult, but a handy enhancement.

[BreedJS](http://jjppof.github.io/breedjs/#about) is a jQuery plugin, which takes care of sorting, filtering and pagination. At first I thought using it might have saved me some time, but would have also prevented me from tinkering and refactoring. Seeing as that is kind of the point of this repository, I am glad I did it myself :)
