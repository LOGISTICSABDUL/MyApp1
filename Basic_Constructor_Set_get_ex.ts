class personinfo{
 
    Firstname:string;
    LastName:string;
    
    
    constructor(FName:string,Lname:string){

        this.Firstname=FName;
        this.LastName=Lname;
    }
    display(){
        console.log(this.Firstname+" "+this.LastName);
    }



}

var PersonInfoObj=new personinfo("Abdul","Raheem");
PersonInfoObj.display();



/** 
 notes:
 ------------------
 
 what is the constructor method in typescript?
 -------------------------------------------

 constructor is a predefined method in typescript.constructor method will call automatically whenever we are instantiating (creating object for a class) a class

 typescript allows only one constructor method for one class. Multiple constructor methods will not allow.

*/
