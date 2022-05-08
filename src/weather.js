const API_KEY = "82c8310f4f6db262c2923d16ddbd89f2";

function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const weatherIconCode = data.weather[0].icon;
      const weatherIcon = document.getElementById("weather-icon");
      weatherIcon.src = `img/icons/${weatherIconCode}.png`;
      city.innerText = data.sys.country;
      weather.innerText = data.weather[0].main;
    });
}

function geoError() {}
navigator.geolocation.getCurrentPosition(geoOk, geoError);
