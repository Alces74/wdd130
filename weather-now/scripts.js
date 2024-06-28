async function displayWeather() {
    const city = document.getElementById('city').value;
    const weatherResult = document.getElementById('weatherResult');
    const apiKey = '1fef38ee9ba0bdb2575d35d5ecf20418';  // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key

    if (city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`City not found: ${errorData.message}`);
            }

            const weatherData = await response.json();

            const temperature = `${weatherData.main.temp}°F`;
            const description = weatherData.weather[0].description;
            const humidity = `${weatherData.main.humidity}%`;
            const windSpeed = `${weatherData.wind.speed} mph`;

            weatherResult.innerHTML = `
                <h3>Weather in ${city}</h3>
                <p>Temperature: ${temperature}</p>
                <p>Description: ${description}</p>
                <p>Humidity: ${humidity}</p>
                <p>Wind Speed: ${windSpeed}</p>
            `;
        } catch (error) {
            weatherResult.innerHTML = `<p>${error.message}</p>`;
            console.error(error);  // Log the full error to the console
        }
    } else {
        weatherResult.innerHTML = `<p>Please enter a city name</p>`;
    }
}
