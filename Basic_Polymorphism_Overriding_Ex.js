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
var SampleFifteen = /** @class */ (function () {
    function SampleFifteen() {
    }
    SampleFifteen.prototype.displaymessage = function () {
        console.log("Hi Everyone Good Morning");
    };
    return SampleFifteen;
}());
var SampleSixteen = /** @class */ (function (_super) {
    __extends(SampleSixteen, _super);
    function SampleSixteen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SampleSixteen.prototype.displaymessage = function () {
        console.log("Hi Every one welcome to type script classess");
    };
    return SampleSixteen;
}(SampleFifteen));
/* var SampleSixteenobj=new  SampleSixteen;
 .displaymessage();*/
var SampleFifteenObj = new SampleFifteen;
SampleFifteenObj.displaymessage();
