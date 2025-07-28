// if(true){
//     console.log("hello world");
// }
// conditions  run on boolean value . only executes on true 
// instead of true or false we use expression which is evaluated

const readlinesync=require("readline-sync");
const userage=readlinesync.question("how old are you?");

if(userage>18){
    console.log("hey! you are an adult")
}
else{
    console.log("you are not an adult")
}

