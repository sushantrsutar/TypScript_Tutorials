var NormalCalculator = /** @class */ (function () {
    function NormalCalculator() {
    }
    NormalCalculator.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    NormalCalculator.prototype.sub = function (num1, num2) {
        return num1 - num2;
    };
    NormalCalculator.prototype.mult = function (num1, num2) {
        return num1 * num2;
    };
    NormalCalculator.prototype.div = function (num1, num2) {
        return num1 / num2;
    };
    return NormalCalculator;
}());
var DigitalCalculator = /** @class */ (function () {
    function DigitalCalculator() {
    }
    DigitalCalculator.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    DigitalCalculator.prototype.sub = function (num1, num2) {
        return num1 - num2;
    };
    DigitalCalculator.prototype.mult = function (num1, num2) {
        return num1 * num2;
    };
    DigitalCalculator.prototype.div = function (num1, num2) {
        return num1 / num2;
    };
    DigitalCalculator.prototype.mod = function (num1, num2) {
        return num1 % num2;
    };
    return DigitalCalculator;
}());
var normalCalculator = new NormalCalculator();
var sum = normalCalculator.add(2, 4);
console.log("sum : " + sum);
var digitalCalculator = new DigitalCalculator();
var multificaton = digitalCalculator.mult(20, 30);
console.log("multification : " + multificaton);
var mod = digitalCalculator.mod(10, 3);
console.log("mod : " + mod);
