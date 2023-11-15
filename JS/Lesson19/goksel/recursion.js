//Example
// function doSomething(parameter) {
//   // base condition for recursive function
//   if (condition) {
//     return value;
//   } else {
//     // If condition is not met, we modify parameter is some way
//     // Usually, after modification, we call the same function again (or the function calls itself)
//     return doSomething(modifiedParameter);
//   }
// }

// Factorial of 5 is 5*4*3*2*1
function getFactorial(number) {
    if (number < 0 || typeof number !== 'number') {
        console.error('Please provide a number >= 0');
        return;
    } else {
        if (number === 0) {
            return 1;
        } else {
            return number * getFactorial(number - 1);
        }
    }
}
/* 
getFactorial(5)
  5 * getFactorial(4)
  5 * 4 * getFactorial(3)
  5 * 4 * 3 * getFactorial(2)
  5 * 4 * 3 * 2 * getFactorial(1)
  5 * 4 * 3 * 2 * 1 * getFactorial(0)
  5 * 4 * 3 * 2 * 1 * 1
*/
console.log('5', getFactorial(5));
console.log('-26', getFactorial(-26));
console.log('String', getFactorial('sadasfasd'));


console.log("---Ex1---");

// 1. Write a recursive function to print out all the elements of an array.
const arrEx1 = [1, 2, 3, 4, 5];
function printingOutOneOfTheElements(arr) {
    if(arr.length == 0){
        return;
    } else {
        console.log(arr[0]); // prints 1
        return printingOutOneOfTheElements(arr.slice(1)); // printingOutOneOfTheElements([2,3,4,5]);
    }
};
printingOutOneOfTheElements(arrEx1);


console.log("---Ex2---");

// 2. Write a recursive function to capitalize the first letter of each word in a sentence.
const ex2sentence =
    'a recursive function to capitalize the first letter of each word in a sentence.';

function capitalizeFirstLetter (sentence) {
    const sentenceArray = sentence.split(' ');
    if(sentenceArray.length === 0 || sentenceArray[0].length === 0) {
        return '';
    }
    else {
        const firstWord = sentenceArray[0];
        const firstWordCapitalized = firstWord[0].toUpperCase() + firstWord.slice(1);
        const restOfTheSentenceArray = sentenceArray.slice(1);
        const restOfTheSentence = restOfTheSentenceArray.join(' ');
        return firstWordCapitalized + ' ' + capitalizeFirstLetter(restOfTheSentence) ;
    } 
}

console.log(capitalizeFirstLetter(ex2sentence));



console.log("---Ex3---");
// 3. Write a recursive function to count the number of vowels in a string.
const sentenceEx4 = 'Hello, how are you?';
const vowels = ['a', 'e', 'i', 'o', 'u'];

function vowelsInString(sentence){
    if (sentence.length === 0){ 
        return 0;
    } else {
        if(vowels.includes(sentence[0].toLowerCase())){
            return 1 + vowelsInString(sentence.slice(1));
        } else {
            return vowelsInString(sentence.slice(1));
        }
    }
}
console.log(vowelsInString(sentenceEx4));



console.log("---Ex4---");
// 4. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = 'Hello, how are you?';
const charToRemove = 'o';

function removeCharacter(sentence, characterToRemove){
    if(sentence.length === 0 || sentence[0].length === 0){
        return "";
        }
        if(sentence[0] === characterToRemove ){
            return removeCharacter(sentence.slice(1), removeWord)
        }else {
            return sentence[0] + removeCharacter(sentence.slice(1), removeWord);
        }
}

console.log(removeCharacter(sentenceEx5,charToRemove));

console.log("---Ex5---");
// 5. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 2;


function isArrayIncludeValue(array, value){
    if(array.length === 0){
        return "Value is not found";
    } 
    if(array[0] !== value){
        return isArrayIncludeValue(array.slice(1), value);
    } else{
        return true;
    }

}

console.log(isArrayIncludeValue(numbers, valueToCheck));
console.log("---Ex6---");
// 6. Write a recursive function to flatten an object with nested objects into a single-level object.
const nestedObj = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA',
    },
    hobbies: ['reading', 'coding'],
    social: {
        twitter: '@johndoe',
        linkedIn: 'johndoe',
    },
};



// I have no idea about this example...

console.log("---Ex7---");
// 7. Write a recursive function to find the maximum depth of a nested object.
const nestedObjEx7 = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4,
            },
        },
    },
    h: 5,
};


function maxDepthOfObject(obj, depth = 0) {
    if (typeof obj !== "object" || obj === null){
        return depth;
    }

    let maxDepth = depth;
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            let currentDepth = maxDepthOfObject(obj[key], depth +1);
            if (currentDepth > maxDepth){
                maxDepth = currentDepth;
            }
        }
    }
    return maxDepth;
}

console.log(maxDepthOfObject(nestedObjEx7));
console.log("---Ex8---");

// I checked this solution from chatgbt, ı tried to understand but not perfect.

// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';


function reverseOrder(sentence){
    let splitArray = sentence.split(" "); 
    
    if(splitArray.length === 0 || splitArray[0].length === 0){
        
        return "";
    } else{
        let firstWord = splitArray[splitArray.length - 1];
        
        splitArray.pop();
        let restOfTheSentence = splitArray.join(" ") ;
        
        return firstWord + " " +reverseOrder(restOfTheSentence);
    }
}


console.log(reverseOrder(sentenceEx8));
console.log("---Ex9---");
// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';


function longestWord(sentence, index = 0){
    let splitArray = sentence.split(" ");
    if(splitArray.length === 0 || splitArray[0].length === 0){
        return index;
    }
    let firstWord = splitArray[0];
    let restOfTheSentence = splitArray.slice(1).join(" ");
    if(firstWord.length > index ){
        index = firstWord.length;
        
    }
    return longestWord(restOfTheSentence, index);
}

console.log(longestWord(sentenceEx9));
console.log("---Ex10---");
// 10. Write a recursive function to check if an object contains a specified property.
const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
    },
};

function checkObj(obj, property){
    if(typeof obj !== "object"  ||  obj == null) {
        return false;
    }
    if(obj.hasOwnProperty(property)){
        return true;
    }
    for(let key in obj){
        if(checkObj(obj[key], property)){
            return true;
        }
      }
    return false;
}

console.log(checkObj(person, "John"));
console.log(checkObj(person, "name"));
console.log(checkObj(person, "city"));
