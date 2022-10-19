var StudentInfo = /** @class */ (function () {
    function StudentInfo(FirstName, Lastname) {
        var _this = this;
        this.Display = function () { return console.log(_this.Fname + " " + _this.Lname); };
        this.Fname = FirstName;
        this.Lname = Lastname;
    }
    return StudentInfo;
}());
var StudentInfoObj = new StudentInfo("Abdul", "Raheem");
StudentInfoObj.Display();
