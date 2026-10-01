//second largest element in an array

function second(numbers) {
    largest=-Infinity;
    Second_largest=-Infinity;
    for (let i=0;i<numbers.length;i++) {
        if(numbers[i]>largest) {
            Second_largest=largest;
            largest=numbers[i];
        } else if (numbers[i]>Second_largest && numbers[i]!==largest) {
            Second_largest=numbers[i];
        }
    }
    return Second_largest;
}
console.log(second([12,34,60,90]));