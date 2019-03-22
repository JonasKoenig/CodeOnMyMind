var outputs = document.getElementsByClassName("code");

for (var i = 5; i < outputs.length; i++) {
  var button = document.createElement("button");
  button.innerHTML = "Copy";
  button.onclick = (function(i) {
    return function() {
      copyToClipboard(outputs[i].id);
    };
  })(i);
  outputs[i].insertAdjacentElement("afterend", button);
}

function copyToClipboard(id) {
  var copyText = document.getElementById(id);
  copyText.select();
  document.execCommand("copy");
}
