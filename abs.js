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
var Absparent = /** @class */ (function () {
    function Absparent() {
    }
    Absparent.prototype.add = function (x, y) {
        console.log("addtion of two numbers" + (x + y));
    };
    Absparent.prototype.sub = function (x, y) {
        console.log("addtion of two numbers" + (x - y));
    };
    return Absparent;
}());
var ABS_Child = /** @class */ (function (_super) {
    __extends(ABS_Child, _super);
    function ABS_Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ABS_Child.prototype.mul = function (x, y) {
        console.log("Multiple" + (x * y));
    };
    ABS_Child.prototype.div = function (x, y) {
        console.log("div" + (x / y));
    };
    return ABS_Child;
}(Absparent));
var ABS_ChildObj = new ABS_ChildObj();
ABS_ChildObj.add(5, 5);
ABS_ChildObj.mul(5, 5);
ABS_ChildObj.sub(5, 5);
ABS_ChildObj.div(5, 5);
