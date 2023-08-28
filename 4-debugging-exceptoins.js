// -=-=-=-=-=-=-=-=-=-= 1 =-=-=-=-=-=-=-=-=-=-

function sumSliceArray(arr, first, second) {
    let result;
    if (!arr || arr.length === 0) {
        // console.log('Incorect arr');
        throw new TypeError('Incorect arr');
    }
    else if (first > arr.length - 1 || first < 0) {
        // console.log('Incorect fist index');
        throw new RangeError('Incorect fist index');
    }
    else if (second > arr.length - 1 || second < 0) {
        // console.log('Incorect second index');
        throw new RangeError('Incorect second index');
    }

    result = arr[first] + arr[second];
    return result;
}

try {
    let numberPlayer = [1, 2, 3, 4, 5]
    console.log(sumSliceArray(numberPlayer, 1, 3));
} catch (err) {
    if (err instanceof TypeError) {
        console.warn(err.message);
        console.warn(err.name);
    }
    if (err instanceof RangeError) {
        console.error(err.message);
        console.error(err.name);
    }
}

// -=-=-=-=-=-=-=-=-=-= 2 =-=-=-=-=-=-=-=-=-=-
function checkAge() {
    let age, name, status;

    age = prompt('Enter your age:', 0);
    if (age === null || age === '') {
        throw new TypeError('The field of age is empty')
    }
    else if (isNaN(age) || age < 18 || age > 70) {
        throw new RangeError('Age is not corect')
    }

    name = prompt('What is your name?:');
    if (name === null || name.length < 1) {
        throw new TypeError('The field of name is empty')
    }

    status = prompt(`Enter your status: 'admin' or 'moderator' or 'user'`);
    if (status.toLowerCase() !== 'admin' &&
        status.toLowerCase() !== 'moderator' &&
        status.toLowerCase() !== 'user') {
        throw new EvalError('Status is incorect')
    }

    return alert('Wellcome!!! You can see our movies');
};

try {
    checkAge();
} catch (err) {
    if (err instanceof TypeError) {
        console.error(err.message);
        alert('The field is empty! All fields must be filled');
    }
    else if (err instanceof RangeError) {
        console.error(err.message);
        alert('You can not see our movies');
    }
    else if (err instanceof EvalError) {
        console.error(err.message);
        alert('Your status is incorect. Please try again');
    }
}

// -=-=-=-=-=-=-=-=-=-= 3 =-=-=-=-=-=-=-=-=-=-
function calcRectangleArea(width, height) {
    width = +prompt('Enter width:', 0);
    if (Number.isNaN(width) || typeof width === 'string') {
        throw new TypeError('Value is not a number');
    }
    else if (width <= 0) {
        throw new RangeError('Value must be greated then 0');
    }
    height = +prompt('Enter height:', 0);
    if (Number.isNaN(height) || typeof height === 'string') {
        throw new TypeError('Value is not a number');
    }
    else if (height <= 0) {
        throw new RangeError('Value must be greated then 0');
    }

    return alert(`Square = ${width * height}`);
}

try {
    calcRectangleArea();
} catch (err) {
    if (err instanceof TypeError) {
        console.error(err.message);
        console.log('It is not a number. Please try again');
    }
    else if (err instanceof RangeError) {
        console.error(err.message);
        console.log('Value must be greated then 0. Please try again');
    }
} finally {
    alert('If you want to repeat, please update page!!')
}

// -=-=-=-=-=-=-=-=-=-= 4 =-=-=-=-=-=-=-=-=-=-
class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}

function showMonthName(month) {
    month = +prompt('Enter month number', 1) - 1;
    const allMonth = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    if (month < 0 || Number.isNaN(month) || month > allMonth.length - 1) {
        throw new MonthException('Incorrect month number');
    }
    return alert(allMonth[month]);
}

try {
    showMonthName();
} catch (myerror) {
    if (myerror instanceof MonthException) {
        console.log(myerror.name);
        alert(myerror.message);
    }
}

// -=-=-=-=-=-=-=-=-=-= 5 =-=-=-=-=-=-=-=-=-=-
class MyError {
    constructor(message) {
        this.name = 'Error';
        this.message = message;
    }
}

let users = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 }
]

function showUser(id) {
    let result;
    if (id < 0) {
        throw new MyError('Id must not be negative');
    }
    result = users.find(i => i.id === id);
    if (result === undefined) {
        throw new MyError('Id not finded');
    }
    return result;
}

try {
    showUser(id);
} catch (err) {
    if (err instanceof MyError) {
        console.log(err.message);
    }
}

showUsers([1, 2, 3, -3]);

function showUsers(ids) {
    let arr = [];
    for (let i = 0; i < ids.length; i++) {
        arr.push(showUser(ids[i]));
    }
    return console.log(arr);
}
