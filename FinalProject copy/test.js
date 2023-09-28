// оголошую глобальні змінні
const listContainer = document.querySelector('.listContainer');
const buttonAdd = document.querySelector('#toAdd');
const buttonMarkAllDone = document.getElementById('markAllDone');
const buttonClear = document.getElementById('clear');
const buttonSortByImportant = document.getElementById('btnSort');
const inputTextArea = document.getElementById('inputTextArea');
const checkboxMarkAsImportant = document.querySelector('.checkboxMarkAsImportant');
let counterForCheckboxId = 1;
let counterForMarkDone = 0;

// всі кнопки крім Добавити не активні
buttonSortByImportant.disabled = true;
buttonMarkAllDone.disabled = true;
buttonClear.disabled = true;


function addIteminList() {
    // створюю контайнер із чекбоксом та лейблом
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('itemContainer');
    itemContainer.classList.add('ordinary-notMark');

    const checkboxForItem = document.createElement('input');
    checkboxForItem.classList.add('form-check-input', 'checkboxForItem');
    checkboxForItem.setAttribute('type', 'checkbox');
    checkboxForItem.setAttribute('name', 'checkboxForItem');

    const labelForCheckboxItem = document.createElement('label');
    labelForCheckboxItem.classList.add('labelForCheckboxItem');
    // якщо поле заповнене, додаю у лістконтейнер
    if (inputTextArea.value.trim() !== '') {
        itemContainer.append(checkboxForItem);
        itemContainer.append(labelForCheckboxItem);
        labelForCheckboxItem.textContent = inputTextArea.value;
        inputTextArea.value = '';
        listContainer.prepend(itemContainer);
        // додаю атрибути до чекбоксу і лейблу
        checkboxForItem.setAttribute('id', `checkboxForItem${counterForCheckboxId}`);
        labelForCheckboxItem.setAttribute('for', `checkboxForItem${counterForCheckboxId}`);
        counterForCheckboxId++;
        // роблю кнопки активними і збільшую лічильник
        counterForMarkDone++;
        buttonMarkAllDone.disabled = false;
        buttonClear.disabled = false;
        let listContainerLength = document.querySelectorAll('.itemContainer').length;
        listContainerLength > 1 ? buttonSortByImportant.disabled = false : buttonSortByImportant.disabled = true;
        // якщо чекбокс Важливо активований, змінюю колір та клас для сортування
        if (checkboxMarkAsImportant.checked) {
            labelForCheckboxItem.style.color = '#4633c3';
            itemContainer.classList.remove('ordinary-notMark');
            itemContainer.classList.add('important-notMark');
            checkboxMarkAsImportant.checked = false;
        }
        // якщо чекбокс чекнули - роблю не активним, перекреслюю текст, кидаю у низ, змінюю клас для сортування
        checkboxForItem.addEventListener('change', function () {
            if (this.checked) {
                this.disabled = true;
                labelForCheckboxItem.style.textDecoration = 'line-through';
                listContainer.appendChild(itemContainer);
                itemContainer.className = '';
                itemContainer.classList.add('itemContainer');
                itemContainer.classList.add('markedAsDone');
            }
        })
    }
}

function markAllDone() {
    const allCheckboxesForItem = document.querySelectorAll('.checkboxForItem');
    const allLabelsForCheckboxItem = document.querySelectorAll('.labelForCheckboxItem');
    const allItemContainers = document.querySelectorAll('.itemContainer');
    // якщо каунтер більше 0, активні чекбокси, кнопки - неактивними
    if (counterForMarkDone > 0) {
        for (let i = 0; i < allCheckboxesForItem.length; i++) {
            if (!allCheckboxesForItem[i].checked) {
                allCheckboxesForItem[i].checked = true;
                allCheckboxesForItem[i].disabled = true;
                allLabelsForCheckboxItem[i].style.textDecoration = 'line-through';
                allItemContainers[i].className = '';
                allItemContainers[i].classList.add('itemContainer');
                allItemContainers[i].classList.add('markedAsDone');
                counterForMarkDone = 0;
                buttonMarkAllDone.disabled = true;
                buttonSortByImportant.disabled = true;
            }
        }
    }
}

function clearListContainer() {
    if (listContainer.innerHTML !== '') {
        listContainer.innerHTML = '';
        counterForCheckboxId = 1;
        buttonClear.disabled = true;
        buttonSortByImportant.disabled = true;
    }
}

function sortItemByImportant() {
    let ordinaryArr = [...document.querySelectorAll('.ordinary-notMark')];
    let importantArr = [...document.querySelectorAll('.important-notMark')];
    let makrArr = [...document.querySelectorAll('.markedAsDone')];

    listContainer.innerHTML = '';

    importantArr.forEach((important) => listContainer.append(important));
    ordinaryArr.forEach((ordinary) => listContainer.append(ordinary));
    makrArr.forEach((mark) => listContainer.append(mark));

    buttonSortByImportant.disabled = true;
}

buttonAdd.addEventListener('click', addIteminList);
buttonMarkAllDone.addEventListener('click', markAllDone);
buttonClear.addEventListener('click', clearListContainer);
buttonSortByImportant.addEventListener('click', sortItemByImportant);