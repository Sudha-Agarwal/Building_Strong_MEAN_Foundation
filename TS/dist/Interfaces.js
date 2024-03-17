class Employee {
    print() {
    }
}
class Rectangle {
    constructor(length, breadth) {
        this.breadth = breadth;
        this.length = length;
    }
    getArea() {
        return this.length * this.breadth;
    }
    change() {
        this.length++;
    }
    print() {
    }
}
/*class Circle implements Shape{
    PI=3.14;
    getArea():number{
        const PI1=3.14;
        return this.PI * r * r;
    }
}*/
const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea());
rectangle.change();
console.log(rectangle.length);
export {};
