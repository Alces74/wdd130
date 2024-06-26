async function displayWeather() {
    const city = document.getElementById('city').value;
    const weatherResult = document.getElementById('weatherResult');
    const apiKey = '1fef38ee9ba0bdb2575d35d5ecf20418';

    if (city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('City not found');
            }

            const weatherData = await response.json();

            const temperature = `${weatherData.main.temp}°C`;
            const description = weatherData.weather[0].description;
            const humidity = `${weatherData.main.humidity}%`;
            const windSpeed = `${weatherData.wind.speed} m/s`;

            weatherResult.innerHTML = `
                <h3>Weather in ${city}</h3>
                <p>Temperature: ${temperature}</p>
                <p>Description: ${description}</p>
                <p>Humidity: ${humidity}</p>
                <p>Wind Speed: ${windSpeed}</p>
            `;
        } catch (error) {
            weatherResult.innerHTML = `<p>${error.message}</p>`;
        }
    } else {
        weatherResult.innerHTML = `<p>Please enter a city name</p>`;
    }
}
