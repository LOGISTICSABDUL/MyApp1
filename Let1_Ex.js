var name1 = "Abdul Raheem";
function printname() {
    if (name1 == "Abdul Raheem") {
        var name_1 = "Abdul";
        console.log(name_1);
    }
    console.log(name1);
}
printname(); //let is block scoped
var array = [5, 7, 1];
var index = array.find(function (x) { return x == 7; });
console.log(index);
