"use strict";
class Emp {
    name;
    id;
    sal;
    address;
    constructor(name, id, sal, address) {
        this.name = name;
        this.id = id;
        this.sal = sal;
        this.address = address;
    }
    displayInfo() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.sal);
        console.log(this.address);
    }
}
const emp = new Emp("purva", 1, 10000, "kandivali");
emp.displayInfo();
