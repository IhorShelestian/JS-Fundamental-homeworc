const myIp = 'http://localhost:5010/';
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    getResult(myIp);
});

async function getResult(url) {
    const res = await fetch(url);
    const data = await res.json();
    addListBooks(data);
}

function addListBooks(arr) {
    const list = document.querySelector('ul');
    arr.forEach(x => {
        list.innerHTML += `<li>${x.author}</li>`;
    })
}