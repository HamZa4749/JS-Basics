console.log("Answer No 01:");
function ReverseString(InputString) {
    let ReversedString = '';
    for (let i = InputString.length - 1; i >= 0; i--) {
        ReversedString += InputString[i];
    }
    return ReversedString;
}
let OriginalString = "0123456789";
let reversed = ReverseString(OriginalString);
console.log(reversed);  // Output: "9876543210"

console.log("Answer No 02:");
function countVowels(str) {
    // Convert the string to lowercase to make the comparison case-insensitive
    str = str.toLowerCase();

    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            vowelCount++;
        }
    }
    return vowelCount;
}
let testString = "I Love Pakistan.";
console.log(`Number of vowels in "${testString}" is ${countVowels(testString)}.`);
// Output: Number of vowels in "I Love Pakistan.": 6

console.log("Answer No 03:");
function CapitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
let sentence = "my name is hamza.";
let CapitalizedSentence = CapitalizeFirstLetter(sentence);
console.log(CapitalizedSentence);
// Output: "My Nmae Is Hamza."

console.log("Answer No 04:");
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the cleaned string with its reversed version
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
let testString01 = "123454321";
let testString02 = "123456789";
console.log(isPalindrome(testString01));  // Output: true
console.log(isPalindrome(testString02));  // Output: false

console.log("Answer No 05:");
function sumOfAllPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
let numbers = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5];
let result = sumOfAllPositiveNumbers(numbers);
console.log(result);  // Output: 15

console.log("Answer No 06:");
let fruits = ['orange', 'banana', 'apple', 'grape'];

let targetElement = 'apple';
let indexOfFirstOccurrence = fruits.indexOf(targetElement);

if (indexOfFirstOccurrence !== -1) {
    console.log(`The first occurrence of '${targetElement}' is at index ${indexOfFirstOccurrence}.`);
} else {
    console.log(`'${targetElement}' is not found in the array.`);
}   // Output: The first occurrence of 'apple' is at index 2.

console.log("Answer No 07:");
function removeDuplicates(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 1, 6, 2, 1, 7];
let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates);
// Output: [1, 2, 3, 4, 5, 6, 7]

console.log("Answer No 08:");
// Ascending order
function selectionSortAscending(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap elements if needed
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}
// Descending order
function selectionSortDescending(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            // Swap elements if needed
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
}
let Numbers = [5, 1, 8 , 3, 7, 2, 9, 8, 4, 0,6];

// Sort in ascending order
selectionSortAscending(Numbers);
console.log("Ascending Order :", Numbers);

// Sort in descending order
selectionSortDescending(Numbers);
console.log("Descending Order :", Numbers);
// Output: Ascending Order : (11) [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9]
// Output: Descending Order : (11) [9, 8, 8, 7, 6, 5, 4, 3, 2, 1, 0]

console.log("Answer No 09:");
let number = 2;

while (number <= 20) {
    console.log(number);
    number += 2;
}
// Output:
//    2
//    4
//    6
//    8
//    10
//    12
//    14
//    16
//    18
//    20 

console.log("Answer No 10:");
function Factorial(n) {
    if (n < 0) {
        return "Factorial is undefined for negative numbers.";
    }

    let factorial = 1;
    let i = 1;

    do {
        factorial *= i;
        i++;
    } while (i <= n);

    return factorial;
}
let NumberToFactorial = 4;
console.log(`The factorial of ${NumberToFactorial} is : ${Factorial(NumberToFactorial)}.`);
// Output: The factorial of 5 is: 24

console.log("Answer No 11:");
let Person = {
    Name : 'Hamza',
    Age : 23,
    City : 'Karachi'
};

for (let key in Person) {
    if (Person.hasOwnProperty(key)) {
        console.log(`${key}: ${Person[key]}`);
    }
}
//output: Name: Hamza
//        Age: 23
//        City: Karachi

console.log("Answer No 12:");
let N = [1, 2, 3, 4, 5];
let doubledNumbers = [];

for (let num of N) {
    doubledNumbers.push(num * 2);
}
console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]

console.log("Answer No 13:");
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return `The given number "${number}" is Even Number.`;
    } else {
        return `The given number "${number}" is Odd Number.`;
    }
}
let testNumber01 = 14;
let testNumber02 = 23;
console.log(checkEvenOrOdd(testNumber01));
console.log(checkEvenOrOdd(testNumber02));
// Output: The given number "14" is Even Number.
// Output: The given number "23" is Odd Number.

console.log("Answer No 14:");
function findMaximum(a, b, c) {
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
}
let num1 = 6, num2 = 9, num3 = 3;
let maximum = findMaximum(num1, num2, num3);
console.log(`The maximum number between ${num1}, ${num2}, and ${num3} is : ${maximum}`);
// Output: The maximum number between 6, 9, and 3 is : 9

console.log("Answer No 15:");
function isLeapYear(year) {
    // Leap years are divisible by 4
    if (year % 4 !== 0) {
        return false;
    }
    // However, years divisible by 100 are not leap years, unless they are also divisible by 400
    else if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
let yearToCheck01 = 2024;
let yearToCheck02 = 2023;
console.log(isLeapYear(yearToCheck01));  // Output: true
console.log(isLeapYear(yearToCheck02));  // Output: false



