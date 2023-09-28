let data = {
    names: [ 'Sam', 'Tom', 'Ray', 'Bob' ],
    ages: [ 20, 24, 22, 26 ]
}
let {names: [name1, name2, name3], ages: [age1, age2, age3]} = data;

console.log(data);
console.log(name1);
console.log(name2);
console.log(name3);