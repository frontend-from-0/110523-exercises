// 1. Write a loop that prints out the numbers from 1 to 10.
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log( 'exercise1' + '- - - - - - - - - - - - - - - - - ');
// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7...
for(let i = 1; i <= 20; i = i+2) {
    console.log(i);
}

console.log('exercise2' + '- - - - - - - - - - - - - - - - - ');
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...
for(let i = 2; i <=20; i = i+2) {
  console.log(i);
}


console.log('exercise3' + '- - - - - - - - - - - - - - - - - ');
// 4. Write a loop that finds the maximum number in an array of numbers.
const findMaxNumberInArray = [300, 10, 23, 40, 505, 12, 7, 4, 505];
let maxNumber4 = findMaxNumberInArray[0];
for (let i = 0; i < findMaxNumberInArray.length; i++) {
  if(maxNumber4 < findMaxNumberInArray[i]){
    // 1. 300 < 10 => maxNumber4 (300) 
    // 2. 300 < 23 => maxNumber4 (300)
    // 3. 300 < 40 => maxNumber4 (300)
    // 4. 300 < 505 => maxNumber4 (505) | 40 < 505 => [300, 10, 23, 40 => 505, 505, 12, 7, 4, 505];
    // 5. 505 < 12 => maxNumber4 (505)
    // 6. 505 < 7 => maxNumber4 (505)
    // 7. 505 < 4 => maxNumber4 (505)
    // 8. 505 < 506 => maxNumber4 (506)
    maxNumber4 = findMaxNumberInArray[i];
  }
}
console.log(maxNumber4);

console.log('exercise4' + '- - - - - - - - - - - - - - - - - ');
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [2, 10, 23, 42, 8, 12, 7, 3];
let minNumber5 = findMinNumberInArray[0];
for (let i = 1; i > findMinNumberInArray.length; i++) {
  if(minNumber5 > findMinNumberInArray[i]) {
    minNumber5 = findMinNumberInArray[i];
  }
}
console.log(minNumber5);
console.log('exercise5' + '- - - - - - - - - - - - - - - - - ');
// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
const arrayOfWords = string.split(' ');
let reverseString6 = '';
for (let i = string.length - 1; i >= 0; i--) {
    reverseString6 = reverseString6 + string[i];
}
console.log(reverseString6);

let reversedArray6 = [];
for (let i = arrayOfWords.length - 1; i >= 0; i--) {
  reversedArray6 = reversedArray6 + ' ' + arrayOfWords[i];
}
console.log(reversedArray6);

console.log('exercise6' + '- - - - - - - - - - - - - - - - - ');
// 7. Write 'a while loop that counts from 10 to 1 and prints out each number.
let i = 10;
while(i >= 1) {
  console.log(i);
  i--;
}
for(let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log('exercise7' + '- - - - - - - - - - - - - - - - - ');
// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.
let count = 0;
let number;

do { number = Math.floor(Math.random() * 10) + 1;

count++; } 
while (number <= 8);

console.log('exercise8', count);


console.log('exercise8' + '- - - - - - - - - - - - - - - - - ');
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.
let j = 1;
do {
  console.log(j);
  j++;
}
while (j < 11);

console.log('exercise9' + '- - - - - - - - - - - - - - - - - ');
// The for...in loop in JavaScript is used for iterating over the properties of an object. 
// for (variable in object) {
//   // code to be executed for each property
// }

// 10. Write a for...in loop that prints out the keys and values of an object.
const person = {name: "John", surname: "Doe", age: 30, city: "New York"};

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('key:' + key + ' ' + 'Value:' + person[key]);
  }
}


console.log('exercise10' + '- - - - - - - - - - - - - - - - - ');
// 11. Write a for...in loop that sums the values of an object.
const obj = {a: 10, b: 20, c: 30, d: 23};

let sum = 0;

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    sum += obj[key];
  }
}
console.log('The sum of values in the object is:' + sum);
console.log('exercise11' + '- - - - - - - - - - - - - - - - - ');