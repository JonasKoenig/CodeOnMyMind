const list = document.getElementById("browserData");
const newItem = (name,value) => list.innerHTML += "<tr><td>"+ name +"</td><td>"+ value +"</td></tr>";
const lineBreak = () => list.innerHTML += "<tr><div class='linebreak'></div></tr>";

const prettyBool = bool => {return bool ? "✔️" : "❌"};

function loadData() {
  list.innerHTML = "<tr><th>Feature</th><th>Value</th></tr>";

  lineBreak();

  var ua = detect.parse(navigator.userAgent);
  newItem("Device Type", ua.device.type);
  newItem("Device", ua.device.family);
  newItem("Operating System", ua.os.family);

  lineBreak();

  newItem("Browser", ua.browser.family);
  newItem("Browser Language", (navigator.language).toUpperCase());
  newItem("Browser Size", window.innerWidth +" x "+ window.innerHeight);
  newItem("Screen Resolution", screen.width +" x "+ screen.height);
  newItem("Cookies Enabled", prettyBool(navigator.cookieEnabled));

  lineBreak();

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET"," http://ip.jsontest.com/", false ); // false for synchronous request
  xmlHttp.send( null );
  newItem("IP Address", JSON.parse(xmlHttp.responseText)["ip"]);


}

loadData();
onresize = x => loadData()
