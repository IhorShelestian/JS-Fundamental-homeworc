let delays = [300,200,100,150,500];
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

delays.map((time, i) => {
    delay(i, time).then(x => console.log(x))
})
