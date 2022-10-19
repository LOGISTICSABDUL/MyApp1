function test(){
    let Marks=33;
    let Result="pass";
    if(Marks<35){
        let Result="Fail";
        console.log(Result);
    }

    console.log("Result block scope=" +Result);
     //let is block scope
}
test();