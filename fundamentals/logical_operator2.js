const firstname=null;
const nickname="";
// console.log(firstname || nickname);

// // checks if there is value in first name and print the variable having value
// let a=12;
// let b;
// console.log(a+(b||0))

const username=firstname && nickname;
console.log(username);


/** or || checks for first truthee value if it doesnt find it will give last falsey value
 * 
 * && search for first falsey value and it will return last truthee value
 */