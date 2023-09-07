const fioIn = document.querySelector('input[type="text"]');
const phoneIn = document.querySelector('input[type="phone"]');
const birthdayIn = document.querySelector('input[type="date"]');
const emailIn = document.querySelector('input[type="email"]');
const submitBtn = document.querySelector('input[type="submit"]');
const outBlock = document.querySelector('div[class="out"]');

submitBtn.addEventListener('click', () => {

    outBlock.innerHTML = `<div>${fioIn.value}<br>
                        ${phoneIn.value}<br>
                        ${birthdayIn.value}<br>
                        ${emailIn.value}</div>`;

});

