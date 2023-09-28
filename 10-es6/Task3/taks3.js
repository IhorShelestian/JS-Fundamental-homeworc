function mul(...object) {
    let arr = [];
    for (const iterator of object) {
        if (typeof iterator === 'number') {
            arr.push(iterator);
        }
    }
    if (arr.length === 0) {
        return 0;
    }
    let result = arr.reduce((sum, curr) => {
        return sum * curr;
    }, 1)
    return result;
}

// function mul(...object) {
//     let result = 1;
//     for (const iterator of object) {
//         if (typeof iterator === 'number') {
//             result *= iterator;
//         }
//         result = result;
//     }
//     return result === 1 ? 0 : result;
// }

// function mul(...object) {
//     let result = object.reduce((sum, curr) => {
//         if (typeof curr === 'number') {
//             return sum * curr;
//         }
//         return sum;
//     }, 1)
//     return result !== 1 ? result : 0;
// }

console.log(mul(10, "str", 2, 3, true));
console.log(mul(null, "str", false, true));
console.log(mul(2, "5", NaN, 10));
console.log(mul(1, "5", true));