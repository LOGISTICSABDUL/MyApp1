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
var Person_inherit = /** @class */ (function () {
    function Person_inherit(name, age, address) {
        var _this = this;
        this.display = function () { console.log(_this.Name + " " + _this.Age + " " + _this.Address); };
        this.Name = name;
        this.Age = age;
        this.Address = address;
    }
    return Person_inherit;
}());
var Profession = /** @class */ (function (_super) {
    __extends(Profession, _super);
    function Profession(name, age, address, Sal) {
        var _this = _super.call(this, name, age, address) || this;
        _this.display = function () { _super.prototype.display.call(_this); console.log(_this.Sal); };
        _this.Sal = Sal;
        return _this;
    }
    return Profession;
}(Person_inherit));
var ProfessionObj = new Profession("Abdul", 45, "Hyderabad", 45600);
ProfessionObj.display();
