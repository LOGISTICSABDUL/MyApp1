class Person_inherit{
    protected Name:string;
    protected Age:number;
    protected Address:string;

    constructor(name:string,age:number,address:string){
        this.Name=name;
        this.Age=age;
        this.Address=address;
    }

    display(){
        console.log(this.Name+" "+this.Age+" "+this.Address);
    }
}

class Profession extends Person_inherit{
    protected Sal:number;

    constructor(name:string,age:number,address:string,Sal:number){
        super(name,age,address);
        this.Sal=Sal;
    }
    display=()=>{super.display();console.log(this.Sal);}
    /* the super() keyword is used to call the parent class constructor to access the parent class properties and methods */
     //display=() => {super.display();console.log(this.Sal);};
}


var ProfessionObj=new Profession("Abdul",45,"Hyderabad",45600);
ProfessionObj.display();