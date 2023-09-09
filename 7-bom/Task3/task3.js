const blue = document.getElementById('blue');
const pink = document.getElementById('pink');
const brown = document.getElementById('brown');
const yellow = document.querySelector('a');

blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});

pink.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'pink';
});

brown.addEventListener('mousedown', () => {
    document.body.style.backgroundColor = 'brown';
});

brown.addEventListener('mouseup', () => {
    document.body.style.backgroundColor = 'white';
});

yellow.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'yellow';
});

yellow.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white';
});




