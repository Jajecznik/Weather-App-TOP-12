import { getWeatherData } from "..";
import { currentWeather } from "./components/current-weather";
import { forecastWeather } from "./components/forecast-weather";
import { locationForm } from "./components/location-form";
import { locationInfo } from "./components/location-info";

// create main page
const createMainPage = async () => {
    const contentElement = document.getElementById('content');
    contentElement.classList.add(
        'px-4',
        'text-xl'
    );

    // new location input form
    const locationFormComponent = locationForm();
    contentElement.appendChild(locationFormComponent);

    const weatherData = await getWeatherData();
    if (weatherData) {
        // location and date info
        const locationData = weatherData.location;
        const locationInfoComponent = locationInfo(locationData);
        contentElement.appendChild(locationInfoComponent);

        // current weather info
        const currentWeatherData = weatherData.current;
        const currentWeatherComponent = currentWeather(currentWeatherData);
        contentElement.appendChild(currentWeatherComponent);

        // forecast weather info
        const forecastWeatherData = weatherData.forecast;
        const forecastWeatherComponent = forecastWeather(forecastWeatherData);
        contentElement.appendChild(forecastWeatherComponent);
    } else {
        console.error('Failed to retrieve weather data');
    }
};

export { createMainPage };