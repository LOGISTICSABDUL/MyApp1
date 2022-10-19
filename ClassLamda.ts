class StudentInfo{
    Fname:string;
    Lname:string;

    constructor(FirstName:string,Lastname:string){
        this.Fname=FirstName;
        this.Lname=Lastname;
        
    }
    Display=()=> console.log(this.Fname+" "+this.Lname);

    
}


var StudentInfoObj=new  StudentInfo("Abdul","Raheem");
StudentInfoObj.Display();
