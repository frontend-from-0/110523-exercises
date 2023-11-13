// 1. Create a Person class with name, age, and gender properties, and a greet() method that logs a greeting message to the console. Then create a Student class that extends the Person class and adds a major property. Override the greet() method in the Student class to log a different greeting message to the console. Create 2 variables, one of type Person and one of type Student and log them to console.

class Person {
    constructor(name, age, gender) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }
    greet() {
        return `Hi, I\'m ${this._name} ${this._age} ${this._gender}`;
    }
}

class Student extends Person {
    constructor(name, age, gender, major) {
        super(name, age, gender);
        this._major = major;
    }
    greet() {
        return `Hi, I\'m ${this._name} ${this._age} ${this._gender} ${this._major}`;
    }
}

const esra = new Person('Esra', 30, 'female');
const ali = new Student('Ali', 25, 'male', 'CS');

console.log(esra.greet());
console.log(ali.greet());

// 2. Create a Shape class with name and color properties, and a describe() method that logs a description of the shape to the console (e.g. "This is a blue square"). Then create a Square class that extends the Shape class and adds sideLength. Override the describe() method in the Square class to log a description of the square to the console (e.g. "This is a blue square with a side length of 5 and an area of 25"). Add area method to calculate the area of the Square.

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }
    describe() {
        return `This is a ${this._color} ${this._name}`
    }
}

class Square extends Shape {
    constructor(color, sideLength) {
        super('square', color)
        this._sideLength = sideLength; // _ is used to show that the value indise an object is private
    }

    describe() {
        return `This is a ${this._color} ${this._name} with a side length of ${this._sideLength}.`
    }
    area() {
        return this._sideLength * this._sideLength;
    }
}

const triangle = new Shape('triangle', 'Blue');
const square = new Square('Blue', 5);

console.log(triangle.describe());
console.log(square.describe());
console.log(square.area());

console.log(square);




// 3. Create a Vehicle class with make, model, and year properties, and a start() method that logs a message to the console indicating that the vehicle has started. Then create a Car class that extends the Vehicle class and adds a numDoors property. Override the start() method in the Car class to log a different message to the console indicating that the car has started.

class Vehicle {
    constructor(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }
    start() {
        return `The vehicle ${this._make} ${this.model} produced in ${this._year} has started!`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year)
        this._numDoors = numDoors;
    }
    start() {
        return `The car ${this._make} ${this.model} with ${this._numDoors} produced in ${this._year} has started!`;
    }
}

const truck = new Vehicle('BM', 'Y85', 2018);
console.log(truck);
console.log(truck.start());
const volvo = new Car('Volvo', 'XC90', 2021, 4);
console.log(volvo);
console.log(volvo.start());


// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. Add a transactionHistory property that is an array of objects representing each transaction made on the account, with properties for type (either "deposit" or "withdrawal"), amount, and date ({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. Implement a get transactionHistory() getter method that returns a copy of the transaction history array, and a get currentBalance() getter method that calculates and returns the current balance of the account based on the transaction history.

class BankAccount {
    constructor(balance, interestRate) {
        this._balance = balance;
        this._interestRate = interestRate;
        this._transactionHistory = [];
    }

    deposit(amount) {
        if(amount > 0){
        this._balance += amount;
        return this._transactionHistory.push({ type: 'deposit', amount: amount, date: new Date().toLocaleDateString() });
        }
    }

    withdraw(amount) {
        if (amount < this._balance && amount > 0) {
            this._balance -= amount;
            return this._transactionHistory.push({ type: 'withdrawal', amount: amount, date: new Date().toLocaleDateString() })
        } else {
           console.log('Your current balance is not enough.')
        };
    }

    get transactionHistory() {
        return this._transactionHistory;
    }

    get currentBalance() {
        return `Your current balance is: ${this._balance}`;
    }
}

let personOne = new BankAccount(50000, 1.12);
personOne.deposit(2000);
personOne.withdraw(10000);
personOne.withdraw(20000);
personOne.deposit(3000);
personOne.deposit(1000);
console.log(personOne.transactionHistory);
console.log(personOne.currentBalance);
personOne.withdraw(100000);