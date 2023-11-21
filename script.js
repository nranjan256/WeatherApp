document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '1028d76bee93b293c425d185c16c1b38';
    
    // Function to get weather data
    const getWeatherData = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            displayWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        }
    };

    // Function to display weather data
    const displayWeatherData = (data) => {
        const weatherContainer = document.getElementById('weather-data');
        weatherContainer.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const cityInput = document.getElementById('city-input');
        const city = cityInput.value.trim();

        if (city !== '') {
            getWeatherData(city);
            cityInput.value = ''; // Clear input field
        } else {
            alert('Please enter a city name.');
        }
    };

    // Event listener for form submission
    const form = document.getElementById('weather-form');
    form.addEventListener('submit', handleSubmit);
});