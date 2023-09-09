const nameCollection = document.querySelectorAll('option');
const activName = document.querySelector('.names');
const btn = document.querySelector('button');
let counter = nameCollection.length;

btn.addEventListener('click', deleteName);


function deleteName() {
    const select = activName.value;
    nameCollection.forEach(item => {
        if (item.innerText.toLocaleLowerCase() === select) {
            item.remove();
            // item.outerHTML = '';
            counter--;
        }
    });
    if (counter === 0) location.reload();
}