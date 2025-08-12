const username= "vaishnav";
try{
    console.log(myname);
    Somefunction();
} catch(error){
    console.log("error occured");
    console.log(error.name);
    console.log(error.message);
    console.log(error.message);
    console.log(error.stack);

}finally{
    console.log("finally executed prakash");//runs irrespective of error in try block
}

console.log(username); // inspite of having error in above block this line of code is executed
