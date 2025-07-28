const x=12;
const y=14;

console.log(x+y); // normal result
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

const a="12";// string
const b="14";

console.log(a+b); // concatenation
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);//-- internally it converts strings into numbers for all operations except addition

const c="12"; // even if one operand is string the result will be concatenation
const d=14;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); // except addition every operation is normal