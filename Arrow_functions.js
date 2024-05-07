//a. Print odd numbers in an array:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let printOddNumbers = (arr) => {
    arr.forEach((num) => {
        if(num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers(numbers);


//b. Convert all the strings to title caps in a string array:

let strings = ["hello", "world", "this", "is", "a", "test"];

let convertToTitleCaps = (arr) => {
    return arr.map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
};

console.log(convertToTitleCaps(strings));


//c. Sum of all numbers in an array:

let numbers = [1, 2, 3, 4, 5];

let sumOfNumbers = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfNumbers(numbers));


//d. Return all the prime numbers in an array:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = (arr) => {
    return arr.filter((num) => {
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
};

console.log(primeNumbers(numbers));


//e. Return all the palindromes in an array:

let words = ["level", "hello", "radar", "world", "noon"];

let palindromes = (arr) => {
    return arr.filter((word) => {
        return word === word.split('').reverse().join('');
    });
};

console.log(palindromes(words));
//