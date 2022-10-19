class SampleThree{

     name:string;
    setname(){
       this.name="Abdul";
    }
    getname(){
        console.log(this.name);
    }
}
var SampleThreeObj=new SampleThree;
SampleThreeObj.setname();
SampleThreeObj.getname();