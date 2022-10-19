var Address = /** @class */ (function () {
    function Address(AddressId, Address, City, State, Country) {
        this.AddressId = AddressId;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Country = Country;
    }
    return Address;
}());
var Customer = /** @class */ (function () {
    function Customer(CustomerId, CustomerName, CustomerBal, CustomerAddress1) {
        var _this = this;
        this.display = function () { console.log(_this.CustomerId + " " + _this.CustomerName + " " + _this.CustomerBal + "AddressId: " + _this.CustomerAddress.AddressId + " Address:" + _this.CustomerAddress.Address + "City: " + _this.CustomerAddress.City + "State:" + _this.CustomerAddress.State + "Country: " + _this.CustomerAddress.Country); };
        this.deposit = function (amt) { _this.CustomerBal = _this.CustomerBal + amt; return _this.CustomerBal; };
        this.CustomerId = CustomerId;
        this.CustomerName = CustomerName;
        this.CustomerBal = CustomerBal;
        this.CustomerAddress = CustomerAddress1;
    }
    return Customer;
}());
var addObj = new Address(12, "Hyderabad", "Hyderabad", "Telanagana", "india");
var custObj = new Customer(13, "Raheem", 5000, addObj);
custObj.display();
console.log(custObj.deposit(500));
