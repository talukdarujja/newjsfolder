<<<<<<< HEAD
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
=======
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
>>>>>>> 5b2fa20ae131119e6351eb61a76d6b6c44c8406c
