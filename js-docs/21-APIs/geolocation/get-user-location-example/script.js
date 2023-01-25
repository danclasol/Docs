function geoFindMe() {
  const status = document.getElementById("status");
  const geoData = document.getElementById("geoData");
  const mapLink = document.getElementById("map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.textContent = "Open localtion on Google maps";
    mapLink.href = `https://www.google.com/maps/place/${latitude}+${longitude}`;
    geoData.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.getElementById("find-me").addEventListener("click", geoFindMe);
