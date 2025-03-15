var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.dispaly = function () {
        console.log("id : " + this.id);
        console.log("name : " + this.name);
        console.log("salary : " + this.salary);
    };
    return Employee;
}());
var emp = new Employee(1, "sushant", 35000);
emp.dispaly();
