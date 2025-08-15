function sum(x,y){
    let sum=0;
    for(let i=x;i<=y;i++){
        sum=sum+i
    }
    return sum;
}

const readlinesync=require("readline-sync");
const input1=Number(readlinesync.question("enter starting point"));
const input2=Number(readlinesync.question("enter ending point"));

console.log(`the sum is ${sum(input1,input2)}`);