class SampleEleven{

    displaymessage(){
        console.log("hi Everyone Good morning");
    }
}

class Sampletwelve extends SampleEleven{

    displaymessage() {
        console.log("Welcome to my typescript classess");
    }
}
/* 
var SampletwelveObj=new Sampletwelve;
SampletwelveObj.displaymessage(); */

var SampleElevenObj=new SampleEleven;
SampleElevenObj.displaymessage();

/* 
what is polymorphism?
-------------------------

Same method perfomrs different operations in differrent classes this concept can be called as polymorphism.

Overriding and overloading are the concepts of polymorphism

Overriding can be possible in typescript but overloading can not be possible in typescript


*/