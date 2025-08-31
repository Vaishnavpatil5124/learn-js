/** OBJECTS ARE NOT COPIED BY VALUE BUT ARE COPIED BY REFRENCE */

const person1={
    name:"vaishnav",
    age:19

}
console.log(person1);

// creating new object with the same old object

const person2=person1;// new obj with same properties is created
console.log(person2);

// if we change the value of a key in person 2 the value in person1 also changes and vice-versa
person2.age=20;
console.log(person1);
console.log(person2);  

