// function calculateTotal(numbers) {
//     let total=0;
//     for(let i=0;i<numbers.length;i++) {
//         total+=numbers[i];
//     }
//     return total;
// }
// console.log(calculateTotal([20,35,50]));

// function getstatus(total,target=100) {    // target=100--default parameter.
//     if(total>=target) {
//         return "target_reached";
//     } else {
//         return "target_not_reached";
//     }
// }
// console.log(getstatus(105));

// function countevennum(numbers) {
//     let count=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]%2!== 0) {
//             continue;
//         }
//         count ++
//     }
//     return count;
// }
// console.log(countevennum([3,8,11,14,20]));

// function firstfail(marks,passmark=40) {
//     for(let i=0;i<marks.length;i++) {

//         if(marks[i]<passmark) {
//             return i;
//             break;
//     } 
//     }
//     return -1;
//     }
// console.log(firstfail([65,72,33,80]));


function checktemperature(temperature) {
    if(temperature<20) {
        return "cold";
    } else if(temperature>20 && temperature<30) {
        return "normal";
    } else {
        return "hot";
    }
}
console.log(checktemperature(32));