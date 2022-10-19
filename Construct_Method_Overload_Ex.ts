class Address{

    AddressId:number;
    Address:string;
    City:string;
    State:string;
    Country:string;

    constructor(AddressId:number,Address:string,City:string,State:string,Country:string){
        this.AddressId=AddressId;
        this.Address=Address;
        this.City=City;
        this.State=State;
        this.Country=Country;
    }
}

class Customer{
    CustomerId:number;
    CustomerName:string;
    CustomerBal:number;
    CustomerAddress:Address;
    CustomerSpouse:string;

    constructor(CustomerId:number,CustomerName:string,CustomerBal:number,CustomerAddress1:Address,CustomerSpouse?:string){
        this.CustomerId=CustomerId;
        this.CustomerName=CustomerName;
        this.CustomerBal=CustomerBal
        this.CustomerAddress=CustomerAddress1;
    }
    display=()=>{console.log(this.CustomerId+" "+this.CustomerName+" "+this.CustomerBal+"AddressId: "+this.CustomerAddress.AddressId+" Address:"+this.CustomerAddress.Address+"City: "+this.CustomerAddress.City+"State:"+this.CustomerAddress.State+"Country: "+this.CustomerAddress.Country);}

    deposit=(amt:number)=>{this.CustomerBal=this.CustomerBal+amt; return this.CustomerBal;}
}

var addObj=new Address(12,"Hyderabad","Hyderabad","Telanagana","india");
var custObj=new Customer(13,"Raheem",5000,addObj);
custObj.display();
console.log(custObj.deposit(500));