let obj={
    name:"prakash",
    address:{
        state:"mh",
        city:"pune",
        pin:415403
    },
    age:20,
    courses:['html','css','js','react']
}



// let {name,address,age,courses}=obj; // varaible name should always correspond to the key
// console.log(name);
// console.log(address);
// console.log(age);

// let{name,...rest}=obj
// console.log(name);
// console.log(rest);

let{name:username}=obj
console.log(username); //output : prakash

let{address:{city}}=obj
console.log(city);
console.log(address);//error -->it has been destructured