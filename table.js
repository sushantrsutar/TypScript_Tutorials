var Table = /** @class */ (function () {
    function Table() {
    }
    Table.prototype.table = function (num) {
        for (var i = 1; i <= 10; i++) {
            console.log(num + " * " + i + " = " + i * num);
        }
    };
    return Table;
}());
var t = new Table();
t.table(5);
