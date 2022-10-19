function restaddition() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var sum = 0;
    values.forEach(function (val) { return sum = sum + val; });
    return sum;
}
var sum = restaddition(23, 45, 56, 67, 7, 6);
console.log(sum);
