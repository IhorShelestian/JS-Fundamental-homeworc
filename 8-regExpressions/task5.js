function checkLogin(login) {
    let regexLogin = /^[A-Za-z\.][\w\.]{1,9}$/g;
    let regexNumber = /([0-9]+\.?[0-9]+)|(\d+)/g;
    const res = login.split(regexNumber).filter(x => !isNaN(x)).filter(x => x !== '');

    let result = {
        isValid: regexLogin.test(login),
        numbers: res
    }

    return result;
}

let result = checkLogin("user1.23");
console.log(result.isValid);
console.log(result.numbers);

let result2 = checkLogin("a1b2.2c3");
console.log(result2.isValid);
console.log(result2.numbers);