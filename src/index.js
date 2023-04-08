import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const baseUrl = 'https://restcountries.com/v3.1/name/';

const fetchCountryData = debounce((searchValue) => {
  const url = `${baseUrl}${searchValue}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('404');
        } else {
          throw new Error('No results found');
        }
      }
      return response.json();
    })
    .then((data) => {
      // Clear previous search results
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';

      if (data.length > 10) {
        Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
      } else if (data.length > 1 && data.length <= 10) {
        data.forEach((country) => {
          const countryElement = document.createElement('li');
          countryElement.textContent = country.name.common;

          const flagElement = document.createElement('img');
          flagElement.src = country.flags.svg;
          flagElement.alt = `Flag of ${country.name.common}`;

          countryElement.prepend(flagElement);
          countryList.appendChild(countryElement);

          // Add click event to show details about the country
          countryElement.addEventListener('click', () => {
            showCountryInfo(country);
          });
        });
      } else if (data.length === 1) {
        // If there is only one result, show detailed information about the country
        showCountryInfo(data[0]);
      } else {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      }
    })
    .catch((error) => {
      if (error.message.includes('404')) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      } else {
        console.error(error.message);
      }
    });
}, DEBOUNCE_DELAY);

function showCountryInfo(country) {
  const countryInfoHTML = `
    <h2>${country.name.common}</h2>
    <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" />
    <p><strong>Capital:</strong> ${country.capital}</p>
    <p><strong>Population:</strong> ${country.population}</p>
    <p><strong>Languages:</strong> ${Object.values(country.languages).join(', ')}</p>
  `;
  countryInfo.innerHTML = countryInfoHTML;
}

input.addEventListener('input', (event) => {
  const searchValue = event.target.value.trim();
  if (searchValue.length >= 2) {
    fetchCountryData(searchValue);
  } else {
    // Clear previous search results if search box is empty
    countryList.innerHTML = '';
    countryInfo.innerHTML = ''; 
  }
});