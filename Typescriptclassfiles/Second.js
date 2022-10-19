var Customer = /** @class */ (function () {
    function Customer(CustId, CustName, CustBal) {
        this.CustomerId = CustId;
        this.CustomerName = CustName;
        this.CustomerBal = CustBal;
    }
    Customer.prototype.display = function () {
        console.log(this.CustomerId + "" + this.CustomerName + "" + this.CustomerBal);
    };
    Customer.prototype.Deposit = function (amt) {
        this.CustomerBal = this.CustomerBal + amt;
        return this.CustomerBal;
    };
    return Customer;
}());
