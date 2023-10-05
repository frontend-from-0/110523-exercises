/*  
Functions

Functions are one of the fundamental building blocks of the language. They are reusable blocks of code that can be executed when needed. Functions encapsulate a set of statements and can be called or invoked to perform a specific task or calculation. 

Function Declaration
function (parameter1, parameter2) {
  return parameter1 * parameter2;
};

Named function:
function multiplyTwoNumbers(parameter1, parameter2) {
  return parameter1 * parameter2;
}
multiplyTwoNumbers(1, 4);

Function Expression
const sumOfTwoNumber = function (parameter1, parameter2) {
  return parameter1 * parameter2;
};

Arrow Function (introduced in ECMAScript 6 OR ES6)
const greet = () => {
  console.log('Hello world');
};

greet();
*/
// IIFE (Immediately Invoked Function Expression)
(function multiplyTwoNumbers(parameter1, parameter2) {
	console.log('Hello');
	return parameter1 * parameter2;
})();

// console.log(multiplyTwoNumbers(1, 4));

/* 
Conditional statements (if...else, switch)

Conditional statements in JavaScript are used to make decisions and execute different blocks of code based on certain conditions. They allow you to control the flow of your program and determine which code should be executed depending on whether a condition evaluates to true or false.

if Statement
if (condition) {

}
// Same line if condition:
if (today === 'Wednessday') console.log('Join the lesson');

if ... else Statement
if (condition) {
 ... some code
} else if (another condtion) {
 ... some code
} else {
 ... some code
}

Switch statement
switch (day) {
  case 'Monday':  // this means that day === 'Monday'
   console.log('It\'s Monday'); 
   break;
  case 'Tuesday':
    console.log('It\'s Tuesday');
    break; // Use break key word if you don't use return key word in the statement;
    .... cases for other days of the week
  default:
    console.log('Unknow day');
    break;
}
*/

// 1. Write a program that takes in a number and checks if it's even or odd using if else statement.
function isEvenOrOdd(number) {
	if (number % 2 === 0) {
		console.log(number + ' is even');
	} else {
		console.log(number + ' is odd');
	}
}
isEvenOrOdd(9);
isEvenOrOdd(16);

// 2. Write a program that takes age as input. If the age is less than 18, print "Sorry, you are not old enough to vote". If the age is between 18 and 65 (inclusive), print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen".

function isAllowedToVote(age) {
	if (age < 18) {
		console.log('Sorry, you are not old enough to vote');
	} else if (age >= 18 && age <= 65) {
		console.log('You are eligible to vote');
	} else {
		console.log('You are a senior citizen');
	}
}
isAllowedToVote(14);
isAllowedToVote(30);
isAllowedToVote(70);
isAllowedToVote(18);
isAllowedToVote(65);

// 3. Write a program that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.
function compareNumbers(firstNumber, secondNumber) {
	if (firstNumber > secondNumber) {
		console.log(
			'The first number ' +
				firstNumber +
				' is bigger than second number ' +
				secondNumber
		);
	} else if (firstNumber === secondNumber) {
		console.log(
			'The first number ' +
				firstNumber +
				' is equal to second number ' +
				secondNumber
		);
	} else {
		console.log(
			'The first number ' +
				firstNumber +
				' is smaller than second number ' +
				secondNumber
		);
	}
}

compareNumbers(5, 7);
compareNumbers(10, 10);
compareNumbers(7, 5);

// 4. Write a program that takes in a string and checks if the first letter is uppercase using if else statement.

function isFirstLetterUppercase(sentence) {
	if (sentence[0] === sentence[0].toUpperCase()) {
		console.log(
			'The first letter of the sentence is uppercase. Sentence: ' + sentence
		);
	} else {
		console.log(
			'The first letter of the sentence is not uppercase. Sentence: ' + sentence
		);
	}
}
isFirstLetterUppercase(
	'Write a program that takes in a string and checks if the first letter is uppercase using if else statement.'
);
isFirstLetterUppercase(
	'write a program that takes in a string and checks if the first letter is uppercase using if else statement.'
);

// 5. Write a program that takes in a number and checks if it's positive, negative, or zero using if else statement.
function isPositiveNegativeZero(numberToCheck) {
	if (numberToCheck > 0) {
		console.log('Number is positive. Number: ' + numberToCheck);
	} else if (numberToCheck < 0) {
		console.log('Number is negative. Number: ' + numberToCheck);
	} else {
		console.log('Number is zero. Number: ' + numberToCheck);
	}
}
isPositiveNegativeZero(5);
isPositiveNegativeZero(-15);
isPositiveNegativeZero(0);
// 6. Write a program that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.
function isLeapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		console.log(`${year} is a leap year.`);
	  } else {
        console.log(`${year} is not a leap year.`);
	}
}

isLeapYear(2020); //expected true
isLeapYear(1600); // expected true
isLeapYear(2033); //expected false
isLeapYear(2401); // expected false

// 7. Write a program that takes in a temperature and checks if it's above or below freezing using if else statement.

function isFreezing(temperature) {
	const freezingPoint = 0;
	if (temperature < freezingPoint) {
		console.log(temperature + ' degrees. It\'s below freezing point.');
	} else if (temperature === freezingPoint) {
		console.log(temperature + ' degrees. It\'s freezing point.');
	} else {
		console.log(temperature + ' degrees. It\'s above freezing point.');
	}
}

isFreezing(0);
isFreezing(-15);
isFreezing(25);

// 8. Write a program that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

function findBodyMassIndex(height, weight) {
	const bodyMassIndex = weight / (height * height);
	if (bodyMassIndex > 0 && bodyMassIndex < 18.5) {
		console.log(`Your height is ${height} meters, your weight is ${weight} kilograms. Your BMI: ${bodyMassIndex} You are underweight.`);
	} else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9) {
		console.log(`Your height is ${height} meters, your weight is ${weight} kilograms. Your BMI: ${bodyMassIndex} You are healthy.`);
	} else if (bodyMassIndex > 24.9 && bodyMassIndex <= 29.9) {
		console.log(`Your height is ${height} meters, your weight is ${weight} kilograms. Your BMI: ${bodyMassIndex} You are overweight.`);
	} else if (bodyMassIndex > 29.9) {
		console.log(`Your height is ${height} meters, your weight is ${weight} kilograms. Your BMI: ${bodyMassIndex} You may have obesity.`);
	} else {
		console.log(`Not valid result.`);
	}
}

findBodyMassIndex(1.7, 50);
findBodyMassIndex(1.7, 60);
findBodyMassIndex(1.75, 85);
findBodyMassIndex(1.6, 105);
findBodyMassIndex('knvfv', -65);

// 9. Write a program that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

function findAge(age) {
  if (age > 0 && age <= 12) {
	console.log(`Your age is ${age}. You are a child.`);
  } else if (age > 12 && age <= 19) {
	console.log(`Your age is ${age}. You are a teenager.`);
  } else if (age > 19 && age <= 64) {
	console.log(`Your age is ${age}. You are an adult.`);
  } else if (age > 65) {
    console.log(`Your age is ${age}. You are a senior citizen.`)
  } else {
	console.log('Enter a valid age number.');
  }
}

findAge(8);
findAge(13);
findAge(33);
findAge(75);
findAge(-45);

// 10. Write a program that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

function checkToVote(age, student = false) {  // I provided a default value for student parameter just for senior citizen condition, because we will pass only age argument.
	if (age > 0 && age < 18 && student === true) {
		console.log(`Your age is ${age}. You are a student and not old enough to vote.`);
	} else if (age > 18 && age <= 65 && student === false) {
        console.log(`Your age is ${age}. You are eligible to vote.`);
	} else if (age > 65) {
		console.log(`Your age is ${age}. You are a senior citizen.`);
	} else if (age >= 18 && student === true) {
	   console.log(`Your age is ${age}. You are old enough to vote.`);
	} else {
	   console.log('Please enter valid entries!');
	}
}

checkToVote(15, true);
checkToVote(25, false);
checkToVote(75);
checkToVote(22, true);
checkToVote(-21, 'gnfjg');



// 11. Write a program that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

function offerJob(salary, yearsOfExperience) {
	if ((salary > 0 && salary < 30000) && (yearsOfExperience > 0 &&  yearsOfExperience < 5)) {
		console.log(`Your salary is ${salary}$, your years of experience ${yearsOfExperience}. Sorry, we cannot offer you the job at this time.`);
	} else if ((salary >= 30000 && salary < 50000) && (yearsOfExperience > 5 && yearsOfExperience <= 10)) {
		console.log(`Your salary is ${salary}$, your years of experience ${yearsOfExperience}. We can offer you the job at a lower salary.`);
	} else if (salary >= 50000 && yearsOfExperience > 10) {
		console.log(`Your salary is ${salary}$, your years of experience ${yearsOfExperience}. We can offer you the job at the requested salary.`);
	} else {
		console.log('Please enter valid salary or years of experience.');
	}
}

offerJob(20000, 2);
offerJob(42500, 10);
offerJob(65000, 15);
offerJob('cdcs',-5);
// 12. Write a program that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".

function findYourGrade(score) {
	if (score > 0 && score < 60) {
		console.log(`Your score is ${score}. You failed the test.`);
	} else if (score >= 60 && score <= 70) {
		console.log(`Your score is ${score}. You passed the test, but your grade is not great.`);
	} else if (score > 70 && score <= 80) {
		console.log(`Your score is ${score}. You got a B.`);
	} else if (score > 80 && score <= 90) {
		console.log(`Your score is ${score}. You got an A.`);
	} else if (score > 90 && score <= 100) {
        console.log(`Your score is ${score}. You got an A+ - Great job!`);
	} else {
		console.log(`Please enter a valid score.`);
	}
}

findYourGrade(25);
findYourGrade(70);
findYourGrade(78);
findYourGrade(83);
findYourGrade(100);
findYourGrade(110);

// 13. Write a program that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases.

function findSeasonName(monthNumber) {
  switch(monthNumber) {
	case 12:
	case 1:
	case 2:
		console.log('It\'s winter!!');
		break;
	case 3:
	case 4:
	case 5:
		console.log('It\'s spring!!');
		break;
	case 6:
	case 7:
	case 8:
		console.log('It\'s summer!!');
		break;
	case 9:
	case 10:
	case 11:
		console.log('It\'s autumn!!');
		break;
	default: 
	   console.log('Please enter a valid month number.');
	   break;
  }
}

findSeasonName(2);
findSeasonName(4);
findSeasonName(7);
findSeasonName(11);
findSeasonName(545654);

// 14. Write a program that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.

function checkGrade(grade) {
  const uppercaseGrade = grade[0].toUpperCase();
	switch (uppercaseGrade) {
		case 'A':
		case 'B':
		case 'C':
			console.log(uppercaseGrade + ' Passing');
			break;
		case 'D':
		case 'F':
			console.log(uppercaseGrade + ' Failing');
			break;
		default:
			console.log('Enter a valid grade.')
	}

	
}
checkGrade("a");
checkGrade("D");
checkGrade("Z");
checkGrade("A-");
checkGrade("B+");  // couldnt find extra solution for this other than writing extra cases explicitly :( 

// switch (day) {
//   case 'Monday':  // this means that day === 'Monday'
//    console.log('It\'s Monday');
//    break;
//   case 'Tuesday':
//     console.log('It\'s Tuesday');
//     break; // Use break key word if you don't use return key word in the statement;
//     .... cases for other days of the week
//   default:
//     console.log('Unknow day');
//     break;
// }

// 15. Write a program that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.

function findAgeInDogYears(age) {
   const ageInDogYears = age * 7;
   if (age <= 0) {
	console.log('Please enter a valid age number.');
   } else {
	console.log(ageInDogYears);
   }
}

findAgeInDogYears(30);
findAgeInDogYears(-30);