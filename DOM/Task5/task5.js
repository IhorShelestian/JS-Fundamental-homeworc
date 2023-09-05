const circle = document.querySelectorAll('.circle');
for (const i of circle) {
    let newClass = i.getAttribute(`data-anim`);
    i.classList.add(newClass);
}