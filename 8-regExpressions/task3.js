let regex = /([\w\!]+)\s([\w\!]+)/g;

let text = "Java Script"
let swappedText = text.replace(regex, "$2 $1");
console.log(swappedText);

let text2 = "world! Hello"
let swappedText2 = text2.replace(regex, "$2 $1");
console.log(swappedText2);