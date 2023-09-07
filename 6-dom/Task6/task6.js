const colors = document.querySelectorAll('.color');
const outPrice = document.getElementById('outprice');
const gradients = document.querySelectorAll('.gradient');
const images = document.querySelectorAll('.shoe');
const sale = document.querySelector('.fa-share-alt');
const newShoe = document.querySelector('.new');


colors.forEach(color => {
    color.addEventListener('click', function () {

        let colorDataPrice = color.getAttribute('data-price');
        newShoe.classList.add('notNew');

        if (color.getAttribute('color') === 'red' || color.getAttribute('color') === 'orange') {
            newShoe.classList.remove('notNew');
        };

        colors.forEach(i => { i.classList.remove('active') });
        color.classList.add('active');

        gradients.forEach(gradient => {
            let gradientDataPrice = gradient.getAttribute('data-price');
            gradient.classList.remove('second');

            if (gradient.getAttribute('color') === color.getAttribute('color')) {
                gradient.classList.add('second');
                
                if (newShoe.getAttribute('class') !== 'new notNew') {
                    outPrice.innerHTML = colorDataPrice;
                    sale.innerHTML = '';
                } else if (gradientDataPrice < colorDataPrice) {
                    outPrice.innerHTML = gradientDataPrice;
                    sale.innerHTML = 'Sale';
                } else {
                    outPrice.innerHTML = gradientDataPrice;
                    sale.innerHTML = '';
                }
            }
        });

        images.forEach(image => {
            image.classList.remove('show');
            if (image.getAttribute('color') === color.getAttribute('color')) {
                image.classList.add('show');
            }
        })
    })
});