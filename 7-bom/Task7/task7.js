const country = document.querySelector('#country');
const cities = document.getElementById('cities');
const output = document.querySelector('p');
const forGer = `<option value="gamburg">Gamburg</option>
<option value="berlin">Berlin</option>
<option value="bremen">Bremen</option>`;
const forUsa = `<option value="newYork">New York</option>
<option value="boston">Boston</option>
<option value="atlanta">Atlanta</option>`;
const forUkr = `<option value="kyiv">Kyiv</option>
<option value="odesa">Odesa</option>
<option value="Lviv">Lviv</option>`;

if (country.value === 'ger') cities.innerHTML = forGer;
else if (country.value === 'usa') cities.innerHTML = forUsa;
else if (country.value === 'ukr') cities.innerHTML = forUkr;

updateOutput();

function updateOutput() {
    let actCountry = country.options[country.selectedIndex].textContent;
    let actCity = cities.options[cities.selectedIndex].textContent;
    output.textContent = `${actCountry}:  ${actCity}`;
}

function changeCountry(event) {
    if (event.target.value === 'ger') {
        cities.innerHTML = forGer;
    }
    if (event.target.value === 'usa') {
        cities.innerHTML = forUsa;
    }
    if (event.target.value === 'ukr') {
        cities.innerHTML = forUkr;
    }
    updateOutput();
};


function changeCity(event) {
    actCity = event.target.options[event.target.selectedIndex].textContent;
    console.log(actCity);
    updateOutput();
}

country.addEventListener('change', changeCountry);
cities.addEventListener('change', changeCity);





