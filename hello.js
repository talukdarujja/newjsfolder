// for (let i=1;i<=5;i++) {
//     console.log("hello");
// } 

// let str="SITM";
// let rvs="";

// for(let i=str.length-1;i>=0;i--) {
//     rvs+=str[i];
// }
// console.log(rvs);

// let arr=[9,7,6,8,4];
// let prod=1;
// for(let i=1;i<arr.length;i++) {
//     prod*=arr[i];
// }
// console.log(prod);

//array binary search
let arr1=[89,45,67,90,23];
arr1.sort();
let key=67;

let low=0;
let high=arr1.length-1;
let mid;
while(low<=high) {
    if(key==arr1[mid]) {
        mid=(low+high)/2;
        console.log("element found at" + mid);
        break;
    } 
    if(key>arr1[mid]) {
        low=mid+1;
    } else {
        high=mid-1;
    }
    }



// for(let i=0;i<arr.length;i++) {
//     if(key==mid) {
//         console.log("element found");
//         break;
//     }
// while(arr.length>0) {
//     low=mid+1
//     high=mid-1
// }
// }
// linear search

// let arr3=[90,67,89,45,32];
// let keyy=32;

// for(let i=0;i<arr3.length;i++) {
//     if(keyy==arr3[i]) {
//         console.log("element found" + i);
//     }
// }


