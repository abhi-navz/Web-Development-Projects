const apiKey = "399bf2a559eef8792faf6bcbebd0a960"; // Replace with your actual API key
const weatherEndpoint = "https://api.openweathermap.org/data/2.5/weather";

function getWeather() {
  const locationInput = document.getElementById("locationInput");
  const location = locationInput.value.trim();

  if (location === "") {
    alert("Please enter a location.");
    return;
  }

  fetch(`${weatherEndpoint}?q=${location}&appid=${apiKey}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherInfo = document.getElementById("weatherInfo");

      // Clear previous weather info
      weatherInfo.innerHTML = "";

      if (data.cod === "404") {
        weatherInfo.innerHTML = `<p>No weather information found for "${data.message}".</p>`;
      } else {
        const locationName = data.name;
        const countryName = data.sys.country;
        const longitude = data.coord.lon;
        const latitude = data.coord.lat;
        const weatherMain = data.weather[0].main;
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const feelsLike = data.main.feels_like;
        const maxTemp = data.main.temp_max;
        const minTemp = data.main.temp_min;
        const sunriseTimeStamp = data.sys.sunrise;
        const sunriseTime = new Date(
          sunriseTimeStamp * 1000
        ).toLocaleTimeString();
        const sunsetTimeStamp = data.sys.sunset;
        const sunsetTime = new Date(
          sunsetTimeStamp * 1000
        ).toLocaleTimeString();

        // Update weather info on the page
        weatherInfo.innerHTML = `
            <h2>${locationName} ${countryName}</h2>
            <p><strong>Cordinates: </strong>Lon:${longitude}, Lat:${latitude}</p>
            <p><strong>Weather:</strong> ${weatherMain}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Temperature:</strong> ${temperature} °C</p>
            <p><strong>Feels like:</strong> ${feelsLike} °C</p>
            <p><strong>Max Temperature:</strong> ${maxTemp} °C</p>
            <p><strong>Min Temperature:</strong> ${minTemp} °C</p>
            <p><strong>Humidity:</strong> ${humidity} %</p>
            <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
            <p><strong>Sunrise Time:</strong> ${sunriseTime} </p>
            <p><strong>Sunset Time:</strong> ${sunsetTime} </p>
          `;
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
