<<<<<<< HEAD
// let a=25;
// let b=45;
// let c=10;

// if(a>b && a>c) {
//     console.log(a + " is largest");
// } else if(b>a && b>c) {
//     console.log(b +" is largest");
// } else {
//     console.log(c +" is largest");
// }

//swaping two variables using a temporary third variable

// let a=89;
// let b=67;
// let c=0;

// c=a;  //c=89
// a=b;   //a=67
// b=c;   // b=89

// console.log("a=",a);

// console.log("b=",b);

//simple interest

// let p=90;
// let r=67
// let t=45;

// let si=(p*r*t)/100;
// console.log("simple interest=",si);

//SUMOF n NUMBERS

// let n=50;
// let sum=0;

// for(let i=0;i<=n;i++) {
//     sum=sum+i;
// }
// console.log('sum is',sum);
    
//sum of even numbers
// let r=20;
// let evsum=0;

// for(let i=1;i<=r;i++) {
//     if(i%2==0) {
//         evsum+=i;
//     }
// }
// console.log("sum=",evsum);

// //sum oof odd nos
// let t=20;
// let oddsum=0;

// for(let i=1;i<=t;i++) {
//     if(i%2!=0) {
//         oddsum+=i;
//     }
// }
// console.log("sum=",oddsum);

//factorial
// let u=5;
// let fact=1;

// for(let i=1;i<=u;i++) {
//     fact*=i
// }
// console.log(fact);

//multiplication table of 5

// let n=5;

// for(let i=1;i<=10;i++) {
//     console.log(n + " x" + i + " =" + (n*i));
// }
//reverse a number

// let h=125;
// let rev_num=0;

// while(h>0) {

// let remainder=h%10 //5
// rev_num=(rev_num*10)+remainder;
// h=Math.floor(h/10);   //12
// }

//console.log(rev_num);

//sum of digits of a no

// let b=125;
// let digitsum=0;

// while(b>0) {
//  let lastvalue=b%10;  //remainder=5
//    digitsum+=lastvalue;
//    b=Math.floor(b/10);  //  b//10=12
// }
// console.log(digitsum);

//whether a no is palindrome or not

// let v=121;
// let original=v;
// let rev_num=0;

// while(v>0) {
//     let dremainder=v%10  //1
//     rev_num=(rev_num*10)+dremainder;  //1
//     v=Math.floor(v/10);  //12
// }

// if(original==rev_num) {
//     console.log("palindrome");
// } else {
//     console.log("non-palindrome");
// }

// //prime or not

// let m=10;
// let isprime=false;

// for(let i=2;i<=m-1;i++) {
//     if(m%i==0) {
//         isprime=false;
//         break;
//     }
// }
// if(isprime==true) {
//     console.log("prime");
// } else {
//     console.log("nonprime");
// }

// //reverse a str
// // let str="ujjal";
// // let reverse_str="";

// // for(let i=str.length-1;i>=0;i--) {   //i-index of str
// //     reverse_str+=str[i]
// // }
// // console.log(reverse_str)

// // //count vowels
// // let strr = "javascript";
// // let count = 0;

// // for (let ch of strr) {
// //     if ("aeiou".includes(ch.toLowerCase())) {
// //         count++;
// //     }
// // }

// // console.log("Vowels =", count);

// //print prime nos form 1 to 100


// // for(let z=2;z<=100;z++) {
// //     let prime=true;

// // for(let i=2;i<=z-1;i++) {
// //     if(z%i==0) {
// //         prime=false;
// //         break

// //     }

// // }

// // if(prime==true) {
// //     console.log(z);
// // }
// // }

// //check str is palindrome or not
// let st="SITM";
// let originial=st;
// let rev_st="";

// for(let i=st.length-1;i>=0;i--) {
//     rev_st +=st[i];
// }
// console.log(rev_st);

// if(originial==rev_st) {
//     console.log("palindrome"); 
// } else {
//     console.log("non p");
// }

//count characters in string

// let string="ujjal";
// let count=0;

// for(let i=0;i<string.length;i++) {
//     count++;
// }
// console.log(count);

//Array
//find largest element in an array

// let arr=[12,34,56,76,2];
// let largest=arr[0];  // equals to min number js can store

// for(let i=0;i<arr.length;i++) {
//     if(arr[i]>largest) {
//         largest=arr[i];
//     }
// }
// console.log(largest);

//find sum of array elements
// let arr1=[10,20,30];
// let asum=0;

// for(let i=0;i<arr1.length;i++) {
//     asum=asum+arr1[i];
// }
// console.log(asum);

// //reverse array elements
// let arr2=[78,23,90,87]
// let reversed=arr2.reverse();
// console.log(reversed);

// //sort array

// let arr3=[90,78,56,2,14];
// arr3.sort(function(a,b) {
// return a-b;  //a-b-ascending order  b-a-dec order
// });
// console.log(arr3);

//sum of elements of an array

// let arr4=[10,20,30,40];
// let prod=1;

// for(let i=0;i<arr4.length;i++) {
//     prod*=arr4[i];
// }
// console.log(prod);

// let name = prompt("enter your name:");
// console.log(name);


function calculateTotal(numbers) {
    total=0;
    for(let i=0;i<numbers.length;i++) {
        total+=numbers[i];
    }
    return total;
}
console.log(calculateTotal([20,35,50]));

function getstatus(total,target=100) {
    if(total>=target) {
        return target_reached;
    } else {
        return target_not_reached;
    }
}
console.log(getstatus(105));
=======
// function calculateTotal(numbers) {
//     total=0;
//     for(let i=0;i<numbers.length;i++) {
//         total+=numbers[i];
//     }
//     return total;
// }
// console.log(calculateTotal([20,35,50]));
// function getstatus(total, target=100) {      //default parameter-target
//     if(total>=target) {
//         return "target reached";
//     } else {
//         return "target not reached";
//     }
// }
// console.log(getstatus(105)); 

// function countevennumbers(numbers) {
//     let count=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]%2!=0) {
//             continue;
//         }
//         count++;
//     }
//     return count;
// }
// console.log(countevennumbers([3,8,11,14,20]));


// function firstfail(marks,passmark=40) {
//     for(let i=0;i<marks.length;i++) {
//     if(marks[i]<passmark) {
//         return i;
//         break;
//     }
// }
// return -1;
// }
// console.log(firstfail([65,72,90,80]));

// function checkTemperature(temp) {
//     let message="";
//     if(temp<20) {
//         message="cold";
//     } else if(temp>20 && temp<30) {
//         message="normal";
//     } else {
//         message="hot";
//     }
// }
// console.log(checkTemperature(25));

// Count Numbers Divisible by 3

// Write a function countDivisibleByThree(numbers) that returns the count of numbers divisible by 3.

// Use a for loop.

// Use continue to skip numbers that are not divisible by 3.

// Return the count.

// Example: countDivisibleByThree([3, 5, 9, 10, 12, 14]) → 3

// function countDivisibleByThree(numbers) {
//     count=0
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]%3!=0) {
//             continue;
//         }
//         count++;
//     }
//     return count;
// }
// console.log(countDivisibleByThree([3,5,9,10,12,24]));

// Count Positive Numbers

// Write a function countPositive(numbers) that returns the number of positive elements in an array.

// Use a for loop.

// Use continue to skip zero and negative numbers.

// Return the final count.

// Example: countPositive([-2, 5, 0, 8, -1, 10]) → 3

// function countPositive(numbers) {
//     count=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]<=0) {
//             continue;
//         }
//         count++;
//     }
//     return count;
// }
// Find the First Zero

// Write a function firstZero(numbers) that returns the index of the first zero in an array.

// Use a for loop.

// Use break when the first zero is found.

// Return -1 if there is no zero.

// Example: firstZero([4, 7, 2, 0, 8, 0]) → 3

// function firstzero(numbers) {
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]==0) {
//             return i;   //by default returns that index where first occurrence 0f zero is present
//         }
//     }
// } 
// console.log(firstzero([0,4,7,2,0,8,0]));

// Calculate the Average

// Write a function calculateAverage(numbers) that returns the average of all numbers in an array.

// Use a for loop to calculate the sum.

// Return the average.

// Assume the array contains at least one number.

// Example: calculateAverage([10, 20, 30, 40]) → 25

// function calulateAverage(numbers) {
//     sum=0;
//     average=0;
//     for(let i=0;i<numbers.length;i++) {
//         sum+=numbers[i];
//         average=sum/numbers.length;
//     }
//     return average;
// }
// console.log(calulateAverage([10,20,30,40,20]));

// Find the Maximum Number

// Write a function findMaximum(numbers) that returns the largest number in an array.

// Use a for loop.

// Do not use Math.max().

// Return the maximum value.

// Example: findMaximum([12, 45, 7, 89, 23]) → 89

// function findmaximum(numbers) {
//     max=numbers[0];
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]<max) {
//             max=numbers[i];
//         }
//     }
//     return max;
// }
// console.log(findmaximum([12,45,7,89,23]));
// Reverse an Array

// Write a function reverseArray(numbers) that returns a new array containing the elements in reverse order.

// Use a for loop.

// Do not use .reverse().

// Return the new array.

// Example: reverseArray([1, 2, 3, 4]) → [4, 3, 2, 1]

// function reversearray(numbers) {
//     reverse=[];
//     for(let i=numbers.length-1;i>=0;i--) {
//         reverse+=[numbers[i]];
//     }
//     return reverse;
// }
// console.log(reversearray([1,2,3,4]));

// Sum of Odd Numbers

// Write a function sumOddNumbers(numbers) that returns the sum of all odd numbers in an array.

// Use a for loop.

// Use continue to skip even numbers.

// Return the sum.

// Example: sumOddNumbers([2, 5, 7, 10, 13]) → 25

// function sumodd(numbers) {
//     sum=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]%2==0) {
//             continue;
//         }
//         sum+=numbers[i];
//     }
//     return sum;
// }
// console.log(sumodd([2,5,7,10,13]));

// Find the First Number Greater Than a Limit

// Write a function firstAbove(numbers, limit = 50) that returns the index of the first number greater than limit.

// Use a for loop.

// Use break after finding the first matching number.

// Return -1 if no number matches.

// Example: firstAbove([10, 25, 45, 60, 75], 50) → 3

// function firstabove(numbers, limit=50) {
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]>limit) {
//             return i;
//         }
//     }
// }
// console.log(firstabove([10,25,45,60,75]))

// Count Numbers in a Range

// Write a function countInRange(numbers, min = 10, max = 50) that returns how many numbers are between min and max, inclusive.

// Use a for loop.

// Use continue to skip numbers outside the range.

// Return the count.

// Example: countInRange([5, 10, 25, 50, 60]) → 3

// function countInrange(numbers, min=10,max=50) {
//     let count=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]<min || numbers[i]>max) {
//             continue;
//         }
//         count++;
//     }
//     return count;
// }
// console.log(countInrange([5,10,25,50,60]));

// Sum Until a Negative Number

// Write a function sumUntilNegative(numbers) that adds numbers until a negative number is encountered.

// Use a for loop.

// Use break when a negative number is found.

// Return the sum before the negative number.

// Example: sumUntilNegative([10, 20, 5, -3, 50]) → 35

// function sumuntilnegative(numbers) {
//     sum=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]<0) {
//             break;
//         }
//         sum+=numbers[i];
//     }
//     return sum;
// } 
// console.log(sumuntilnegative([10,20,5,-3,50]));

// Count Numbers Divisible by 3

// Write a function countDivisibleByThree(numbers) that returns the count of numbers divisible by 3.

// Use a for loop.

// Use continue to skip numbers that are not divisible by 3.

// Return the count.

// Example: countDivisibleByThree([3, 5, 9, 10, 12, 14]) → 3

// function countdivisiblethree(numbers) {
//     count=0;
//     for(let i=0;i<numbers.length;i++) {
//         if(numbers[i]%3!==0) {
//             continue;
//         }
//         count++;
//     }
//     return count;
// }
// console.log(countdivisiblethree([3, 5, 9, 10, 12, 14]));

// Calculate Total of Passing Marks

// Write a function sumPassingMarks(marks, passMark = 40) that returns the sum of marks that are greater than or equal to passMark.

// Use a for loop.

// Use continue to skip failing marks.

// Return the total.

// Example: sumPassingMarks([35, 50, 70, 20, 80]) → 200

function sumPassingMarks(marks, passMark = 40) {
    sum=0;
    for(let i=0;i<marks.length;i++) {
        if(marks[i]<passMark) {
            continue;
        }
        sum+=marks[i];
    }
    return sum;
}
console.log(sumPassingMarks([35,50,70,20,80]));
>>>>>>> 5b2fa20ae131119e6351eb61a76d6b6c44c8406c
