//Calculate the Average

// Write a function calculateAverage(numbers) that returns the average of all numbers in an array.

// Use a for loop to calculate the sum.

// Return the average.

// Assume the array contains at least one number.

// Example: calculateAverage([10, 20, 30, 40]) → 25

function calculateAverage(numbers) {
    sum=0;
    average=0;
    for(let i=0;i<numbers.length;i++) {
        sum+=numbers[i];
    }
    average=sum/numbers.length;
    return average;
}
console.log(calculateAverage([10, 20, 30, 40]));
