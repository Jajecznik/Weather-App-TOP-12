import { getWeatherData } from "../..";
import { currentWeather } from "./current-weather";
import { forecastWeather } from "./forecast-weather";
import { locationInfo } from "./location-info";

// return location form component
const locationForm = () => {
    const formContainer = document.createElement('div');
    formContainer.classList.add(
        'flex',
        'justify-center',
        'p-8'
    );

    const form = document.createElement('form');
    const locationTextInput = document.createElement('input');
    locationTextInput.setAttribute('type', 'text');
    locationTextInput.setAttribute('id', 'location-form');
    locationTextInput.setAttribute('name', 'location-form');
    locationTextInput.setAttribute('placeholder', 'search for a location...');
    locationTextInput.classList.add(
        'mr-8',
        'p-2',
        'border',
        'border-solid',
        'rounded-md',
        'border-amber-950',
        'outline-amber-950',
        'bg-slate-50'
    );
    form.appendChild(locationTextInput);

    const submitForm = document.createElement('input');
    submitForm.setAttribute('type', 'submit');
    submitForm.setAttribute('id', 'submit-location-form');
    submitForm.classList.add(
        'p-2',
        'rounded-md',
        'text-slate-50',
        'bg-amber-950'
    );
    submitForm.value = "Show weather";
    form.appendChild(submitForm);

    form.addEventListener('submit', submitSearchLocationForm);
    formContainer.appendChild(form);
    return formContainer;
}

async function submitSearchLocationForm() {
    event.preventDefault();
    const contentElement = document.getElementById('content');
    const formValue = document.getElementById('location-form').value;
    const weatherData = await getWeatherData(formValue);

    if (weatherData) {
        const locationData = weatherData.location;
        const currentWeatherData = weatherData.current;
        const forecastWeatherData = weatherData.forecast;

        const locationContainer = document.getElementById('location-container');
        const currentContainer = document.getElementById('current-container');
        const forecastContainer = document.getElementById('forecast-container');

        locationContainer.remove();
        currentContainer.remove();
        forecastContainer.remove();

        const locationInfoComponent = locationInfo(locationData);
        contentElement.appendChild(locationInfoComponent);
        const currentWeatherComponent = currentWeather(currentWeatherData);
        contentElement.appendChild(currentWeatherComponent);
        const forecastWeatherComponent = forecastWeather(forecastWeatherData);
        contentElement.appendChild(forecastWeatherComponent);
    }
    document.getElementById('location-form').value = "";
}

export { locationForm };