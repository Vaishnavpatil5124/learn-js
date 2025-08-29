/**function as a object property */
const obj={
    name:"vaishnav",
    greet:function(){  // anonymous func method
        console.log("heloooo doston");
    },

    bye(){
        console.log("byeeeeeeeeeee")

    }

    // here bye is a key and the function itself is value
}

obj.greet();
obj.bye();