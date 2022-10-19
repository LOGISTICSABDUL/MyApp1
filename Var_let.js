var student = function test() {
    var marks = 36;
    var result = "fail";
    if (marks > 35) {
        var result = "passs";
        console.log(result);
    }
    console.log("the result is " + result); //var is function scope
};
student();
