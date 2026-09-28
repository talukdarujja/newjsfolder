// function sumPositive(numbers) {
//     sum=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]==0 || numbers[i]<0) {
//             continue;
//         }
//         sum+=numbers[i];
//     }
//     return sum;
// }
// console.log(sumPositive([10,-3,5,0,8]));

// const student_name="Ujjal Talukdar";
// const age=18;
// let course="BCA";
// var college_name="SITM";
// let marks=90;
// var birth_yr=2008;
// let city="ghy";
// const sem="first";
// let fav_sub="chem";

// console.log(student_name,age,course,college_name,marks,birth_yr,city,sem,fav_sub);

// course="B.TECH";
// college_name="AEC";
// birth_yr=2007;



// console.log(student_name,age,course,college_name,marks,birth_yr,city,sem,fav_sub);


// function menuChoice(choice) {
//     switch(choice) {
//         case "start game":
//             return 1;
//             case "load game":
//                 return 2;
//                 case "settings":
//                     return 3;
//                     case "exit":
//                         return 4;
//                         default:
//                             return "invalid choice";
//     }
// }
// console.log(menuChoice("load game"));


// function classifynum(number) {
//     if(number<0) {
//         return "negative";
//     } else if(number==0) {
//         return "zero";
//     } else {
//         return "positive";
//     }
// }
// console.log(classifynum(0));

function getDayname(day) {
    switch(day) {
        case 1:
            return "monday";
            break;
        case 2:
            return "tuesday";
            break;
        case 3:
            return "wednesday";
            break;
        case 4:
            return "thursday";
            break;
        case 5:
            return "friday";
            break;
        case 6:
            return "saturday";
            break;
        case 7:
            return "sunday";
            break;
        default:
            return "invalid numbers";
    }
}
console.log(getDayname(3));

function checkentry(age,hasId) {
    if(age>=18 && hasId) {
        return "allowed";
    } else if(age>=18 && !hasId) {
        return "Id required";
    } else {
        return "too young";
    }
}
console.log(checkentry(20,false));

function login(attempts, correctPassword="1234") {
        for(let i=0;i<attempts.length;i++) {
        if(attempts[i]=="") {
            continue;
        }
        if(attempts[i]==correctPassword) {
            return "Login Successful";
            break;
    }
}
return "account locked";
}
console.log(login(["1111","","5678","1234"]));

function findNumber(numbers,target) {
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]<0) {
            continue;
        }
        if(numbers[i]==target) {
            return "found";
            break;
        }
    }
    return "not found";
}
console.log(findNumber([-5,10,-2,7,20],7));

function checkpass(passwords) {
     let coorectpass="1234";
     let i=0;
    do {
        if(passwords[i]==coorectpass) {
            return "correct password";
        }
        i++;
    } while(i<passwords.length);


    return "password incorrect";
}
console.log(checkpass(["1111","5678","1234"]));

