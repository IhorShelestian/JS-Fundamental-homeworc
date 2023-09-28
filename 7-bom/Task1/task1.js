const btn = document.getElementById('btn');
btn.style.width = '200px';
btn.style.height = '200px';
btn.style.fontSize = '20px';

btn.onclick = () => {
    const newWindow = window.open('', '', 'width=300, height=300');
    setTimeout(() => newWindow.resizeTo(300, 300), 2000);
    setTimeout(() => newWindow.moveTo(200, 200), 4000);
    setTimeout(() => newWindow.close(), 6000);
};

