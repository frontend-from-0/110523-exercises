/* array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
  
- callback: A function that is executed on each element of the array. It takes four arguments:
  
- accumulator: The accumulated value that is returned after each iteration. It starts with the value of initialValue on the first iteration and is the result of the previous iteration in subsequent iterations.
- currentValue: The current element being processed in the array.
- currentIndex: The index of the current element being processed.
- array: The array on which reduce() was called.

- initialValue: An optional initial value for the accumulator. If not provided, the first element of the array is used as the initial value and the iteration starts from the second element.
*/


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
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
});


console.log('ex1Result', ex1Result);

// Exercise 2:
// Find the maximum value in the given array. (Hint: Use -Infinity to compare values to)
const numbersEx2 = [8, 3, 11, 6, 4];

const maxVal = numbersEx2.reduce((acc, val) => {
   return acc < val ? val : acc;
}, -Infinity);
console.log('maxVal', maxVal);

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

//EXPLANATION: In this reduce function, an empty object is given as an initial accumulator, that's how we get an output as an object. At first step, empty object(acc) and first value 'a' are compared, if logic( accumulator[currentValue]) becomes false, else condition becomes true and we get a: 1 inside the object and return it. Now we have {a:1} object as accumulator, currentValue is b, again else condition and we have {a: 1, b: 1}. At the other step, currentValue is 'a' again, but this time we have  accumulator[currentValue] inside the object, if condition becomes true we increment accumulator[currentValue], value of a becomes 2, we have {a: 2, b:1} and logic goes on like this until it finishes.


// Exercise 4:
// Calculate the average of all numbers in the given array.
const numbersEx4 = [10, 20, 30, 40, 50];

const averageOfNumbers = numbersEx4.reduce((acc, val) => {
  return acc + val;
}, 0) / numbersEx4.length;

console.log('averageOfNumbers', averageOfNumbers);


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

console.log(uniqueCount); // Output: 5

//EXPLANATION: Function takes an empty array as initial accumulator that's how it gives an array as output. In every step, it checks the array and the currentValue and if it does not include currentValue, it pushes the value inside the array. If it includes the currentValue, it doesn't do anything. In that way array does not contain the same values. It returns the array. By adding length property we get the count of unique values inside the array.







