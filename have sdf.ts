class Customer {
    CustomerId: number;
    CustomerName: string;
    CustomerBal: number;

    CustomerSpouse: string;
    constructor(CustomerId: number, CustomerName: string, CustomerBal: number,
        CustomerSpouse?: string) {
        this.CustomerId = CustomerId;
        this.CustomerName = CustomerName;
        this.CustomerBal = CustomerBal;
        this.CustomerSpouse = CustomerSpouse;
    }
    display(id?:number) {
        console.log("Customer Id:" + this.CustomerId +
            "  Name:" + this.CustomerName +
            "  Bal:" + this.CustomerBal +
            "  Spouse:" + this.CustomerSpouse);
    }
}
class MyClass {
    test() {
        var c = new Customer(1, "MTT", 5000);
        c.display();
    }
}