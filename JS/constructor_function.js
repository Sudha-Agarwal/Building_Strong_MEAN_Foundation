//creating objects using object literal

const person = {
    firstname:'sudha',
    lastName:'Agarwal',


}

const dog = {
    //properties
    breed:'lab',
    color:'black',
    //behavior
    barking: function(){
        console.log(this.breed + ' Dog is barking')
    }
}

const dog1 = {
    //properties
    breed:'german Shephard',
    color:'brown',
    //behavior
    barking: function(){
        console.log(this.breed + 'Dog is barking with color ' + this.color)
    }
}

const dog2 = {
    //properties
    breed:'german Shephard',
    color:'brown',
    //behavior
    barking: function(){
        console.log(this.breed + 'Dog is barking with color ' + this.color)
    }
}
dog.breed;
dog.barking();

dog1.barking();


//constructor functions
function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
    this.fullName = function(){
        return `Hello ${this.firstName} ${this.lastName} with age ${this.age}`;
        //console.log(`Hello ${this.firstName} ${this.lastName} with age ${this.age}`)
    }   
   
}

var obj = {
    id:1
}

obj.id
var person1 = new Person('Sudha', 'Agarwal', 30);

function Student(firstName, lastName, age, RollNo){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.RollNo = RollNo
    this.fullName = function(){
        return `Hello ${this.firstName} ${this.lastName} with age ${this.age}`;
        //console.log(`Hello ${this.firstName} ${this.lastName} with age ${this.age}`)
    }   
}

let person1 = new Person('sudha', 'Agarwal',30);
let person2 = new Person('sudha1', 'Agarwal1',40)

console.log(person1.lastName);
console.log(person1.fullName());

person2.fullName();


