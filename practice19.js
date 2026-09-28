// findGreaterThan100(numbers)

// Use do...while.

// Return the first number greater than 100.

// If none exists, return:

// -1
function findgreaterthan100(numbers) {
    i=0;
    do {
        if(numbers[i]>100) {
            return numbers[i];
        }
        i++;
    } while(i<numbers.length);
    return -1;
}
console.log(findgreaterthan100([10,80,10,23]));