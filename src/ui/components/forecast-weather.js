import { format } from "date-fns/format";

// return forecast weather component
const forecastWeather = (data) => {
    const forecastWeatherContainer = document.createElement('div');
    forecastWeatherContainer.setAttribute('id', 'forecast-container');
    forecastWeatherContainer.classList.add(
        'p-8',
        'divide-y',
        'divide-amber-950',
    );

    data.forecastday.forEach((dayWeather, index) => {
        const date = dayWeather.date;
        const dateParts = date.split('-');

        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1;
        const day = parseInt(dateParts[2]);

        const specificDate = new Date(year, month, day);
        const dateInfoText = format(specificDate, "EEEE', 'dd MMMM yyyy");

        const dayInfo = createDay(dayWeather.day);
        const dayComponent = document.createElement('div');
        dayComponent.classList.add('py-8');
        if (index === 0) {
            dayComponent.classList.add(
                'first:border-t',
                'first:border-t-amber-950'
            );
        }
        const dateInfo = document.createElement('p');
        dateInfo.classList.add(
            'px-8',
            'pb-2',
            'text-3xl'
        );
        dateInfo.innerText = dateInfoText;

        dayComponent.appendChild(dateInfo);
        dayComponent.appendChild(dayInfo);
        forecastWeatherContainer.appendChild(dayComponent);
    });

    return forecastWeatherContainer;
};

// create weather elemento for one day
function createDay(data) {
    const avgTemperatureCValue = data.avgtemp_c;
    const maxTemperatureCValue = data.maxtemp_c;
    const minTemperatureCValue = data.mintemp_c;
    const maxWindValue = data.maxwind_kph;
    const avgHumidityValue = data.avghumidity;
    const dailyChanceOfRainValue = data.daily_chance_of_rain;
    const totalPrecipitationValue = data.totalprecip_mm;

    const forecastDayWeatherContainer = document.createElement('div');
    forecastDayWeatherContainer.setAttribute('id', 'forecast-day-container');
    forecastDayWeatherContainer.classList.add(
        'flex',
        'justify-around'
    );

    // temperature section
    const temperatureContainer = document.createElement('div');
    temperatureContainer.classList.add(
        'flex',
        'flex-col',
        'items-center'
    );

    // weather icon
    const weatherIconContainer = document.createElement('div');
    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', data.condition.icon);
    weatherIcon.setAttribute('alt', 'weather icon');
    weatherIcon.setAttribute('title', data.condition.text);
    weatherIcon.classList.add('size-24');
    weatherIconContainer.appendChild(weatherIcon);
    temperatureContainer.appendChild(weatherIconContainer);

    // temperature
    const temperatureInfo = document.createElement('p');
    temperatureInfo.classList.add(
        'text-3xl',
        'font-bold'
    );
    temperatureInfo.innerText = `${avgTemperatureCValue}°C`;
    temperatureContainer.appendChild(temperatureInfo);
    forecastDayWeatherContainer.appendChild(temperatureContainer);

    // other weather info section
    const weatherInformationsContainer = document.createElement('div');
    weatherInformationsContainer.classList.add(
        'flex',
        'justify-around',
        'items-center'
    );

    // max temperature info
    const maxTemperatureContainer = document.createElement('div');
    maxTemperatureContainer.classList.add(
        'flex',
        'flex-col',
        'items-center',
        'px-4'
    );
    const maxTemperature = document.createElement('p');
    maxTemperature.classList.add(
        'text-2xl',
        'font-semibold'
    );
    maxTemperature.innerText = `${maxTemperatureCValue}°C`;
    maxTemperatureContainer.appendChild(maxTemperature);
    const maxTemperatureText = document.createElement('p');
    maxTemperatureText.classList.add('text-2xl');
    maxTemperatureText.innerText = "Max temp";
    maxTemperatureContainer.appendChild(maxTemperatureText);
    weatherInformationsContainer.appendChild(maxTemperatureContainer);

    // min temperature info
    const minTemperatureContainer = document.createElement('div');
    minTemperatureContainer.classList.add(
        'flex',
        'flex-col',
        'items-center',
        'px-4'
    );
    const minTemperature = document.createElement('p');
    minTemperature.classList.add(
        'text-2xl',
        'font-semibold'
    );
    minTemperature.innerText = `${minTemperatureCValue}°C`;
    minTemperatureContainer.appendChild(minTemperature);
    const minTemperatureText = document.createElement('p');
    minTemperatureText.classList.add('text-2xl');
    minTemperatureText.innerText = "Min temp";
    minTemperatureContainer.appendChild(minTemperatureText);
    weatherInformationsContainer.appendChild(minTemperatureContainer);

    // wind speed info
    const windSpeedContainer = document.createElement('div');
    windSpeedContainer.classList.add(
        'flex',
        'flex-col',
        'items-center',
        'px-4'
    );
    const windSpeed = document.createElement('p');
    windSpeed.classList.add(
        'text-2xl',
        'font-semibold'
    );
    windSpeed.innerText = `${maxWindValue} km/h`;
    windSpeedContainer.appendChild(windSpeed);
    const windSpeedText = document.createElement('p');
    windSpeedText.classList.add('text-2xl');
    windSpeedText.innerText = "Max wind";
    windSpeedContainer.appendChild(windSpeedText);
    weatherInformationsContainer.appendChild(windSpeedContainer);

    // humidity info
    const humidityContainer = document.createElement('div');
    humidityContainer.classList.add(
        'flex',
        'flex-col',
        'items-center',
        'px-4'
    );
    const humidity = document.createElement('p');
    humidity.classList.add(
        'text-2xl',
        'font-semibold'
    );
    humidity.innerText = `${avgHumidityValue}%`;
    humidityContainer.appendChild(humidity);
    const humidityText = document.createElement('p');
    humidityText.classList.add('text-2xl');
    humidityText.innerText = "Humidity";
    humidityContainer.appendChild(humidityText);
    weatherInformationsContainer.appendChild(humidityContainer);

    // dayli chance of rain
    const chanceOfRainContainer = document.createElement('div');
    chanceOfRainContainer.classList.add(
        'flex',
        'flex-col',
        'items-center',
        'px-4'
    );
    const chanceOfRain = document.createElement('p');
    chanceOfRain.classList.add(
        'text-2xl',
        'font-semibold'
    );
    chanceOfRain.innerText = `${dailyChanceOfRainValue}%`;
    chanceOfRainContainer.appendChild(chanceOfRain);
    const chanceOfRainText = document.createElement('p');
    chanceOfRainText.classList.add('text-2xl');
    chanceOfRainText.innerText = "Chance of rain";
    chanceOfRainContainer.appendChild(chanceOfRainText);
    weatherInformationsContainer.appendChild(chanceOfRainContainer);

    // precipitation info
    const precipitationContainer = document.createElement('div');
    precipitationContainer.classList.add(
        'flex',
        'flex-col',
        'items-center',
        'px-4'
    );
    const precipitation = document.createElement('p');
    precipitation.classList.add(
        'text-2xl',
        'font-semibold'
    );
    precipitation.innerText = `${totalPrecipitationValue} mm`;
    precipitationContainer.appendChild(precipitation);
    const precipitationText = document.createElement('p');
    precipitationText.classList.add('text-2xl');
    precipitationText.innerText = "Precipitation";
    precipitationContainer.appendChild(precipitationText);
    weatherInformationsContainer.appendChild(precipitationContainer);

    forecastDayWeatherContainer.appendChild(weatherInformationsContainer);
    return forecastDayWeatherContainer;
}

export { forecastWeather };