const ipAddress = document.getElementById('ip-address');
const city = document.getElementById('city');
const region = document.getElementById('region');
const country = document.getElementById('country');
const postalCode = document.getElementById('postal-code');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const timezone = document.getElementById('timezone');
const callingCode = document.getElementById('calling-code');
const asn = document.getElementById('asn');
const organisation = document.getElementById('organisation');

async function fetchData() {
    const res = await fetch('https://ipapi.co/json/')
        .then(function(response) {
            response.json().then(jsonData => {
                ipAddress.textContent = jsonData.ip;
                city.textContent = jsonData.city;
                region.textContent = jsonData.region;
                country.textContent = jsonData.country_name;
                postalCode.textContent = jsonData.postal;
                latitude.textContent = jsonData.latitude;
                longitude.textContent = jsonData.longitude;
                timezone.textContent = jsonData.timezone;
                callingCode.textContent = jsonData.country_calling_code;
                asn.textContent = jsonData.asn;
                jsonData.organisation ? organisation.textContent = jsonData.organisation : organisation.textContent = '-';
            });
        })
        .catch(function(error) {
            console.log(error)
        });
    return res;
}

fetchData();