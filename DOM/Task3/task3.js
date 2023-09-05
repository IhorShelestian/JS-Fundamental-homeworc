const body = document.querySelector('body');
const main = document.createElement('main');
main.classList.add('mainClass', 'check',  'item');
body.append(main);
const div = document.createElement('div');
div.setAttribute('id', 'myDiv');
main.append(div);
main.innerHTML = `<p>First paragraph</p>`;