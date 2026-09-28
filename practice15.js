// 21. Find First Even Number

// Write:

// findFirstEven(numbers)

// Use a for loop.

// Check each number.
// When the first even number is found, store it.
// Stop using break.
// Return the number.
// If no even number exists, return -1.

// Example:

// findFirstEven([3, 7, 9, 12, 15])

// Expected:

// 12
function findFirstEven(numbers) {
    found=false;
    even_num=0;
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]%2==0) {
            even_num=numbers[i];
        }
        if(numbers[i]==even_num) {
            found=true;
            return "first element found at index " + i;
    }
}
return -1;
}
console.log(findFirstEven([3, 7, 9, 12, 15]));
