const btn = document.querySelector('body div button');
const p = document.getElementById('text');
function changeCSS() {
    p.style.color = 'orange';
    p.style.fontFamily = 'Comic Sans MS';
    p.style.fontSize = '20px';
};
btn.addEventListener('click', changeCSS);