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
var SampleEleven = /** @class */ (function () {
    function SampleEleven() {
    }
    SampleEleven.prototype.displaymessage = function () {
        console.log("hi Everyone Good morning");
    };
    return SampleEleven;
}());
var Sampletwelve = /** @class */ (function (_super) {
    __extends(Sampletwelve, _super);
    function Sampletwelve() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sampletwelve.prototype.displaymessage = function () {
        console.log("Welcome to my typescript classess");
    };
    return Sampletwelve;
}(SampleEleven));
/*
var SampletwelveObj=new Sampletwelve;
SampletwelveObj.displaymessage(); */
var SampleElevenObj = new SampleEleven;
SampleElevenObj.displaymessage();
