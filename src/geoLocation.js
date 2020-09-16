var x = document.getElementById("demo");
function getLocation(type = 'current') {
    if (type == 'current' && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else if (type == 'watch' && navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}