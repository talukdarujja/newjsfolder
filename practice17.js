// 44. Count Until Negative

// Write:

// countUntilNegative(numbers)

// Use a for loop.

// Count positive numbers.
// Ignore zero using continue.
// Stop when a negative number is encountered using break.
// Return the count.

// Example:

// countUntilNegative([5, 8, 0, 10, 7, -2, 20])

// Expected:

// 4
function countUntilNegative(numbers) {
    count=0;
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]==0) {
            continue;
        }
        if(numbers[i]<0) {
        break;
        }
    count++;
    }
    return count;
}
console.log(countUntilNegative([5, 8, 0, 10, 7, -2, 20]));
