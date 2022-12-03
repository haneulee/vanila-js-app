const weather = document.querySelector("#weather p:last-child");
const city = document.querySelector("#weather p:first-child");
const API_KEY = "63c3e210062f9fb0bcfbbc75395d33d9";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = "🏠 You're in " + data.name;
      weather.innerText = `🌦 ${data.weather[0].main}, ${data.main.temp}°`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
