// for (let i=1;i<=5;i++) {

//     if(i===3) {
//         continue;
//     }

//     console.log(i)
// }


// let n=5;
// let sum=0;
// for(let i=1;i<=n;i++) {
//     sum=sum+i;
// }
//     console.log(sum);

// function sum(a,b) {
// let count=a+b;
// return count;
// }
// console.log(sum(2,3));

// function count(n) {
    
//     for(let i=0;i<=n;i++) {
//     }
//     return count;
// }
 
// console.log(count(5));
// functions

// add
// function add(a,b) {
//     let sum=a+b;
//     return sum;
// }
// console.log(add(1,3));

//even sum
// function even(n) {
//     let sum=0;
//     for(let i=0;i<=n;i++) {
//         if(i%2==0) {
//             sum+=i;
//         }
//     }
//     return sum;
// }
// console.log(even(6));

//odd sum
// function even(n) {
//     let sum=0;
//     for(let i=1;i<=n;i++) {
//         if(i%2!=0) {
//             sum+=i;
//         }
//     }
//     return sum;
// }
// console.log(even(6));


//to check even or odd

// function check(n) {
//     if(n%2==0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }
// console.log(check(9));

//arrow fnction for square

const square=num=>num*num;
console.log(square(8));

//arrays

//finding largest and smallest elements

// let arr=[34,56,76,20];
// let largest=arr[0];

// for(let i=0;i<=arr.length;i++) {
//     if(arr[i]>largest) {
//         largest=arr[i];
//     }
// }
// console.log(largest);

// let arr=[34,56,76,20];
// let smallest=arr[0];

// for(let i=0;i<=arr.length;i++) {
//     if(arr[i]<smallest) {
//         smallest=arr[i];
//     }
// }
// console.log(smallest);

//sum of elements

// let arr1=[10,20,30,50];
// let arr_sum=0;
// for(let i=0;i<arr1.length;i++) {    //i-index of the array
//     arr_sum+=arr1[i];
// }
// console.log(arr_sum);

//product of array elements
// let arr2=[10,20,30,50];
// let arr_prod=1;
// for(let i=0;i<arr2.length;i++) {    //i-index of the array
//     arr_prod*=arr2[i];
// }
// console.log(arr_prod);

//sum of square of array elements
// let arr3=[1,2,3,5];
// let arr3_sum=0;
// for(let i=0;i<arr3.length;i++) {    //i-index of the array
//     arr3_sum+=(arr3[i])**2;
// }
// console.log(arr3_sum);

// //reverse an array
// let arr4=[10,20,30,50];
// let reversed=arr4.reverse();
// console.log(reversed);

//square array elements
// let arr1=[10,20,30,50];
// let sq_array=[];
// for(let i=0;i<arr1.length;i++) {    //i-index of the array
//     sq_array=[(arr1[i])**2];
//     console.log(sq_array);
// }

//find even elements
// let arr5=[10,20,30,59];

// for(let i=0;i<arr5.length;i++) {    //i-index of the array
//     if(arr5[i]%2==0){
//         console.log(arr5[i]);
//     }
// }

//alternate method

// let arr6=[10,20,30,59];
// let squared=arr6.filter(num=>num%2==0);
// console.log(squared);

// //square array elements alternate method
// let arr7=[10,20,30,59];
// let squar=arr6.map(num=>num*num);
// console.log(squar);

//string 
// let str="ujjal";
// let rvrs=str.reverse()
// console.log(rvrs);
//or
// let strr="ujjal";
// let rvrss="";
// for(let i=strr.length-1;i>=0;i--) {
//     rvrss+=strr[i];
// }
// console.log(rvrss);

// let n=9;
// if (n%2==0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

// let num=23;
// isprime=true;

// for(let i=2;i<=num-1;i++) {
//     if(num%i==0) {
//         isprime=false;
//         break;
//     }
// }
// if (isprime==true) {
//     console.log("prime");
// } else {
//     console.log("non-prime");
// }

// let n=5;
// let fact=1;
// for(let i=1;i<=n;i++) {
//     fact*=i;
// }
// console.log(fact);

// let x=125;
// let summ=0;

// while(x>0) {
//     digits=x%10;
//     summ+=digits;
//     x=Math.floor(x/10);
// }
// console.log(summ);

let u=153;
let org=u;
let count=0;
let power_sum=0;
for(let i=0;i<3;i++) {
    count++;
}
while(u>0) {
    digi=u%10;
    power_sum+=digi**count;
    u=Math.floor(u/10);
} 
console.log(power_sum);

if(org==power_sum) {
    console.log("arms");
} else{
    console.log("not");
}

// let num1=4;
// let num2=5;

// if(num1<num2) {
//     min=num1;
// } else {
//     min=num2;
// }
// for(let i=0;i<min;i++) {
//     if(num1%i==0 && num2%i==0) {
//         hcf=i;
//     }
// }
// console.log(hcf);

// let num1=10;
// let num2=5;
// let lcm=num1*nu

// if(num1<num2) {
//     max=num1;
// } else {
//     max=num2;
// }
// for(let i=0;i<max;i++) {
//     if(max%num1==0 && max%num2==0) {
//         lcm=max;
//     }
// }
// console.log(lcm);

let m=255;
console.log(m.toString(16));  //hexadecimal