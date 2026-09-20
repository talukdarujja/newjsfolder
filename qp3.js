// Find the First Zero

// Write a function firstZero(numbers) that returns the index of the first zero in an array.

// Use a for loop.

// Use break when the first zero is found.

// Return -1 if there is no zero.

// Example: firstZero([4, 7, 2, 0, 8, 0]) → 3

function firstZero(numbers) {
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]==0) {
            return i;
            break;
        }
    }
    return -1;
}
console.log(firstZero([4, 7, 2, 0, 8, 0]));