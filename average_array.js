function avg(numbers) {
    sum=0;
    avg=0;
    for(let i=0;i<numbers.length;i++) {
        sum+=numbers[i];
    }
    avg=sum/numbers.length;
    return avg;
}
console.log(avg([10,20,30,40]));
