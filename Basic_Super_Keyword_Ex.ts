class SampleSeven{
    displaymessage(){
        console.log("hi everyone Good Morning");
    }
}

class SampleEight extends SampleSeven{

    displayanothermessage(){
        super.displaymessage();
    }
}

var SampleEightobj=new SampleEight;
SampleEightobj.displayanothermessage();


/* 
what is "super" keyword?
---------------------------------
super keyword is used to call the parent class method exactly into child class

*/


