var SampleTwo = /** @class */ (function () {
    function SampleTwo() {
    }
    SampleTwo.prototype.setname = function () {
        this.name = "Abdul";
    };
    SampleTwo.prototype.getname = function () {
        console.log(this.name);
    };
    return SampleTwo;
}());
var SampletwoObj = new SampleTwo;
SampletwoObj.setname();
SampletwoObj.getname();
