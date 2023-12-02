// 1. Write a function that takes an array of integers and returns the sum of all elements.
// Input: [1, 2, 3, 4]
// Output: 10
const integersEx1 = [1, 2, 3, 4];
const integersEx1V2 = [10, 2, 30, 4];
function sumAllElements(int){
  let sum = 0;
  for(let i = 0; i < int.length; i++){
    sum += int[i];
  }
  return sum;
}



console.log("Exercise 1: ", sumAllElements(integersEx1));
console.log("Exercise 1-a: ", sumAllElements(integersEx1V2));
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
let stringEx3 = ["Hello", "World", "!", "I am", "web developer", "?"];

function concatenateStrings(array) {
  let sentence = '';
  // TODO: if the next character is one of ?, '.', ',', etc. do not add a space before that character
  for (let i = 0; i < array.length; i++) {
    const specialCharacter = ["?",".",",","!",";",":","'","-","_","="];
    if(specialCharacter.includes(array[i])){
      
      sentence = sentence + array[i];
    }else {
      sentence = sentence + " " + array[i];
    }
  }
  return sentence; 
};

console.log("Exercise 3:", concatenateStrings(stringEx3));

console.log('----------------------------');
// 4. Write a function that takes an array of integers and returns a new array with odd numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 3, 7]
let arrayEx = [1, 2, 3, 4, 7, 10];

function oddNumbers(array){
  let result = [ ];
  for(let i = 0; i < array.length; i++){
    if(array[i]%2 == 1){
      result.push(array[i]);
    }
  }
  return result;
}


console.log("Ex4 :", oddNumbers(arrayEx));
console.log('----------------------------');
// 5. Write a function that takes an array of integers and returns a new array with even numbers only.
// Input: [1, 2, 3, 4, 7, 10]
// Output: [1, 2, 4, 10]
const testArrayEx5 = [1, 2, 3, 4, 7, 10];
function evenNumbers(array){
  let result = [];
  for(let i = 0; i < array.length; i++){
    if(array[i]%2 == 0){
      result.push(array[i]);
    }
  }
  return result;
}


console.log('Exercise 5: ', evenNumbers(testArrayEx5));
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

function objectToValues(obj) {
  return Object.values(obj);
}

console.log("exercise 8:", objectToValues(testObjEx8));
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
console.log("Ex 10:", addKeyValueObject(testObjEx10, "city", "New York"));


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
function removeKeyAndValue(obj, key, value){
  delete obj[key];
  return obj;
}

console.log("Ex 11:", removeKeyAndValue(testObjEx11, "city", "New York"));
console.log("Ex 11-a:", removeKeyAndValue(testObjEx11, "age", 30));
console.log('----------------------------');
// 12. Write a function that takes two arrays of equal length and returns an object with the first array as keys and the second array as values.
// Input: (["name", "age", "city"], ["John", 30, "New York"])
// Output: {name: "John", age: 30, city: "New York"}
const array1Ex12 = ["name", "age", "city"];
const array2Ex12 = ["John", 30, "New York"];

function twoArrayEqualLength(array1, array2) {
  const finalArray = {};

  for( let i = 0; i < array1.length; i++){ 
    if(array1.length == array2.length){
      finalArray[array1[i]] = array2[i];
    }
  }
  return finalArray;
}
 console.log( "Ex 12 : ", twoArrayEqualLength(array1Ex12,array2Ex12 ) );

 console.log('----------------------------');
// 13. Array Destructuring
// Given the following array, use array destructuring to assign the values of x, y, and z to their respective variables: 
const coordinates = [10, 20, 30];
const x = coordinates[0];
const y = coordinates[1];
const z = coordinates[2];
const [x1, y1, z1] = coordinates; // Square brakets ([]) should be used for destructuring arrays, curly brackets ({}) should be used for destructuring objects

console.log('Ex13', coordinates);
console.log('Ex13', y, y1);

console.log('----------------------------');
// 14. Object Destructuring
// Given the following object, use object destructuring to assign the values of name and age to their respective variables:
const personE14 = {
  name: 'John Doe',
  age: 25,
};



console.log('Ex14',personE14);
console.log('----------------------------');
// 15. Array Destructuring with Default Values
// Given the following array, use array destructuring with default values to assign the values of a, b, and c, with default values of 1, 2, and 3 respectively:
const numbers = [a = 1, b = 2, c = 3];


console.log('Ex15',a, b, c);
console.log('----------------------------');
// 16. Object Destructuring with Renaming
// Given the following object, use object destructuring with renaming to assign the value of name to a variable named fullName:
const personE16 = {
  name: 'John Doe',
};
 
const {name: fullName} = personE16;

console.log('Ex16 :', fullName);
console.log('----------------------------');
// 17. Nested Object Destructuring
// Given the following nested object, use object destructuring to assign the values of name, age, and city to their respective variables:
const personE17 = {
  name: 'John Doe',
  age: 25,
  address: {
    city: 'New York',
  },
};
// Actuall i didn't understand whta ı should do here because values alread assigned to variables.
console.log('Ex17 :', personE17.address);
console.log('----------------------------');