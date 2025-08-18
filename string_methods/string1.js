/**
 * iterating over string
 */

let display="i am vaishnav";
for(let char of display){  //also includes whitespaces
    console.log(char);
}

console.log(display[0]);//index wise access

//another way 
for(let i=0;i<display.length;i++){
    console.log(display[i]);
}