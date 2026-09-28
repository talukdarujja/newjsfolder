 function sumPositive(numbers) {
    sum=0;
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]==0 || numbers[i]<0) {
            continue;
        }
        sum+=numbers[i];
    }
    return sum;
}
console.log(sumPositive([10,-3,5,0,8]));