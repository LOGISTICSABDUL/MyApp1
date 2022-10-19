abstract class SampleSeventeen{

    displaymessage(){
        console.log("Hi Everyone Good Morning");
    }
}

class SampleEighteen extends SampleSeventeen{
    
}

/* var SampleSeventeenObj=new SampleSeventeen;
SampleSeventeenObj.displaymessage(); */

var SampleEighteenObj=new SampleEighteen;
SampleEighteenObj.displaymessage();

/* 
what is abstract class?
----------------------

An abstract class also a class but it does not permitt to instatiate(creating object)


if we want to utilize abstract class methods and  member variables we need to use through inheritance

*/