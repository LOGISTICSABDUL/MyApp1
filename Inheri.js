var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(EmpId, Name, BasicSalary) {
        this.EmpId = EmpId;
        this.Name = Name;
        this.BasicSalary = BasicSalary;
    }
    Employee.prototype.display = function () {
        console.log("Eid:" + this.EmpId + " Name:" + this.Name +
            " Basic Salary:" + this.BasicSalary);
    };
    return Employee;
}());
var Lecturer = /** @class */ (function (_super) {
    __extends(Lecturer, _super);
    function Lecturer(EmpId, Name, BasicSalary, Subject) {
        var _this = _super.call(this, EmpId, Name, BasicSalary) || this;
        _this.Subject = Subject;
        return _this;
    }
    Lecturer.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Subject:" + this.Subject);
    };
    return Lecturer;
}(Employee));
var LecturerObj = new Lecturer(413, "Raheem", 4000, "English");
LecturerObj.display();
