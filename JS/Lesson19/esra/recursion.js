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
const resultString = removeCharacter(sentenceEx5, charToRemove);

function removeCharacter(sentenceEx5, charToRemove) {
	if (sentenceEx5.length === 0) {
		return '';
	} else {	
	if (sentenceEx5[0] === charToRemove) {
		return removeCharacter(sentenceEx5.slice(1), charToRemove);
	} else {
		return sentenceEx5[0] + removeCharacter(sentenceEx5.slice(1), charToRemove);
	}
	}
	

}
console.log('Exercise4:', resultString);
// 5. Write a recursive function to check if an array includes a specific value.
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 3;

function checkToArray(arr, valueToCheck) {
	if (arr.length === 0) {
		return false;
	}
	
	if (arr[0] === valueToCheck) {
		return true;
	} else {
		return checkToArray(arr.slice(1), valueToCheck);
	}
	
}
const result = checkToArray(numbers, valueToCheck);

console.log('Exercise5:', result);

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

function singleLevelObj(obj) {
	const result = {};

	for (const key in obj) {
		if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
		  const flattenedSubObject = singleLevelObj(obj[key]);
		  for (const subKey in flattenedSubObject) {
			result[`${key}.${subKey}`] = flattenedSubObject[subKey];
		  }
		} else if (Array.isArray(obj[key])) {
		  result[key] = obj[key].map(item => {
			if (typeof item === 'object') {
			  return singleLevelObj(item);
			} else {
			  return item;
			}
		  });
		} else {
		  result[key] = obj[key];
		}
	  }
	
	  return result;
	}


console.log('Exercise6: ', result);



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

function findMaxDepth(obj) {
if (typeof obj !== 'object') {
	return 0;
}

let maxDepth = 0;

for (const key in obj) {
	if (obj.hasOwnProperty(key)) {
		const depth = findMaxDepth(obj[key]) + 1;
		maxDepth = Math.max(maxDepth, depth);
	}
}

return maxDepth;
}

const maxDepth = findMaxDepth(nestedObjEx7);
console.log('Exercise7: ', 'Max Depth:', maxDepth);

// 8. Write a recursive function to reverse the order of words in a sentence.
const sentenceEx8 = 'Hello, how are you?';

function reverseToWords(sentence) {
	if (sentence.endsWith(' ')) {
		sentence = sentence.trim() + ' ';
	}

	const firstSpaceIndex = sentence.indexOf(' ');

	if (firstSpaceIndex === -1) {
		return sentence;
	} 

	return reverseToWords(sentence.substring(firstSpaceIndex + 1)) + ' ' + sentence.substring(0, firstSpaceIndex);

}

const reversedSentence = reverseToWords(sentenceEx8);
console.log('Exercise8: ', reversedSentence);


// 9. Write a recursive function to find the length of the longest word in a sentence.
const sentenceEx9 = 'The quick brown fox jumps over the lazy dog';

function findLongestWord(sentence, words = null) {
    
    if (!words) {
        words = sentence.split('');
    }

    
    if (words.length === 1) {
        return words[0];
    }

    
    const firstWord = words[0];
    const longestWordInRest = findLongestWord(sentence, words.slice(1));

    return firstWord.length > longestWordInRest.length ? firstWord : longestWordInRest;
}


console.log('Exercise9: ', findLongestWord(sentenceEx9));

// 10. Write a recursive function to check if an object contains a specified property.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

function checkToObject(obj, propertyToFind) {
	if (obj.hasOwnProperty(propertyToFind)) {
		return true;
	}

	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			if (checkToObject(obj[key], propertyToFind)) {
				return true;
			}
		}
	}
       return false;
}

const propertyToFind = 'country';
const hasPropertyCountry = checkToObject(person, propertyToFind);
console.log('Exercise10: ', `Does the object have the property '${propertyToFind}'?`, hasPropertyCountry);