let map;
const mapEl = document.getElementById("map");

function initMap() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    map = new google.maps.Map(mapEl, {
      center: { lat: lat, lng: lon },
      zoom: 10,
      disableDefaultUI: true,
    });

    new google.maps.Marker({
      position: { lat: lat, lng: lon },
      map,
    });
  });
}

window.initMap = initMap;
