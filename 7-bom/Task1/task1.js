const btn = document.getElementById('btn');
btn.style.width = '200px';
btn.style.height = '200px';
btn.style.fontSize = '20px';

btn.onclick = () => {
    const newWindow = window.open('http://127.0.0.1:5500/7-bom/Task%201/newSite.html', 'width=300, height=300');
    setTimeout(() => newWindow.resizeTo(300, 300), 2000);
    setTimeout(() => newWindow.moveTo(200, 200), 2000);
    setTimeout(() => newWindow.close(), 2000);
};

