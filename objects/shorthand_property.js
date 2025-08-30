/**short hand */

// function getobj(name,age){
//     return{
//         name:name,
//         age:age
//     }
// }

// const obj=getobj("vaishnav",19);
// console.log(obj);


function getobj(name,age){
    return{
        name,
        age
    }
}

const obj=getobj("vaishnav",19);
console.log(obj);

// another way to log the data in keyy value pair

const student="raj";
const age=78;
console.log({student,age});

/**output 
  { student: 'raj', age: 78 }
*/
