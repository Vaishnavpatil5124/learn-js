/**push  */

let arr=["apple","banana","orrange"]
console.log(arr);// add a element at the end of an array
arr.push("mango");
console.log(arr);

arr.push("kiwi","berries","melons");// push() can take multiple value
console.log(arr);

/** concat */

let arr1=[1,2,3,4];
let arr2=[5,6,7,8,9];
let arr3=[10];
let arr4=arr1.concat(arr2,arr3);//merge two or more array
console.log(arr4);