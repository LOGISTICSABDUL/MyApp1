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
var SampleFive = /** @class */ (function () {
    function SampleFive() {
    }
    SampleFive.prototype.displaymessage = function () {
        console.log("Hi everyone good morning");
    };
    return SampleFive;
}());
var sampleSix = /** @class */ (function (_super) {
    __extends(sampleSix, _super);
    function sampleSix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sampleSix.prototype.welcomemessage = function () {
        console.log("Hi Everyone welcome to typescript classess");
    };
    return sampleSix;
}(SampleFive));
/* var SamplesixObj=new sampleSix;
SamplesixObj.displaymessage();
SamplesixObj.welcomemessage(); */
var samplefiveObj = new SampleFive;
samplefiveObj.displaymessage();
samplefiveObj.welcomemessage();
