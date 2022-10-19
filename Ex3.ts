function greet1(name:string|null){
    if(name==null){
        console.log("Name is not provided");

    }
    else{
        console.log("the name is"+name.toUpperCase());
    }
}

var foo=null;
greet1(foo);