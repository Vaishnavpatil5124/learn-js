function character(text,char){
    const index=text.indexOf(char);
    if(index===-1){
        return "character not found"
    }
    else{
        return `character found at index ${index}`;
    }
    
}

const result=character("vaishnav",'i');
console.log(result);

/** index of method to find weather a character is in string */