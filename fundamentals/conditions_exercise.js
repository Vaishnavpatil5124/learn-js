// smallest string

const string=require("readline-sync");
const string1=string.question("enter string 1 :")
const string2=string.question("enter string 2 :")
const string3=string.question("enter string 3 :")

const lengthofString1=string1.length;
const lengthofString2=string2.length;
const lengthofString3=string3.length;

if(lengthofString1<lengthofString2 && lengthofString1<lengthofString3){
    console.log(`the smallest string is ${string1}`)
}

else if(lengthofString2<lengthofString1 && lengthofString2<lengthofString3){
    console.log(`the smallest string is ${string2}`)
}
else if(lengthofString3<lengthofString1 && lengthofString3<lengthofString2){
    console.log(`the smallest string is ${string3}`)
}
else{
    console.log(`the smallest string is nothing`)
}

// output depends upon the condition








