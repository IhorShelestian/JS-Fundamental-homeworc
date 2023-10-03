const myIp = 'http://localhost:5000/';
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    getResult(myIp);
});

async function getResult(url) {
    const res = await fetch(url);
    const data = await res.text();
    btn.textContent = data;
}