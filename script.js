// Static weather data for different cities
const weatherData = {
  Delhi: {
    cloud_pct: 77,
    temp: 33,
    feels_like: 30,
    humidity: 64,
    min_temp: 27,
    max_temp: 38,
    wind_speed: 3,
    wind_degrees: 237,
    sunrise: "6:00 AM",
    sunset: "7:00 PM"
  },
  Seattle: {
    cloud_pct: 80,
    temp: 22,
    feels_like: 20,
    humidity: 70,
    min_temp: 18,
    max_temp: 26,
    wind_speed: 10,
    wind_degrees: 250,
    sunrise: "6:15 AM",
    sunset: "8:45 PM"
  },
  Jamshedpur: {
    cloud_pct: 65,
    temp: 35,
    feels_like: 37,
    humidity: 60,
    min_temp: 28,
    max_temp: 40,
    wind_speed: 5,
    wind_degrees: 200,
    sunrise: "5:45 AM",
    sunset: "6:30 PM"
  }
};

// Function to format city name input (capitalize first letter, rest lowercase)
function formatCityName(city) {
  if (!city) return "";
  return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
}

// Main function to update weather data on the page
const getWeather = (city) => {
  const data = weatherData[city];

  if (!data) {
    alert(`No weather data found for "${city}". Please try Delhi, Seattle, or Jamshedpur.`);
    return;
  }

  document.getElementById('cloud_pct').textContent = `${data.cloud_pct} %`;
  document.getElementById('temp').textContent = `${data.temp} °C`;
  document.getElementById('feels_like').textContent = `${data.feels_like} °C`;
  document.getElementById('humidity').textContent = `${data.humidity} %`;
  document.getElementById('min_temp').textContent = `${data.min_temp} °C`;
  document.getElementById('max_temp').textContent = `${data.max_temp} °C`;
  document.getElementById('wind_speed').textContent = `${data.wind_speed} km/h`;
  document.getElementById('wind_degrees').textContent = `${data.wind_degrees}°`;
  document.getElementById('sunrise').textContent = data.sunrise;
  document.getElementById('sunset').textContent = data.sunset;

  document.querySelector("h1").textContent = `Weather For ${city}`;
};

// Wait until DOM loads, then setup the default and form handler
document.addEventListener("DOMContentLoaded", () => {
  // Show Delhi weather by default
  getWeather("Delhi");

  // Grab the form element (assuming your form has role="search")
  const form = document.querySelector("form[role='search']");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload on form submit

    // Get the input value and format it
    const inputCity = document.getElementById("city").value;
    const city = formatCityName(inputCity);

    // Call getWeather for the searched city
    getWeather(city);
  });
});
