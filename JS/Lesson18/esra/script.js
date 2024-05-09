// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10
const integersEx1 = [1, 2, 3, 4];
const integersEx1V2 = [10, 2, 30, 4];

function integersToSumNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};


console.log("Exercise 1: ", integersToSumNumbers(integersEx1));
console.log("Exercise 1: ", integersToSumNumbers(integersEx1V2));
console.log('----------------------------');
// 2. Write a function that takes an array of integers and returns the average of all elements.
//Input: [1, 2, 3, 4]
// Output: 2.5
const integersEx2 = [1, 2, 3, 4];
const integersEx2V2 = [10, 2, 30, 4, 5];

function getAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
};

console.log("Exercise 2:", getAverage(integersEx2V2
  ));
console.log('----------------------------');
// 3. Write a function that takes an array of strings and concatenates them together adding spaces.
// Input: ["Hello", "World", "!"]
// Output: "Hello World !"
let stringEx3 = ["Hello", "World", "!"];

function concatenateStrings(array) {
  let sentence = '';
  // TODO: if the next character is one of ?, '.', ',', etc. do not add a space before that character
  for (let i = 0; i < array.length; i++) {
    sentence = sentence + ' ' + array[i];
  }
  return sentence.replaceAll(' !', '!'); 
  };

  /*const specialCharacters = ['.', ',', ':', '?', '!', ';'];
.... 
const isSpecialCharacter = specialCharacters.includes(array[i]);
if (isSpecialCharacter) {
sentence = sentence + array[i];
} else {
sentence = sentence + ' ' + array[i];
}*/ //second way

console.log("Exercise 3:", concatenateStrings(stringEx3));

console.log('----------------------------');
// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 3, 7]
let arrayEx4 = [1, 2, 3, 4, 7, 10];

function filterOddNumbers(arr) {
  return arr.filter(number => number % 2 !== 0);
}

const oddNumbers = filterOddNumbers(arrayEx4);

console.log("Exercise 4:", oddNumbers);
console.log('----------------------------');
// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10]
const testArrayEx5 = [1, 2, 3, 4, 7, 10];

function getEvensInIntegers(arr) {
  const evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
}    
return evenNumbers;
}
const evenNumbers = getEvensInIntegers(testArrayEx5);
 
console.log('Exercise 5:', evenNumbers);
console.log('----------------------------');
// 6. Write a function that takes an array and a value, and returns a new array with all occurrences of the value removed.
// Input: ([1, 2, 3, 4, 2], 2)
// Output: [1, 3, 4]
const testArrayEx6 = [1, 2, 3, 4, 2];
function removeValue(array, valueToRemove) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] !== valueToRemove) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log("exercise 6:", removeValue(testArrayEx6, 2));
console.log("exercise 6:", testArrayEx6);

console.log('----------------------------');
// 7. Write a function that takes an object and returns the keys as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["name", "age", "city"]
const testObjEx7 = {name: "John", age: 30, city: "New York"};

function objectToKey(obj) {
  return Object.keys(obj);
}

console.log("exercise 7:" , objectToKey(testObjEx7));
console.log('----------------------------');
// 8. Write a function that takes an object and returns the values as an array.
// Input: {name: "John", age: 30, city: "New York"}
// Output: ["John", 30, "New York"]
const testObjEx8 = {name: "John", age: 30, city: "New York"};

function getObjReturnArray(obj) {
return Object.values(obj);
}

console.log("exercise 8:", getObjReturnArray(testObjEx8));
console.log('----------------------------');
// 9. Write a function that takes an object and a key, and returns true if the key exists in the object, otherwise false.
// Input: ({name: "John", age: 30, city: "New York"}, "age")
// Output: true
// Input: ({name: "John", age: 30, city: "New York"}, "surname")
// Output: false
const testObjEx9 = {name: "John", age: 30, city: "New York"};
function doesKeyExistInTheObject(obj, key){ // isKeyOfObject
  return obj.hasOwnProperty(key);
  // if(obj.hasOwnProperty(key)){
  //   return true;
  // }else {
  //   return false;
  // }
  // obj.hasOwnProperty(key) ? true : false; 
};

console.log("Ex 9:", doesKeyExistInTheObject(testObjEx9, "name"));
console.log("Ex 9-a:", doesKeyExistInTheObject(testObjEx9, "goksel"));
console.log("Ex 9-a:", doesKeyExistInTheObject(testObjEx9, "length"));

console.log('----------------------------');
// 10. Write a function that takes an object and a key-value pair, and adds the key-value pair to the object.
// Input: ({name: "John", age: 30}, "city", "New York")
// Output: {name: "John", age: 30, city: "New York"}
const testObjEx10 = {name: "John", age: 30};
function addKeyValueObject (obj, key, value) {
  obj[key]=value;
  return obj;
};
console.log("Exercise 10:", addKeyValueObject(testObjEx10, "city", "New York"));


// Dot notation - object.objectKey -> if objectKey is a valid JS value (e.g. 
// string without spaces: name, surname, full_name, fullName)
// Bracket notation - object[objectKey] -> if objectKey is a VARIABLE, 
// or everything else not supported by dot notation (object[name], object[surname],
//  object["full name"])

console.log('----------------------------');
// 11. Write a function that takes an object and a key, and removes the key-value pair from the object.
// Input: ({name: "John", age: 30, city: "New York"}, "city")
// Output: {name: "John", age: 30}
const testObjEx11 = {name: "John", age: 30, city: "New York"};

function removeFromObject(object, keyToRemove) {
if (objects.hasOwnProperty(keys)) {
  delete objects[keys];
}
return objects;
}

const keys = 'city';
const updatedObject = removeFromObject(testObjEx11, keys);


console.log('Exercise11', updatedObject);
// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}
const array1Ex12 = ["name", "age", "city"];
const array2Ex12 = ["John", 30, "New York"];

function twoArraysToTheTwoObjs(keys, values) {
  if (keys.length !== values.length) {
    throw new Error('Arrays must be of equal length');
}
const result = {};
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }

  return result;
}


const resultObject = twoArraysToTheTwoObjs(array1Ex12, array2Ex12);

console.log('Exercise12', resultObject);


// 13. Array Destructuring
// Given the following array, use array destructuring to assign the values of x, y, and z to their respective variables: 
const coordinates = [10, 20, 30];
const x = coordinates[0];
const y = coordinates[1];
const z = coordinates[2];
const [x1, y1, z1] = coordinates; // Square brakets ([]) should be used for destructuring arrays, curly brackets ({}) should be used for destructuring objects

console.log('Ex13', coordinates);
console.log('Ex13', y, y1);

// 14. Object Destructuring
// Given the following object, use object destructuring to assign the values of name and age to their respective variables:
const personE14 = {
  name14: 'John Doe',
  age14: 25,
};

const { name14, age14 } = personE14;
console.log('Exercise14', name14);
console.log('Exercise14', age14);

// 15. Array Destructuring with Default Values
// Given the following array, use array destructuring with default values to assign the values of a, b, and c, with default values of 1, 2, and 3 respectively:
const numbers = [4];

const [a = 1, b = 2, c = 3] = numbers;
console.log('Exercise15', a);
console.log('Exercise15', b);
console.log('Exercise15', c);


// 16. Object Destructuring with Renaming
// Given the following object, use object destructuring with renaming to assign the value of name to a variable named fullName:
const personE16 = {
  name: 'John Doe',
};

const { Fullname } = personE16;
console.log('Exercise16', personE16);


// 17. Nested Object Destructuring
// Given the following nested object, use object destructuring to assign the values of name, age, and city to their respective variables:
const personE17 = {
  name: 'John Doe',
  age: 25,
  address: {
  city: 'New York',
  },
};

const { name, age, address: { city } } = personE17;

console.log('Exercise17', personE17);
console.log('Exercise17', city);

