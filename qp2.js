// Count Numbers Divisible by 3

// Write a function countDivisibleByThree(numbers) that returns the count of numbers divisible by 3.

// Use a for loop.

// Use continue to skip numbers that are not divisible by 3.

// Return the count.

// Example: countDivisibleByThree([3, 5, 9, 10, 12, 14]) → 3

function countDivisibleByThree(numbers) {
     count=0;
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]%3!=0) {
            continue;
        }
        count++;
    }
return count;
    }
console.log(countDivisibleByThree([3, 5, 9, 10, 12, 14]));