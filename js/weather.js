const apiKey = "139ece229fdd45201556f57939a8d505";

const howsWeather = (lat, lng, key) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
};

const tellWeather = (position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = howsWeather(lat, lng, apiKey);
  const weather = document.getElementById("weather");
  fetch(url)
    .then((response) => response.json())
    .then((res) => {
      weather.innerHTML = `You are in ${res.name}, ${res.sys.country}.<br>The weather is in ${res.weather[0].main} outside.<br>Specifically, ${res.weather[0].description}.`;
    });
  weather.classList.remove(HIDDEN_CLASSNAME);
};

const onGeoError = () => {
  const weather = document.getElementById("weather");
  weather.innerHTML =
    "Couldn't find you. I was just going let you know<br>the weather info around you.😢";
  weather.classList.remove(HIDDEN_CLASSNAME);
};

navigator.geolocation.getCurrentPosition(tellWeather, onGeoError);
