document.querySelector('h1').style.backgroundColor = 'green';
document.querySelector('#myDiv p:first-child').style.fontWeight = 'bold';;
document.querySelector('#myDiv').children[1].style.color = 'red';
document.querySelector('#myDiv').children[2].style.textDecoration = 'underline';
document.querySelector('#myDiv').lastElementChild.style.fontStyle = 'italic';
const li = document.querySelectorAll('ul li');
li.forEach((item) => item.style.float = 'left');
document.querySelector('#myList').style.listStyle = `none`;