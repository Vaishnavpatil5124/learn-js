/**proprty existence */

const obj= {
    name:"vaishnav",
    age:19
}

const isfound="name" in obj; // true or false--> checks for key 
console.log(isfound);

// object doesnt supporting indexing so use-->> for in
for(let item in obj){
    console.log(item,obj[item]);
}