// declare a array 
// const student=new Array();
/**
 * set only accept unique values
 * */
const studentId = new Set();
studentId.add(2);
studentId.add(3);
studentId.add(1);
console.log(studentId); //Set(3) { 2, 3, 1 }
studentId.delete(1);
console.log(studentId);

