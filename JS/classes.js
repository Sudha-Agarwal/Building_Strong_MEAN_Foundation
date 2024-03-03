class Person{
    firstName;
    lastName;

    constructor(firstName, lastName){
        console.log('parent contructor called')
        this.firstName = firstName;
        this.lastName = lastName;         
    }    
    fullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    } 
}

class Person1{

}

//let person1 = new Person('sudha', 'agarwal');
//person1.fullName();

class Student extends Person{
    age;
    constructor(firstName, lastName,RollNo,age){
      super(firstName, lastName);
      console.log('child class constructor');
        this.RollNo = RollNo;
       
    }
    fullName(){
        super.fullName();
        console.log('child class full name')
        console.log(`${this.firstName} ${this.lastName}`)
    } 
    calculateMarks(){
        console.log('marks calculated')
    }
}

let student1 = new Student('Sudha','Agarwal',123);
student1.age = -20;
student1.fullName();
student1.calculateMarks();
console.log(student1.age)