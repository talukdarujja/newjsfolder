// function calculateTotal(numbers) {
//     total=0;
//     for(let i=0;i<numbers.length;i++) {
//         total+=numbers[i];
//     }
//     return total;
// }
// console.log(calculateTotal([20,35,50]));
// function getstatus(total, target=100) {      //default parameter-target
//     if(total>=target) {
//         return "target reached";
//     } else {
//         return "target not reached";
//     }
// }
// console.log(getstatus(105)); 

// function countevennumbers(numbers) {
//     let count=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]%2!=0) {
//             continue;
//         }
//         count++;
//     }
//     return count;
// }
// console.log(countevennumbers([3,8,11,14,20]));


// function firstfail(marks,passmark=40) {
//     for(let i=0;i<marks.length;i++) {
//     if(marks[i]<passmark) {
//         return i;
//         break;
//     }
// }
// return -1;
// }
// console.log(firstfail([65,72,90,80]));

// function checkTemperature(temp) {
//     let message="";
//     if(temp<20) {
//         message="cold";
//     } else if(temp>20 && temp<30) {
//         message="normal";
//     } else {
//         message="hot";
//     }
// }
// console.log(checkTemperature(25));

// Count Numbers Divisible by 3

// Write a function countDivisibleByThree(numbers) that returns the count of numbers divisible by 3.

// Use a for loop.

// Use continue to skip numbers that are not divisible by 3.

// Return the count.

// Example: countDivisibleByThree([3, 5, 9, 10, 12, 14]) → 3

// function countDivisibleByThree(numbers) {
//     count=0
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]%3!=0) {
//             continue;
//         }
//         count++;
//     }
//     return count;
// }
// console.log(countDivisibleByThree([3,5,9,10,12,24]));

// Count Positive Numbers

// Write a function countPositive(numbers) that returns the number of positive elements in an array.

// Use a for loop.

// Use continue to skip zero and negative numbers.

// Return the final count.

// Example: countPositive([-2, 5, 0, 8, -1, 10]) → 3

// function countPositive(numbers) {
//     count=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]<=0) {
//             continue;
//         }
//         count++;
//     }
//     return count;
// }
// Find the First Zero

// Write a function firstZero(numbers) that returns the index of the first zero in an array.

// Use a for loop.

// Use break when the first zero is found.

// Return -1 if there is no zero.

// Example: firstZero([4, 7, 2, 0, 8, 0]) → 3

// function firstzero(numbers) {
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]==0) {
//             return i;   //by default returns that index where first occurrence 0f zero is present
//         }
//     }
// } 
// console.log(firstzero([0,4,7,2,0,8,0]));

// Calculate the Average

// Write a function calculateAverage(numbers) that returns the average of all numbers in an array.

// Use a for loop to calculate the sum.

// Return the average.

// Assume the array contains at least one number.

// Example: calculateAverage([10, 20, 30, 40]) → 25

// function calulateAverage(numbers) {
//     sum=0;
//     average=0;
//     for(let i=0;i<numbers.length;i++) {
//         sum+=numbers[i];
//         average=sum/numbers.length;
//     }
//     return average;
// }
// console.log(calulateAverage([10,20,30,40,20]));

// Find the Maximum Number

// Write a function findMaximum(numbers) that returns the largest number in an array.

// Use a for loop.

// Do not use Math.max().

// Return the maximum value.

// Example: findMaximum([12, 45, 7, 89, 23]) → 89

// function findmaximum(numbers) {
//     max=numbers[0];
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]<max) {
//             max=numbers[i];
//         }
//     }
//     return max;
// }
// console.log(findmaximum([12,45,7,89,23]));
// Reverse an Array

// Write a function reverseArray(numbers) that returns a new array containing the elements in reverse order.

// Use a for loop.

// Do not use .reverse().

// Return the new array.

// Example: reverseArray([1, 2, 3, 4]) → [4, 3, 2, 1]

// function reversearray(numbers) {
//     reverse=[];
//     for(let i=numbers.length-1;i>=0;i--) {
//         reverse+=[numbers[i]];
//     }
//     return reverse;
// }
// console.log(reversearray([1,2,3,4]));

// Sum of Odd Numbers

// Write a function sumOddNumbers(numbers) that returns the sum of all odd numbers in an array.

// Use a for loop.

// Use continue to skip even numbers.

// Return the sum.

// Example: sumOddNumbers([2, 5, 7, 10, 13]) → 25

// function sumodd(numbers) {
//     sum=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]%2==0) {
//             continue;
//         }
//         sum+=numbers[i];
//     }
//     return sum;
// }
// console.log(sumodd([2,5,7,10,13]));

// Find the First Number Greater Than a Limit

// Write a function firstAbove(numbers, limit = 50) that returns the index of the first number greater than limit.

// Use a for loop.

// Use break after finding the first matching number.

// Return -1 if no number matches.

// Example: firstAbove([10, 25, 45, 60, 75], 50) → 3

// function firstabove(numbers, limit=50) {
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]>limit) {
//             return i;
//         }
//     }
// }
// console.log(firstabove([10,25,45,60,75]))

// Count Numbers in a Range

// Write a function countInRange(numbers, min = 10, max = 50) that returns how many numbers are between min and max, inclusive.

// Use a for loop.

// Use continue to skip numbers outside the range.

// Return the count.

// Example: countInRange([5, 10, 25, 50, 60]) → 3

// function countInrange(numbers, min=10,max=50) {
//     let count=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]<min || numbers[i]>max) {
//             continue;
//         }
//         count++;
//     }
//     return count;
// }
// console.log(countInrange([5,10,25,50,60]));

// Sum Until a Negative Number

// Write a function sumUntilNegative(numbers) that adds numbers until a negative number is encountered.

// Use a for loop.

// Use break when a negative number is found.

// Return the sum before the negative number.

// Example: sumUntilNegative([10, 20, 5, -3, 50]) → 35

// function sumuntilnegative(numbers) {
//     sum=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]<0) {
//             break;
//         }
//         sum+=numbers[i];
//     }
//     return sum;
// } 
// console.log(sumuntilnegative([10,20,5,-3,50]));

// Count Numbers Divisible by 3

// Write a function countDivisibleByThree(numbers) that returns the count of numbers divisible by 3.

// Use a for loop.

// Use continue to skip numbers that are not divisible by 3.

// Return the count.

// Example: countDivisibleByThree([3, 5, 9, 10, 12, 14]) → 3

// function countdivisiblethree(numbers) {
//     count=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]%3!==0) {
//             continue;
//         }
//         count++;
//     }
//     return count;
// }
// console.log(countdivisiblethree([3, 5, 9, 10, 12, 14]));

// Calculate Total of Passing Marks

// Write a function sumPassingMarks(marks, passMark = 40) that returns the sum of marks that are greater than or equal to passMark.

// Use a for loop.

// Use continue to skip failing marks.

// Return the total.

// Example: sumPassingMarks([35, 50, 70, 20, 80]) → 200

function sumPassingMarks(marks, passMark = 40) {
    sum=0;
    for(let i=0;i<marks.length;i++) {
        if(marks[i]<passMark) {
            continue;
        }
        sum+=marks[i];
    }
    return sum;
}
console.log(sumPassingMarks([35,50,70,20,80]));