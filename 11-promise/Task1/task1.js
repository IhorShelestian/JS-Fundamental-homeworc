function getPromise(message, delay) {
    return new Promise ((res) => {
        setTimeout(() => {
            res(message);
        }, delay)
    })
}


console.log(getPromise("Hello world!", 500))
getPromise("test promise", 200).then((data)=> {
    console.log(data);
})