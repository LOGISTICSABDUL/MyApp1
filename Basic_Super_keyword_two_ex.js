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
var SampleNine = /** @class */ (function () {
    function SampleNine() {
        console.log("Hi Everyone Good Morning");
    }
    return SampleNine;
}());
var Sampleten = /** @class */ (function (_super) {
    __extends(Sampleten, _super);
    function Sampleten() {
        var _this = _super.call(this) || this;
        console.log("Welcome to my typescript classes");
        return _this;
    }
    return Sampleten;
}(SampleNine));
var Sampletenobj = new Sampleten;
