class Person {
    get ssn() {
        console.log("getter");
        return this._ssn;
    }
    set ssn(ssn) {
        console.log('setter');
        this._ssn = ssn;
    }
    constructor(ssn, firstName, lastName) {
        this._ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `Welcome ${this.firstName} ${this.lastName}`;
    }
}
let person1 = new Person('123', 'abc', 'xyz');
person1.ssn = '1234';
console.log(person1.getFullName());
