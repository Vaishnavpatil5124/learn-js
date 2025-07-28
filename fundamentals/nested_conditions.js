// largestofthree

const input=require("readline-sync");
const number1= Number(input.question("emter a first value: "));
const number2= Number(input.question("emter a second value: "));
const number3= Number(input.question("emter a third value: "));

if(number1>number2){
    if(number1>number3){
        console.log(`the largest value is ${number1}`)
    }
    else{
        console.log(`the largest value is ${number3}`)
    }
}

else{
    if(number2>number3){
        console.log(`the largest value is ${number2}`)
    }
    else{
        console.log(`the largest value is ${number3}`)
    }

}