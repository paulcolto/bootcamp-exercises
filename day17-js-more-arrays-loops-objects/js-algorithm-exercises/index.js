console.log('it works');

// JAVASCRIPT ALGORITHM EXERCISES

// 1 ✽ Write a function called len which returns the length of an array.

const arr = [1, 5, 7, 3, 1, 76, 43, 3];

const len = (arr) => {
    console.log(arr.length);
};

// 2 ✽ Write a function called last which returns last element of an array. Return null when the array is empty.

const last = (arr) => {
    console.log(arr[arr.length - 1]);
    if (arr.length === 0) {
        return null;
    }
};

// 3 ✽ Write a function called butlast which returns last but on element of an array. 
// Return null when the array has less then two elements.

const butlast = (arr) => {
    console.log(arr[arr.length - 2]);
    if (arr.length < 2) {
        return null;
    }
};

// 4 ✽ Write a function called elementAt which returns k-th element of an array. 
// The first element in the array is number 1. Return null if k is out of bounds.
// UNFINISHED

const element = (arr) => {
    console.log();
};

// 5 ✽✽ Write a function called reverse which returns a reversed copy of an array. The original array must stay the same.
const reverse = (arr) => {
    const newArr = arr.slice();
    console.log(newArr.splice(newArr).reverse(newArr));
};

// 6 ✽✽ Write a function called isPalindrome which checks whether an array of numbers is a palindrome. 
// Palindrome is a sequence which from start reads the same as from the end, e.g. 'level', 'racecar' or 'madam'.

const isPalindrome = (arr) => {
    //initialize to true
    let isPalindrome = true;
    // loop through half length of the array
    for (let i = 0; i < arr.length / 2; i++) {
        //check if first half is equal to the second half
        if (arr[i !== arr[arr.length - i - 1]]) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};

