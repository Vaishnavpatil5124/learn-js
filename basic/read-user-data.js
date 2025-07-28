// read data from user
const readlinesync=require("readline-sync");
const user=readlinesync.question("may i know your name? ")
const age=readlinesync.question(" may i know your age?")
const yearofbirth=2025-age;
console.log(`welcome ${user} to this world!!`); 
console.log(`your age is ${age} and you were born in ${yearofbirth}`);