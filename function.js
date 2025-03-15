function addition(a, b) {
    return a + b;
}
console.log(addition(2, 8));
function addition1(a, b, c) {
    return a + b + (c || 0);
}
console.log(addition1(1, 3, 0));
console.log(addition1(1, 3, 5));
//default parameter
function power(num, pow) {
    if (pow === void 0) { pow = 3; }
    return Math.pow(num, pow);
}
console.log(power(2, 4));
console.log(power(5));
//rest parameter
function sum() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    console.log(sum);
}
sum(2, 3, 4, 5);
