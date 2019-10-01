const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]

// LISTING NUMBERS

// 1 Output the number of items in the array to the console. Answer: 19
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers.length);
}

// 2 Output the number at the index 13 to the console. Answer: -10
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[13]);
}

// 3 Output the number which is exactly in the middle of the array. Answer: -31
console.log(numbers[Math.floor(numbers.length / 2)]);

// 4 Output every number in the array to the console.
const everyNumber = (numbers.forEach(number => {
    console.log(number)
}));

// 5 Output the square of every number to the console.
for (const number of numbers) {
    console.log(number * number);
};

// 6 Output only negative numbers from the array.
const negativeNumbers = (numbers.filter(number => {
    if (number < 0) {
        console.log(number);
    }
}))

// 7 Output an absolute value of every number in the array.
const absoluteNumbers = (numbers.forEach(number => {
    if (number < 0) {
        console.log(Math.abs(number));
    } else {
        console.log(number);
    }
}))

// 8 Output only those numbers which absolute value id divisible by 3.
const divisibleByThree = numbers.map(number => {
    if (number > 0 && number % 3 === 0) {
        console.log(number);
    }
});

// 9 Output only even numbers from the array.
const evenNumbers = numbers.filter(number => {
    if (number % 2 === 0) {
        console.log(number);
    }
});

// 10 For every number in the array output the difference between that number and number 5.
for (const number of numbers) {
    console.log(number - 5);
};

// 11 For every number in the array output the squared difference of that number and number 5.
for (const number of numbers) {
    console.log((number - 5) * (number - 5));
};

// 12 Output all the numbers which are greater then their predecessor in the array.
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
        console.log(numbers[i]);
    }
};

// 13 Output all the peaks in the array. A peak is a number whose predecessor and succesor are both smaller then the number itself.
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
        console.log(numbers[i]);
    }
};

// COUNTING NUMBERS 

// 1 Count how many negative numbers are there in the array.
const countNegativeNumbers = numbers.filter(number => {
    if (number < 0) {
        return number++;
    }
});
//console.log(countNegativeNumbers)

// 3 Compute the average of the numbers in the array. Answer: 3.68421...
// const average = summedNumbers / numbers.length;

// 4 Compute the sum of all the positive numbers in the array.
const result = numbers
    .filter(number => number > 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(result);

// 5 First, compute the average number in the array and save the result in variable. 
// Then compute the sum of squared differences from the average. Answer: 6188.1052...
const average = summedNumbers / numbers.length;
for (const number of numbers) {
    console.log((number * number) - average);
};
// UNFINISHED