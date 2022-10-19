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