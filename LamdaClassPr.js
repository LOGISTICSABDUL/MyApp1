var PersonDetails = /** @class */ (function () {
    function PersonDetails(Name, Addr, Age) {
        this.Name = Name;
        this.Address = Addr;
        this.Age = Age;
    }
    return PersonDetails;
}());
var Pesonlist = ['John', '12 Main Street, Newyork, NY', 15];
var Personlist1 = [];
var v1 = Pesonlist.forEach(function (element) {
    console.log(element[0]);
});
