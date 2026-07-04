"use strict";
class Product {
    productname;
    productId;
    price;
    category;
    constructor(productname, productId, price, category) {
        this.productname = productname;
        this.productId = productId;
        this.price = price;
        this.category = category;
    }
    displayInfo() {
        console.log(this.productname + " :" + this.productId);
        console.log(this.productId);
        console.log(this.price);
        console.log(this.category);
    }
}
const ob1 = new Product("abc", 1, 5888, "pov");
ob1.displayInfo();
