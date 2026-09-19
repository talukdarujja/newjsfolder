// Find the Maximum Number

// Write a function findMaximum(numbers) that returns the largest number in an array.

// Use a for loop.

// Do not use Math.max().

// Return the maximum value.

// Example: findMaximum([12, 45, 7, 89, 23]) → 89

function findMaximum(numbers) {
    maximum=numbers[0];
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]>maximum) {
            maximum=numbers[i];
        }
    }
    return maximum;
}
console.log(findMaximum([12, 45, 7, 89, 23]));

// Sum of Odd Numbers

// Write a function sumOddNumbers(numbers) that returns the sum of all odd numbers in an array.

// Use a for loop.

// Use continue to skip even numbers.

// Return the sum.

// Example: sumOddNumbers([2, 5, 7, 10, 13]) → 25

function sumOddNumbers(numbers) {
    oddsum=0;
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]%2==0) {
            continue;
        }
        oddsum+=numbers[i];
    }
    return oddsum;
}
console.log(sumOddNumbers([2, 5, 7, 10, 13]));

// Find the First Number Greater Than a Limit

// Write a function firstAbove(numbers, limit = 50) that returns the index of the first number greater than limit.

// Use a for loop.

// Use break after finding the first matching number.

// Return -1 if no number matches.

// Example: firstAbove([10, 25, 45, 60, 75], 50) → 3

function firstAbove(numbers, limit = 50) {
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]>limit) {
            return i;
            break;
        }
    }
    return -1;
}
console.log(firstAbove([10, 25, 45, 60, 75], 50));

//Count Numbers in a Range

// Write a function countInRange(numbers, min = 10, max = 50) that returns how many numbers are between min and max, inclusive.

// Use a for loop.

// Use continue to skip numbers outside the range.

// Return the count.

// Example: countInRange([5, 10, 25, 50, 60]) → 3

function countInRange(numbers, min=10,max=50) {
    count=0;
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]<min || numbers[i]>max) {
            continue;
        }
        count++;
    }
    return count;
}
console.log(countInRange([5, 10, 25, 50, 60]));

// Sum Until a Negative Number

// Write a function sumUntilNegative(numbers) that adds numbers until a negative number is encountered.

// Use a for loop.

// Use break when a negative number is found.

// Return the sum before the negative number.

// Example: sumUntilNegative([10, 20, 5, -3, 50]) → 35

function sumUntilNegative(numbers) {
    sum=0;
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]<0) {
            break;
        }
        sum+=numbers[i];
    }
    return sum;
}
console.log(sumUntilNegative([10, 20, 5, -3, 50]));

//Calculate Discount
//Write a function calculateDiscount(price, discount = 10) that returns the final price after applying a discount
//percentage. If discount is negative or greater than 100, return the original price.

function calculateDiscount(price, discount=10) {
   let final_price=0;
   let discount_amt=price*discount/100;
   final_price=price-discount_amt;
    if(discount<0 || discount>100) {
        return price;
    } else {
    return final_price;
}
}
console.log(calculateDiscount(500, discount = 10));

//check palindrome array
//Write a function isPalindrome(numbers) that returns true if an array reads the same forward and backward. Use a for
//loop and break when a mismatch is found.

function isPalindrome(numbers) {
 let result = true;
 for (let i = 0; i < numbers.length / 2; i++) {
 if (numbers[i] !== numbers[numbers.length - 1 - i]) {
 result = false;
 break;
 }
 }
 return result;
}
console.log(isPalindrome([1, 2, 3, 2, 1]));