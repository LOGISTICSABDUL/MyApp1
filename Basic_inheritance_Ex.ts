class SampleFive{
    displaymessage(){
        console.log("Hi everyone good morning");
    }
}

class sampleSix extends SampleFive{
    
    welcomemessage(){
console.log("Hi Everyone welcome to typescript classess");
    }
}

var SamplesixObj=new sampleSix;
SamplesixObj.displaymessage();
SamplesixObj.welcomemessage(); 

/* var samplefiveObj=new SampleFive;
samplefiveObj.displaymessage();
samplefiveObj.welcomemessage();  */

/* 
title ,price in one class

publisher in another class

all the functionlities should access thorohg only one object
*/


/* 
what is inheritance?
-------------------------

instead of re-writing the existing code we can utilize the existing code by extending from that class. This concept can be called as inheritance.

we must use "extends" keyword in order to utilize inheritance concept.

from which we are extending that can be called as parent class

to which class we are extending that can be called as child class

in simple words, left side of the "extends" keyword can be called as "Child Class", right side of the "extends" keyword can be called as "Parent Class"

we can access all the parents class methods and member variables through child class object but we can not access child class methods and member variables throgh parent class object.



*/
