function getresult(marks,passmark=40) {
    if(marks>=80) {
        console.log("A");
    } else if(marks>=60 && marks<89) {
        console.log("B");
    } else if(marks>=passmark && marks<60) {
        console.log("C");
    } else {
        console.log("F");
    }
    return getresult;
}
console.log(getresult(75));

function calculateTotal(numbers) {
    total=0;
    for(let i=0;i<numbers.length;i++) {
        total+=numbers[i];
    }
    return total;
}
console.log(calculateTotal([10,20,30,40]));

function getstatus(total,target=100) {
    if(total>=target) {
        console.log("target reached");
    } else {
        console.log("target not reached");
    }
    return getstatus;
}
console.log(getstatus(80));
