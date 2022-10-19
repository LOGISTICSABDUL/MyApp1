var arrMarks = [34, 56, 78];
var arrContacts = ["Abdul", "Raheem", "Hyderabad"];
for (var _i = 0, arrContacts_1 = arrContacts; _i < arrContacts_1.length; _i++) {
    var iterator = arrContacts_1[_i];
    console.log(iterator);
}
var total = 0;
for (var _a = 0, arrMarks_1 = arrMarks; _a < arrMarks_1.length; _a++) {
    var iterator = arrMarks_1[_a];
    total = total + iterator;
}
var Avg = total / 3;
if (Avg > 35) {
    var Result = "Pass";
    console.log(Result);
}
else {
    var Result = "Fail";
    console.log(Result);
}
