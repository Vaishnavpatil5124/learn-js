const display=" i prefer code to sleep";
console.log(display.includes("to")); // return boolean

const vowels="aeiou";
let flag=false;

for(let char of display){
    if(vowels.includes(char)){
        flag=true;
        break;
    }
    else{
        flag=false;
    }
}

if(flag===true){
    console.log("the string has vowels")
}
else{
    console.log("the string doesnt has vowels")
}