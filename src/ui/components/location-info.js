import { format } from "date-fns/format";

// return location info component
const locationInfo = (data) => {
    // location and date info
    const cityName = data.name;
    const countryName = data.country;
    const locationInfoText = `${cityName}, ${countryName}`;
    const dateInfoValue = data.localtime;

    const dateTimeParts = dateInfoValue.split(' ');
    const dateParts = dateTimeParts[0].split('-');
    const timeParts = dateTimeParts[1].split(':');

    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    const specificDate = new Date(year, month, day, hours, minutes);
    const dateInfoText = format(specificDate, "EEEE', 'dd MMMM yyyy HH':'mm");

    const infoContainer = document.createElement('div');
    infoContainer.setAttribute('id', 'location-container');
    infoContainer.classList.add(
        'flex',
        'justify-around',
        'items-center',
        'p-8'
    );

    const locationInfo = document.createElement('p');
    locationInfo.classList.add(
        'font-bold',
        'text-3xl'
    );
    locationInfo.innerText = locationInfoText;
    infoContainer.appendChild(locationInfo);

    const dateInfo = document.createElement('p');
    dateInfo.classList.add(
        'font-bold',
        'text-2xl'
    );
    dateInfo.innerText = dateInfoText;
    infoContainer.appendChild(dateInfo);

    return infoContainer;
};

export { locationInfo };