/**spread array */

const arr1=[1,2,3,4,5,6];
const arr=[3,4,5,8,9,8];
// console.log("array",arr);
// console.log(...arr);//spreading array
const arr3=[...arr,...arr1];
console.log(arr3); 