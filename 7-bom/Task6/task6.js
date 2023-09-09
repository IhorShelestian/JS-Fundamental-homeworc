const currentSize = document.getElementById('currentSize');
currentSize.innerHTML = `${window.innerHeight}x${window.innerWidth}`;
window.onresize = () => currentSize.innerHTML = `${window.innerHeight}x${window.innerWidth}`;