"use strict";
class Student {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class Store {
    static totalProduct = 0;
    studentList = [];
    displayInfo(student) {
        this.studentList.push(student);
        Store.totalProduct++;
    }
    static totalCount() {
        return Store.totalProduct;
    }
}
const s = new Student("om", 1);
const s2 = new Student("abc", 2);
const s3 = new Student("pov", 3);
console.log(Store.totalCount());
