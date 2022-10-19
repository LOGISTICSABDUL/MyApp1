function test() {
    var Marks = 33;
    var Result = "pass";
    if (Marks < 35) {
        var Result_1 = "Fail";
        console.log(Result_1);
    }
    console.log("Result block scope=" + Result);
}
test();
