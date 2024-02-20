const ipAddress: HTMLSpanElement | null = document.getElementById('ip-address');
const city: HTMLSpanElement | null = document.getElementById('city');
const region: HTMLSpanElement | null = document.getElementById('region');
const country: HTMLSpanElement | null = document.getElementById('country');
const postalCode: HTMLSpanElement | null = document.getElementById('postal-code');
const latitude: HTMLSpanElement | null = document.getElementById('latitude');
const longitude: HTMLSpanElement | null = document.getElementById('longitude');
const timezone: HTMLSpanElement | null = document.getElementById('timezone');
const callingCode: HTMLSpanElement | null = document.getElementById('calling-code');
const asn: HTMLSpanElement | null = document.getElementById('asn');
const organisation: HTMLSpanElement | null = document.getElementById('organisation');

async function fetchData() {
    const res = await fetch('https://ipapi.co/json/')
        .then(function(response) {
            response.json().then(jsonData => {
                ipAddress != null ? ipAddress.textContent = jsonData.ip : '';
                city != null ? city.textContent = jsonData.city : '';
                region != null ? region.textContent = jsonData.region : '';
                country != null ? country.textContent = jsonData.country_name : '';
                postalCode != null ? postalCode.textContent = jsonData.postal : '';
                latitude != null ? latitude.textContent = jsonData.latitude : '';
                longitude != null ? longitude.textContent = jsonData.longitude : '';
                timezone != null ? timezone.textContent = jsonData.timezone : '';
                callingCode != null ? callingCode.textContent = jsonData.country_calling_code : '';
                asn != null ? asn.textContent = jsonData.asn : '';
                jsonData.organisation && organisation != null ? organisation.textContent = jsonData.organisation : '-';
            });
        })
        .catch(function(error) {
            console.log(error)
        });
    return res;
}

fetchData();