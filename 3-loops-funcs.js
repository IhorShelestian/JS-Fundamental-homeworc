// --------------- 1 ---------------
function createArray(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

console.log(createArray(2, 9));

// --------------- 2 ---------------
function toSeeRangeNumber(a, b) {
    let arr = [];
    for (let i = 1; i <= b; i++) {
        let j = 0;
        while (j < i) {
            arr.push(a * i);
            ++j;
        }
    }
    return arr;
}

console.log(toSeeRangeNumber(1, 6));

// --------------- 3 ---------------
function randArray(x) {
    let arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(Math.floor(Math.random() * 501))
    }
    return arr;
}

console.log(randArray(5));

// --------------- 4 ---------------
function compact(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }

    }
    return newArr;
}

console.log(compact([1, 2, 3, 2, 4, 5, 5]));

// --------------- 5 ---------------
function sortArray(arr) {
    arr = arr.flat(Infinity);
    let words = [];
    let numbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            words.push(arr[i]);
        }
        if (typeof arr[i] === 'number') {
            numbers.push(arr[i]);
        }
    }
    return [words, numbers];
}

console.log(sortArray([5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun']));

// --------------- 6 ---------------
function calc(a, b, op) {
    if (op === 1) return a - b;
    else if (op === 2) return a * b;
    else if (op === 3) return a / b;
    else return a + b;
}

console.log(calc(10, 3, 1));

// --------------- 7 ---------------
function findUnique(arr) {
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) return false;
    }
    return true;
}

console.log(findUnique([1, 2, 3, 21, 5, 3]));
