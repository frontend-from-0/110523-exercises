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
// 4. Write a recursive function to remove all occurrences of a specified character from a string.
const sentenceEx5 = 'Hello, how are you?';
const charToRemove = 'o';
function removeChar(sentence, charToDelete) {
	if(sentence.length === 0) {
		return '';
	} else {
		if(sentence[0] === charToDelete) {
          return removeChar(sentence.slice(1), charToDelete);
		} else {
		  return sentence[0] + removeChar(sentence.slice(1), charToDelete);
		}
	};
}
console.log(removeChar(sentenceEx5, charToRemove));

// 5. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 4;
const valueToCheck2 = 10;

function checkValInArr(arr, valToCheck) {
	if(arr.length === 0) {
		return false;
	} else {
       if(arr[0] !== valToCheck) {
		return checkValInArr(arr.slice(1), valToCheck);
	   } else {
		return true;
	   }
	}
}

console.log(checkValInArr(numbers, valueToCheck));
console.log(checkValInArr(numbers, valueToCheck2));

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
 function flattenObj(obj) {
   const keys = Object.keys(obj);
   const flattenObject = {};
   if(keys.length === 0 || keys[0].length === 0) {
	return {};
   } else {
	  keys.forEach(key => {
		if(typeof obj[key] !== 'object' || Array.isArray(obj[key])) {
		   flattenObject[key] = obj[key];
		}
		if(typeof obj[key] === 'object' && !(Array.isArray(obj[key]))){
		   Object.assign(flattenObject, flattenObj(obj[key]));
		}
	  })
	  return flattenObject;
   }
	
 }
 console.log(flattenObj(nestedObj));

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

function findMaxDepthOfObj(obj) {
  const entries = Object.entries(obj);
  const keys = Object.keys(obj);
  const restOfEntries = entries.slice(1);
  const newOb = Object.fromEntries(restOfEntries);
  const depth = 1;
  if(keys.length === 0) {
	return depth;
  } else {
      if(typeof obj[keys[0]] !== 'object') {
        return findMaxDepthOfObj(newOb);
     } 
      if(typeof obj[keys[0]] === 'object') {
        return 1 + findMaxDepthOfObj(obj[keys[0]]);
     }
  }
}

console.log(findMaxDepthOfObj(nestedObjEx7));
// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';

function reverseWords(sentence) {
	const wordsArr = sentence.split(' ');
	if(wordsArr.length === 0 || wordsArr[0].length === 0 ) {
		return '';
	} else {
	    let output = [];
		output.push(wordsArr[wordsArr.length - 1]);
		let restOfTheSentence = wordsArr.slice(0, wordsArr.length-1).join(' ');
		return output.join('') + ' ' + reverseWords(restOfTheSentence);
		
	}
}
console.log(reverseWords(sentenceEx8));
// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';
const sentenceEx99 = 'Can you give me information about it?';

function longestWord(sentence) {
  const sentenceArr = sentence.split(' ');
  if(sentenceArr.length === 0 || sentenceArr[0].length === 0) {
	return '';
  } else {
	const lengths = sentenceArr.map(word => word.length);
	const restOfTheSentence = sentenceArr.slice(1).join(' ');
	if(sentenceArr[0].length < Math.max(...lengths)){
       return longestWord(restOfTheSentence);
	} 
	if(sentenceArr[0].length === Math.max(...lengths)){
	   return 'Length is ' + sentenceArr[0].length + '. The word is: ' + sentenceArr[0];
	}
  }

} 

console.log(longestWord(sentenceEx9));
console.log(longestWord(sentenceEx99));
// 10. Write a recursive function to check if an object contains a specified property.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

function checkProp(obj, propToCheck) {
	let entries = Object.entries(obj);
	if(entries.length === 0 || entries[0].length === 0) {
		return false;
	} else {
		if(propToCheck === entries[0][0]) {
			return true;
		} else {
			let restOfEntries = entries.slice(1);
		    const newOb = Object.fromEntries(restOfEntries);
			return checkProp(newOb, propToCheck);
		}
	}
}

console.log(checkProp(person, 'address'));
console.log(checkProp(person, 'gul'));