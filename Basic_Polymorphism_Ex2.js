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
var SampleThirteen = /** @class */ (function () {
    function SampleThirteen() {
    }
    SampleThirteen.prototype.mathoperation = function (a, b) {
        console.log(a + b);
    };
    return SampleThirteen;
}());
var SampleFourteen = /** @class */ (function (_super) {
    __extends(SampleFourteen, _super);
    function SampleFourteen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SampleFourteen.prototype.mathoperation = function (a, b) {
        console.log(a * b);
    };
    return SampleFourteen;
}(SampleThirteen));
/* var SampleThirteenObj=new SampleThirteen;
SampleThirteenObj.mathoperation(5,6); */
var SampleFourteenObj = new SampleFourteen;
SampleFourteenObj.mathoperation(5, 6);
