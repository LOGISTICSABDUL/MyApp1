var SampleOne = /** @class */ (function () {
    function SampleOne() {
    }
    SampleOne.prototype.add = function () {
        console.log('this is add method');
    };
    return SampleOne;
}());
var SampleOneObj = new SampleOne();
SampleOneObj.add();
