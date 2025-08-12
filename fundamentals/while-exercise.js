/**
 * user enters a number,if the number is greater than 50 then ask the user to enter a number less than 50 again
 */

let readlinesync=require("readline-sync");

let number=readlinesync.question("enter a number less than 50: ")
console.log(number);

while(number>=50){
    number=readlinesync.question("please eneter a number less than 50:");

}

console.log("number accepted")