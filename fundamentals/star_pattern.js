const pattern=require("readline-sync")
const rows=Number(pattern.question("eneter number of rows:"));

const symbol="*"
for(let i=0;i<=rows;i++){
    
    console.log(symbol.repeat(i));   
    
}