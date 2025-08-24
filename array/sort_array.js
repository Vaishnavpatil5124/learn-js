/**array sort */

const fruits=["apple","cherry","orrange","banana"];
fruits.sort(); // change the original array itself
console.log(fruits);

/**sort for numbers */

const random=[1,99,34,66,32,64,84,2,11];
//converts to string and compare utf-16 values.

function sortinascending(a,b){
    return a-b; // if positive swap else no swap in below sort function
}

function sortindescending(a,b){
    return b-a;
}
random.sort(sortinascending); // default ascending
console.log(random);
random.sort(sortindescending); // default ascending
console.log(random);