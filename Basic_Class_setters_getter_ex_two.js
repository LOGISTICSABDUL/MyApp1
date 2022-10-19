var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.setname = function (Fname, Lname) {
        PersonObj.Firstname = Fname;
        PersonObj.Lastname = Lname;
    };
    Person.prototype.getname = function () {
        console.log(PersonObj.Firstname + " " + PersonObj.Lastname);
    };
    return Person;
}());
var PersonObj = new Person;
PersonObj.setname("Abdul", "Raheem");
PersonObj.getname();
var PersontwoObj = new Person;
PersontwoObj.setname("Ramesh", "babu");
PersontwoObj.getname();
