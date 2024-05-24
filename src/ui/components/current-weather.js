// return current weather component
const currentWeather = (data) => {
    // current weather info
    const temperatureCValue = data.temp_c;
    const windValue = data.wind_kph;
    const humidityValue = data.humidity;
    const cloundsValue = data.cloud;
    const precipitationValue = data.precip_mm;

    const currentWeatherContainer = document.createElement('div');
    currentWeatherContainer.setAttribute('id', 'current-container');
    currentWeatherContainer.classList.add(
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
    temperatureInfo.innerText = `${temperatureCValue}°C`;
    temperatureContainer.appendChild(temperatureInfo);
    currentWeatherContainer.appendChild(temperatureContainer);

    // other weather info section
    const weatherInformationsContainer = document.createElement('div');
    weatherInformationsContainer.classList.add(
        'flex',
        'justify-around',
        'items-center'
    );

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
    windSpeed.innerText = `${windValue} km/h`;
    windSpeedContainer.appendChild(windSpeed);
    const windSpeedText = document.createElement('p');
    windSpeedText.classList.add('text-2xl');
    windSpeedText.innerText = "Wind";
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
    humidity.innerText = `${humidityValue}%`;
    humidityContainer.appendChild(humidity);
    const humidityText = document.createElement('p');
    humidityText.classList.add('text-2xl');
    humidityText.innerText = "Humidity";
    humidityContainer.appendChild(humidityText);
    weatherInformationsContainer.appendChild(humidityContainer);

    // clounds info
    const cloundsContainer = document.createElement('div');
    cloundsContainer.classList.add(
        'flex',
        'flex-col',
        'items-center',
        'px-4'
    );
    const clounds = document.createElement('p');
    clounds.classList.add(
        'text-2xl',
        'font-semibold'
    );
    clounds.innerText = `${cloundsValue}%`;
    cloundsContainer.appendChild(clounds);
    const cloundsText = document.createElement('p');
    cloundsText.classList.add('text-2xl');
    cloundsText.innerText = "Clouds";
    cloundsContainer.appendChild(cloundsText);
    weatherInformationsContainer.appendChild(cloundsContainer);

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
    precipitation.innerText = `${precipitationValue} mm`;
    precipitationContainer.appendChild(precipitation);
    const precipitationText = document.createElement('p');
    precipitationText.classList.add('text-2xl');
    precipitationText.innerText = "Precipitation";
    precipitationContainer.appendChild(precipitationText);
    weatherInformationsContainer.appendChild(precipitationContainer);

    currentWeatherContainer.appendChild(weatherInformationsContainer);
    return currentWeatherContainer;
};

export { currentWeather };