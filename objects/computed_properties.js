/**adding property to object */

const readlineSync=require("readline-sync");
const input=readlineSync.question("what do you want to know about the mentor(name/age/city/state)")
const course=readlineSync.question("what do you want to learn(html/css/js/react)")

const obj={
    name:"vaishnav",
    age:100,
    [course]:"course not available"
}

obj.city="pune";// adding new key-value
obj.state="MH";

console.log(obj[input.toLowerCase()]);
console.log(obj[course]);
// toLowerCase is used to lowercase the input entered by user.