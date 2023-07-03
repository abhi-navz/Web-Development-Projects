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
      const weatherInfo = document.getElementById("weatherInfo");

      // Clear previous weather info
      weatherInfo.innerHTML = "";

      if (data.cod === "404") {
        weatherInfo.innerHTML = `<p>No weather information found for "${data.message}".</p>`;
      } else {
        const locationName = data.name;
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        // Update weather info on the page
        weatherInfo.innerHTML = `
            <h2>${locationName}</h2>
            <p><strong>Weather:</strong> ${description}</p>
            <p><strong>Temperature:</strong> ${temperature} °C</p>
            <p><strong>Humidity:</strong> ${humidity} %</p>
            <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
          `;
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
