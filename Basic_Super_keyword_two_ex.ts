class SampleNine{

    constructor(){
        console.log("Hi Everyone Good Morning");
    }
}

class Sampleten extends SampleNine{

    constructor(){
        super();
        console.log("Welcome to my typescript classes");
    }

}

var Sampletenobj=new Sampleten;
