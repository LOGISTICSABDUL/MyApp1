class Customer1{
    CustomerId:number;
    CustomerName:string;
    CustomerBal:number;

    constructor(CustId:number,CustName:string,CustBal:number){

        this.CustomerId=CustId;
        this.CustomerName=CustName;
        this.CustomerBal=CustBal;
    }

    display(){
      console.log(this.CustomerId+""+this.CustomerName+""+this.CustomerBal);
    }
    Deposit(amt:number):number{
        this.CustomerBal=this.CustomerBal+amt;
     return this.CustomerBal;
}
    

}