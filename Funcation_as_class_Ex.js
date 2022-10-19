var Result;
(function (Result) {
    Result[Result["pass"] = 1] = "pass";
    Result[Result["drop"] = -1] = "drop";
    Result[Result["Promoted1"] = 0] = "Promoted1";
})(Result || (Result = {}));
function test() {
    var studentId;
    var studentName;
    var bActive;
    var arrMarks = [45, 35, 67];
    var total = 0;
    for (var _i = 0, arrMarks_1 = arrMarks; _i < arrMarks_1.length; _i++) {
        var i = arrMarks_1[_i];
        total = total + i;
    }
    var Avg = total / 3;
    var arrContact = [123123123, 123123, 12312312];
    var arrBirth = [6, "Aug", 1998];
    var eResult;
    this.eResult = function () {
        if (Avg > 35) {
            return Result.pass;
        }
        else {
            return Result.drop;
        }
    };
}
var Ex = new test;
Ex.eResult();
console.log(Result[Ex.eResult]);
