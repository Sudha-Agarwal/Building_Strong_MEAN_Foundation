class Person{
    private _ssn:string;
    protected firstName:string;
    _lastName:string;

    get ssn(){
        console.log("getter");
        return this._ssn;
    }

    set ssn(ssn:string){
        if(ssn === '1234'){
            console.log('cannot be assigned');
            
        }
        console.log('setter');
        
    }

    get lastName():string{
        return this._lastName
    }
    constructor(ssn:string,
         firstName:string,
         lastName:string){
            this._ssn = ssn;
            this.firstName = firstName;
            this._lastName = lastName;
         }
    getFullName():string{
        return `Welcome ${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person{

}
let person1:Person = new Person('123','abc','xyz');
person1.ssn = '1234'; //calling the setter function
console.log(person1.ssn);//calling the getter function
console.log(person1.getFullName());
