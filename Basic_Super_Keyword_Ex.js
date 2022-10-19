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
var SampleSeven = /** @class */ (function () {
    function SampleSeven() {
    }
    SampleSeven.prototype.displaymessage = function () {
        console.log("hi everyone Good Morning");
    };
    return SampleSeven;
}());
var SampleEight = /** @class */ (function (_super) {
    __extends(SampleEight, _super);
    function SampleEight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SampleEight.prototype.displayanothermessage = function () {
        _super.prototype.displaymessage.call(this);
    };
    return SampleEight;
}(SampleSeven));
var SampleEightobj = new SampleEight;
SampleEightobj.displayanothermessage();
