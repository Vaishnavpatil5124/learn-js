const num=[1,2,3,["html","js","css"]];
const [a,b,c,courses]=num;

console.log(a);
console.log(b);
console.log(c);
console.log(courses);


/** if you want fruits in one array and rest elements in another array */
const arr=[['banana','apple','papaya'],1,2,3,4];
const[fruits,...rest]=arr;
console.log(rest);
console.log(fruits);


/**swap using destructuring */

let m=5;
let n=10;

[m,n]=[n,m];
console.log(m);
console.log(n);
