/**pop */
let courses=["html","css","js","react"];
console.log("courses:",courses);
courses.pop();// removes last item and returns it if you save that in a variable
let second_removed=courses.pop();
console.log(second_removed);
console.log('new courses:',courses);

/**slice- removes items from specified indices */

let num=["one","two","three","four"];
let value=num.slice(1,2);//  start from one till 2 but not 2 itself
console.log(num);
console.log(value);//shallow copy

let userName="vaishnav";

let firstUpperchar=userName[0].toUpperCase();
let capitalize=firstUpperchar+userName.slice(1).toLowerCase();
console.log(capitalize);

/**splice for deleting */

let fruits=['mango','orange','banana','tea'];
fruits.splice(1,2); //starting from one delete 2 items
console.log(fruits);

/**splice for adding */

fruits.splice(1,0,"berries");//before 1 do not delete anything i.e(0) and add berries
console.log(fruits);

/* output
[ 'mango', 'tea' ]
[ 'mango', 'berries', 'tea' ]
 **/
