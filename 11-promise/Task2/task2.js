
function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        for (let x of arr) {
            if (isNaN(x)) {
                let err = "Error! Incorrect array!";
                reject(err);
                return;
            }
        };
        let result = arr.reduce((sum, cur) => sum * cur, 1);
        resolve(result);
    });
}

const randomValue = Math.floor(Math.random() * 10) + 1;
calcArrProduct([1, 2, 3])
    .then((product) => {
        console.log(product);
        return calcArrProduct([1, 20, randomValue, 0.5]);
    })
    .then((product) => {
        console.log(product === randomValue * 10);
        return calcArrProduct([5, "user2", 7, 12]);
    })
    .then((product) => {
        console.log(product);
    })
    .catch((error) => console.log(error));