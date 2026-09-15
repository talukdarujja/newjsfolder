function countEvenNumbers(numbers){
    let count=0;
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]%2==0) {
            count+=1
        }
        if(numbers[i]%2!=0) {
            continue;
        }
    }
    return count;
}
console.log(countEvenNumbers([3,8,11,14,20]));