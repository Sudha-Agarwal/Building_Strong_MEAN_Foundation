class Person {
    get ssn() {
        console.log("getter");
        return this._ssn;
    }
    set ssn(ssn) {
        if (ssn === '1234') {
            console.log('cannot be assigned');
        }
        console.log('setter');
    }
    get lastName() {
        return this._lastName;
    }
    constructor(ssn, firstName, lastName) {
        this._ssn = ssn;
        this.firstName = firstName;
        this._lastName = lastName;
    }
    getFullName() {
        return `Welcome ${this.firstName} ${this.lastName}`;
    }
}
class Employee extends Person {
}
let person1 = new Person('123', 'abc', 'xyz');
person1.ssn = '1234'; //calling the setter function
console.log(person1.ssn); //calling the getter function
console.log(person1.getFullName());
