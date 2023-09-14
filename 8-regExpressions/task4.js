let regex = /^[1-9][0-9]{3}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/gm;

let cardNumber = "1234-5678-9012-3456"
let isValid = regex.test(cardNumber);
console.log(isValid);