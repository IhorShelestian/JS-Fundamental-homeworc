let names = {
    // first: 'Tom',
    // second: 'Sam',
    // third: 'Ray'
};

let {first: f = "Name №1", second: s = "Name №2", third: t = "Name №3"} = names;

console.log(names);
console.log(f);
console.log(s);
console.log(t);