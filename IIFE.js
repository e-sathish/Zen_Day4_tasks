//1. Do the below programs in anonymous function & IIFE:

//a. Print odd numbers in an array:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    arr.forEach(function(num) {
        if(num % 2 !== 0) {
            console.log(num);
        }
    });
})(numbers);

//b. Convert all the strings to title caps in a string array:

let strings = ["hello", "world", "this", "is", "a", "test"];

(function(arr) {
    let titleCaps = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(titleCaps);
})(strings);


//c. Sum of all numbers in an array:

let numbers = [1, 2, 3, 4, 5];

let sum = (function(arr) {
    return arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
})(numbers);

console.log(sum);


//d. Return all the prime numbers in an array:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primes = (function(arr) {
    return arr.filter(function(num) {
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
})(numbers);

console.log(primes);


//e. Return all the palindromes in an array:

let words = ["level", "hello", "radar", "world", "noon"];

let palindromes = (function(arr) {
    return arr.filter(function(word) {
        return word === word.split('').reverse().join('');
    });
})(words);

console.log(palindromes);


//f. Return median of two sorted arrays of the same size:

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = (function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort(function(a, b) {
        return a - b;
    });
    let len = merged.length;
    return len % 2 !== 0 ? merged[Math.floor(len / 2)] : (merged[len / 2 - 1] + merged[len / 2]) / 2;
})(arr1, arr2);

console.log(median);


//g. Remove duplicates from an array:

let numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

let uniqueNumbers = (function(arr) {
    return arr.filter(function(num, index, array) {
        return array.indexOf(num) === index;
    });
})(numbers);

console.log(uniqueNumbers);


//h. Rotate an array by k times:

let numbers = [1, 2, 3, 4, 5];
let k = 2;

let rotatedArray = (function(arr, k) {
    let len = arr.length;
    k %= len;
    return arr.slice(k).concat(arr.slice(0, k));
})(numbers, k);

console.log(rotatedArray);
