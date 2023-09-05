// -=-=-=-=-=-=-=-= 1 =-=-=-=-=-=-=-=-
debugger;
class Circle {

    constructor({x, y}, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    getLength() {
        return 2 * Math.PI * this.radius;
    }

    static getLengthFromRadius(value) {
        return 2 * Math.PI * value;
    }

    getCopy() {
        return new Circle({x: this.x, y: this.y}, this.radius);
    }

    static createCircle(x, y, r) {
        let result = new Circle({x, y}, r);
        return result;
    }

    checkPointInside(point) {
        let result = Math.sqrt((point.x - this.x) ** 2 + ((point.y - this.y) ** 2));
        return this.radius >= result;
    }

    toString() {
        return `Circle with center in ${this.x},${this.y} and radius ${this.radius}`;
    }
}

const myCircle = new Circle(2, 2, 5);
console.log(myCircle.getLength().toFixed(1));
console.log(Circle.getLengthFromRadius(10).toFixed(1));
// const circle = new Circle({x: 2, y: 2}, 20);
// const pointInside = {x: 3, y: 3};
// console.log(circle.checkPointInside(pointInside));
// const circle = new Circle({x: 1, y: 1}, 2);
// console.log(String(circle));
const circle = Circle.createCircle(10, 15, 34)
console.log(String(circle))
const randomRadius = Math.floor(Math.random() * 10) + 1;
const circleFirst = new Circle({x: 1, y: 1}, randomRadius)
const circleSecond = circleFirst.getCopy()
console.log(circleFirst === circleSecond)
console.log(String(circleFirst) === String(circleSecond))






// -=-=-=-=-=-=-=-= 2 =-=-=-=-=-=-=-=-

const mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
};

function propsCount(currentObject) {
    let current = 0;
    for (let i in currentObject) current++;
    return current;
}

console.log(propsCount(mentor));



// -=-=-=-=-=-=-=-= 3 =-=-=-=-=-=-=-=-

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.surname} ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getFullName(middleName) {
        return `${this.surname} ${this.name} ${middleName}`;
    }

    getCourse() {
        let currentYear = 2023;
        return currentYear - this.year;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.getFullName("Petrovych"));
console.log("Current course: " + stud1.getCourse());


// -=-=-=-=-=-=-=-= 4 =-=-=-=-=-=-=-=-
debugger;
class Marker {
    #color;
    #ink;
    
    constructor(color) {
        this.#color = color;
        this.#ink = 100;
    }

    get color() {
        return this.#color;
    }

    get ink() {
        return this.#ink = 100;
    }

    print(text) {
        let result = text.split('');
        for (let i of result) {
            if (this.#ink <= 0) break;
            if (i !== ' ') this.#ink -= 10;
            console.log(i);
        }
    }
}

class RefillableMarker extends Marker {
    constructor(color) {
        super(color);
    }

    refill() {
        if (this.ink === 0) {
            return this.ink = 100;
        }
    }
}



const marker2 = new Marker("red");
marker2.print("Hello World!");
marker2.print("Hello World!");
marker2.print("Hello World!");
console.log(marker2.color = 'blue');

const marker = new RefillableMarker("red");
marker.print("Lorem ipsum dolor sit amet");
marker.print("Lorem ipsum dolor sit amet");
marker.refill();
marker.print("Lorem ipsum dolor sit amet");
console.log(Object.keys(marker));
marker.color = 'blue';



// -=-=-=-=-=-=-=-= 5 =-=-=-=-=-=-=-=-
debugger;
class Worker {
    #fullName;
    #dayRate;
    #workingDays;
    #experience;

    constructor(fullName, dayRate, workingDays, experience) {
        this.#fullName = fullName;
        this.#dayRate = dayRate;
        this.#workingDays = workingDays;
        this.#experience = experience;
    }

    get fullName() {
        return this.#fullName;
    }
    set fullName(value) {
        if (typeof value === 'string')
            return this.#fullName = value;
    }

    get dayRate() {
        return this.#dayRate;
    }
    set dayRate(value) {
        if (typeof value === 'number')
            return this.#dayRate = value;
    }

    get experience() {
        return this.#experience;
    }
    set experience(value) {
        if (!Number.isNaN(value))
            return this.#experience = value;
    }

    get workingDays() {
        return this.#workingDays
    }

    addWorkingDays(value) {
        if (typeof value === 'number')
            return this.#workingDays += value;
    }

    getSalary() {
        return this.#dayRate * this.#workingDays;
    }

    getSalaryWithExperience() {
        return this.#dayRate * this.#workingDays * this.#experience;
    }

    static sortBySalary(arr) {
        let result = [...arr];
        result.sort((a, b) => {
           return a.getSalaryWithExperience() - b.getSalaryWithExperience();
        })
        return result;
    }
}


const dayRate = Math.floor(Math.random() * (901)) + 100;
const workingDays = Math.floor(Math.random() * (31)) + 1;
const experience = (Math.random() * 2 + 1).toFixed(2);
const worker = new Worker("Adam Oliver", dayRate , workingDays , experience);
console.log(worker.getSalary() === dayRate * workingDays )
console.log(worker.getSalaryWithExperience() === dayRate * workingDays * experience )
