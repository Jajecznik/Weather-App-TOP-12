import './styles/styles.css';
import { createMainPage } from './ui/main-page';

// fetch user ip addres
async function getUserIp() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
            throw new Error('Failed to fetch IP');
        }
        const userIp = await response.json();
        return userIp.ip;
    } catch (error) {
        console.error('Error fetching user IP:', error);
        return null;
    }
}

// fetch weather data from api
async function fetchWeatherData(apiKey, location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`);
        const weatherData = await response.json();
        if (weatherData.error && weatherData.error.code === 1006) {
            console.error('No matching location found.');
            return null;
        }
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// show data loading info
function showLoader() {
    const loadingPanel = document.createElement('div');
    loadingPanel.setAttribute('id', 'loading-panel');
    loadingPanel.classList.add(
        'fixed',
        'top-0',
        'left-0',
        'z-10',
        'w-full',
        'h-full',
        'flex',
        'justify-center',
        'items-center',
        'bg-white/60',
    );
    const loadingText = document.createElement('p');
    loadingText.classList.add(
        'relative',
        'text-3xl');
    loadingText.innerText = "Loading data...";
    loadingPanel.appendChild(loadingText);
    document.body.appendChild(loadingPanel);
}

// hide data loading info
function hideLoader() {
    const loadingPanel = document.getElementById('loading-panel');
    loadingPanel.remove();
}

// get weather data for user location
const getWeatherData = async (userLocation = null) => {
    showLoader();
    try {
        const apiKey = 'dfe2c72a5b4d4815a89180308241705';
        let location;

        if (userLocation) {
            location = userLocation;
        } else {
            location = await getUserIp();
            if (!location) {
                return null;
            }
        }
        const forecastWeatherData = await fetchWeatherData(apiKey, location);
        return forecastWeatherData;
    } catch (error) {
        console.error('Error getting weather data:', error);
        return null;
    } finally {
        hideLoader();
    }
};

createMainPage();

export { getWeatherData };
