const colors = document.querySelectorAll('.color');
const gradients = document.querySelectorAll('.gradient');
const shoes = document.querySelectorAll('.shoe');
const outPrice = document.getElementById('outprice');
const sizes = document.querySelector('.size-list');
const quantity = document.querySelector('.quantity');
const checkDiscound = document.getElementById('discound');
const saleBox = document.querySelector('.sale-box');
const sales = document.getElementById('sales');

let price = 170;
let sizeValue = 1;
let quantityValue = 1;
let saleValue = 1;

sales.value = 1;
quantity.value = 1;
sizes.value = 1;

saleBox.classList.add('not-display');


checkDiscound.addEventListener('change', hideFieldSale);

function hideFieldSale() {
    if (checkDiscound.checked) {
        saleBox.classList.remove('not-display');
        sales.value = 1;
    } else {
        saleBox.classList.add('not-display');
        saleValue = 1;
        outPrice.innerHTML = Math.floor(price * sizeValue * quantityValue * saleValue);
    }
};

sizes.addEventListener('input', updatePriceWithNewSize);

function updatePriceWithNewSize() {
    sizeValue = sizes.value;
    outPrice.innerHTML = Math.floor(price * sizeValue * quantityValue * saleValue);
};

quantity.addEventListener('input', updatePriceWithNewQuantity);

function updatePriceWithNewQuantity() {
    quantityValue = quantity.value;
    outPrice.innerHTML = Math.floor(price * sizeValue * quantityValue * saleValue);
};

sales.addEventListener('input', updatePriceWithNewSale);

function updatePriceWithNewSale() {
    saleValue = sales.value;
    outPrice.innerHTML = Math.floor(price * sizeValue * quantityValue * saleValue);
};


function activColor(event) {
    colors.forEach(x => { x.classList.remove('active') });
    event.target.classList.add('active');

    gradients.forEach(gradient => {
        gradient.classList.remove('second');
        if (gradient.attributes.color.value === event.target.attributes.color.value) {
            gradient.classList.add('second');
        }
    });

    shoes.forEach(shoe => {
        shoe.classList.remove('show');
        if (shoe.attributes.color.value === event.target.attributes.color.value) {
            shoe.classList.add('show');
        }
    });

    price = event.target.dataset.price;
    sizeValue = 1;
    quantityValue = 1;
    saleValue = 1;

    outPrice.innerHTML = Math.floor(price * sizeValue * quantityValue * saleValue);
};

colors.forEach(color => {
    color.addEventListener('click', activColor);
});