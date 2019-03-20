// see also: https://www.w3schools.com/howto/howto_js_accordion.asp

// execute on load
// add event listeners to all accordion buttons
var button = document.getElementsByClassName("accordionButton");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
