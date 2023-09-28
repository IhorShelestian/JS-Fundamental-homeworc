let delays = [300, 200, 100, 150, 500];
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNum() {
    let counter;
    for (let i = 0; i < delays.length; i++) {
        counter = delays[i];
        await delay(counter, delays[i]);
        console.log(i);
    }
}
showNum();


