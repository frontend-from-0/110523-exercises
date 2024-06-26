console.log("----Ex1-----");

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


console.log("----Ex2-----");

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
    constructor(color, sideLength){
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



console.log("----Ex3-----");
// 3. Create a Vehicle class with make, model, and year properties, and a start() method that logs a message to the console indicating that the vehicle has started. Then create a Car class that extends the Vehicle class and adds a numDoors property. Override the start() method in the Car class to log a different message to the console indicating that the car has started.



class Vehicle {
    constructor(make, model, year){
        this._make = make;
        this._model = model;
        this._year = year;
    }

    start() {
        return `${this._make} ${this._model} car produced in ${this._year}.`
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors){
        super(make,model,year);
        this._numDoors = numDoors;
    }
    start() {
        return `${this._make} ${this._model} car with ${this._numDoors} doors produced in ${this._year}.`
    }
}

const suv = new Vehicle("Mercedes", "Gla", "2020");
const minibus = new Car("Ford", "Connect", "2013", 4);
console.log(suv.start());
console.log(minibus.start());


console.log("----Ex4-----");
// 4. Create a BankAccount class with balance and interestRate properties, and deposit() and withdraw() methods. Add a transactionHistory property that is an array of objects representing each transaction made on the account, with properties for type (either "deposit" or "withdrawal"), amount, and date ({type: "withdrawal", amount: amount, date: new Date().toLocaleDateString()}). Implement deposit() and withdraw() methods that add new transactions to the transactionHistory array. Implement a get transactionHistory() getter method that returns a copy of the transaction history array, and a get currentBalance() getter method that calculates and returns the current balance of the account based on the transaction history.

class BankAccount {
    constructor(balance = 0, interestRate = 0) {
      this.balance = balance;
      this.interestRate = interestRate;
      this._transactionHistory = [];
    }
  
    deposit(amount) {
      if (amount <= 0) {
        return "Deposit amount must be greater than zero.";
      }
      this.balance += amount;
      this._transactionHistory.push({
        type: "deposit",
        amount: amount,
        date: new Date().toLocaleDateString()
      });
      return `Successfully deposited $${amount}.`;
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        return "Withdrawal amount must be greater than zero.";
      }
      if (amount > this.balance) {
        return "Insufficient funds.";
      }
      this.balance -= amount;
      this._transactionHistory.push({
        type: "withdrawal",
        amount: amount,
        date: new Date().toLocaleDateString()
      });
      return `Successfully withdrew $${amount}.`;
    }
  
    get transactionHistory() {
      return this._transactionHistory.slice();
    }
  
    get currentBalance() {
      let balance = this.balance;
      for (const transaction of this._transactionHistory) {
        if (transaction.type === "deposit") {
          balance += transaction.amount;
        } else if (transaction.type === "withdrawal") {
          balance -= transaction.amount;
        }
      }
      return balance;
    }
  }
  
  const account = new BankAccount(1000, 0.05); 
  
  console.log(account.deposit(500)); 
  console.log(account.withdraw(200)); 
  console.log("Transaction History:");
  console.log(account.transactionHistory); 
  console.log("Current Balance:", account.currentBalance);
  
  


