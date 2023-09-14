function validateEmail(email) {
    const i = /[\w\.\%\+\-]+@[\w\.\-]+\.[A-Za-z]{2,}/gm;
    return i.test(email);
}

let email = "john.doe@example.com";
console.log(validateEmail(email));