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