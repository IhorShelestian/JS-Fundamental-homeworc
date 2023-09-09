const btn = document.querySelector('button');
const div = document.querySelector('div');
const press = `<p class='red'>I was pressed!</p>`;
const on = `<p class='blue'>Mouse on me!</p>`;
const notOn = `<p class='green'>Mouse not on me!</p>`;

btn.addEventListener('click', () => {
    div.innerHTML += press;
});

btn.addEventListener('mouseover', () => {
    div.innerHTML += on;
});

btn.addEventListener('mouseout', () => {
    div.innerHTML += notOn;
});