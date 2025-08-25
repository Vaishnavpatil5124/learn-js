/**copying in a array--> array refrence */

let arr1=[1,2,3] // is refering at memory location -abc123
let arr2=arr1; // is also pointing /refering to the same memory location
arr2.push(4);

console.log(arr1); 
console.log(arr2);
/**[ 1, 2, 3, 4 ]
   [ 1, 2, 3, 4 ] 

   arr1 also gets changed when we have just added a element to arr2
   */

/** solution --> spread operator */

let arr0=[1,1,5,8];
let newarr=[...arr0];
newarr.push(10);
console.log(arr0);
console.log(newarr);

/** output - problem solved
[ 1, 1, 5, 8 ]
[ 1, 1, 5, 8, 10 ]
 */