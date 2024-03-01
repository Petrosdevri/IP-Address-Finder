"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const date = document.getElementById('date');
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://ipapi.co/json/');
            const jsonData = yield response.json();
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
        }
        catch (error) {
            console.log(error);
        }
    });
}
function getYear() {
    if (date != null) {
        date.textContent = new Date().getFullYear().toString();
    }
}
fetchData();
