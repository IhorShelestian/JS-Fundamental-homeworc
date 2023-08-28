// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
//     read() {
//         this.a = +prompt('Enter a', 0);
//         this.b = +prompt('Enter b', 0);
//     }
// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());





// debugger
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         alert (this.step);
//         return this;
//     }
// }

// ladder.down().showStep().down().showStep();




// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     };
//     this.sum = function() {
//         return this.a + this.b;
//     };
//     this.mul = function() {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert('Sum:' + calculator.sum());
// alert('Mul:' + calculator.mul());




// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//         this.value += +prompt('How many do you want to add?', 0);
//     };
// };

// let accumulator = new Accumulator(10);
// accumulator.read();
// accumulator.read();

// alert(accumulator.value);
