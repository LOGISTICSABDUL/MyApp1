class Person1{

    Firstname:string;
    Lastname:string;

    setname(Fname:string,Lname:string)
    {
        this.Firstname=Fname;
        this.Lastname=Lname;
    }
    getname(){
        console.log(this.Firstname+" "+this.Lastname);
    }

}

var PersonObj=new Person1;
PersonObj.setname("Abdul","Raheem");
PersonObj.getname();

var PersontwoObj=new Person1;
PersontwoObj.setname("Ramesh","babu");
PersontwoObj.getname();