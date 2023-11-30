/* array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
  
- callback: A function that is executed on each element of the array. It takes four arguments:
  
- accumulator: The accumulated value that is returned after each iteration. It starts with the value of initialValue on the first iteration and is the result of the previous iteration in subsequent iterations.
- currentValue: The current element being processed in the array.
- currentIndex: The index of the current element being processed.
- array: The array on which reduce() was called.

- initialValue: An optional initial value for the accumulator. If not provided, the first element of the array is used as the initial value and the iteration starts from the second element.
*/

console.log(".....Exercise1.....");
// Exercise 1:
// Calculate the sum of all numbers in the given array.
const numbersEx1 = [1, 2, 3, 4, 5];

// numbersEx1.reduce((accumulator, currentValue, currentIndex, array) => {
//   console.log('accumulator', accumulator);
//   console.log('currentValue', currentValue);
//   console.log('currentIndex', currentIndex);
//   console.log('array', array);
// }, 0);

const ex1Result = numbersEx1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});


console.log('ex1Result', ex1Result);


console.log(".....Exercise2.....");
// Exercise 2:
// Find the maximum value in the given array. (Hint: Use -Infinity to compare values to)
const numbersEx2 = [8, 3, 11, 6, 4];

const ex2Result = numbersEx2.reduce((accumulator,currentValue) => {
  return Math.max(accumulator,currentValue);
},-Infinity);

console.log("ex2Result : ", ex2Result);
console.log(".....Exercise3.....");
// Exercise 3: Explain the code
// Count the occurrences of each element in the given array and return an object with the counts.
const elements = ['a', 'b', 'a', 'c', 'b', 'a'];

const elementCounts = elements.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(elementCounts); // Output: { a: 3, b: 2, c: 1 }

//it's checking if accumulator's currentValue is the same if so it increase the index, and at the end it gives me an object with the keys and value. Thats how ı can explain it but ı did not understand well. accumulator[currentValue] that gives me an index but at the end how it gives a:3... ı did not understand that part.x 


console.log(".....Exercise4.....");
// Exercise 4:
// Calculate the average of all numbers in the given array.
const numbersEx4 = [10, 20, 30, 40, 50];

const ex4Result = numbersEx4.reduce((accumulator, currentValue) => {
  return (accumulator + currentValue); 
})/ numbersEx4.length ;

console.log("ex4Result : ",ex4Result);

console.log(".....Exercise5.....");
// Exercise 5: Explain the code below
// Count the number of unique elements in the array.
const numbersEx5 = [1, 2, 3, 2, 4, 3, 5];
const numbers = [1, 2, 3, 2, 4, 3, 5];

const uniqueCount = numbers.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []).length;

//Explanation of Exercises5;
// it's creating a new array, it checks if accumulator include the currentValue or no. If accumulator includes currentValue it does nothing if not include than it push the currentValue to the new array. And finally it checvks the length of new array by .length property.

console.log(uniqueCount); // Output: 5







