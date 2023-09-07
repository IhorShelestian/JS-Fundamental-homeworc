const circle = document.querySelectorAll('.circle');
circle.forEach(i => {
    let newClass = i.getAttribute(`data-anim`);
    i.classList.add(newClass);
});


// for (const i of circle) {
//     let newClass = i.getAttribute(`data-anim`);
//     i.classList.add(newClass);
// }