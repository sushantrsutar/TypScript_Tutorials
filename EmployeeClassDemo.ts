class Employee {
    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    display(): void {
        console.log("id : " + this.id);
        console.log("name : " + this.name);
        console.log("salary : " + this.salary);
    }
}

let emp = new Employee(1, "Sushant", 35000);
emp.display();
