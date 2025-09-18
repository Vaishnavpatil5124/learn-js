const user={
    name:"vaishnav",
    age:20,
    address:{
        street:"idk",
        city:"pune"
    },
    likes:"eat code repeat",

    bye(){
        console.log("game over");

    }
}

console.log(user.address); // undefined
console.log(user.address.city);//error

/*suppose we are taking data from users where filling address is optional 
 but to someone who has filled it we need to show his city
 but here the problem arises that someone who hasnt filled it showing city will give error**/

 //soln 01

 if(user.address!==undefined){
    console.log(user.address.city)
 }
 else{
    console.log("address not found")
 }

 // soln 02-- if adress not present give undefined

 console.log(user.address?.city)



user.bye();
user.greet?.(); // gives error not undefined for functions but we can use optional chaining ---> .?