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
const date: HTMLSpanElement | null = document.getElementById('date');

interface JsonData {
    ip: string,
    city: string,
    region: string,
    country_name: string,
    postal: string,
    latitude: string,
    longitude: string,
    timezone: string,
    country_calling_code: string,
    asn: string,
    organisation: string,
}

async function fetchData() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const jsonData: JsonData = await response.json();

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

        getYear();
    } catch (error) {
        console.log(error);
    }
}

function getYear() {
    if (date != null) {
        date.textContent = new Date().getFullYear().toString();
    }
}

fetchData();