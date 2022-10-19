var personinfo = /** @class */ (function () {
    function personinfo(FName, Lname) {
        this.Firstname = FName;
        this.LastName = Lname;
    }
    personinfo.prototype.display = function () {
        console.log(this.Firstname + " " + this.LastName);
    };
    return personinfo;
}());
var PersonInfoObj = new personinfo("Abdul", "Raheem");
PersonInfoObj.display();
