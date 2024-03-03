function handleMouseOver(){
    alert("Mouse over detected")
}

//Variables
//primitive data types
var x = 10; // number
var str = "Hello's"; //string
var isValid = false; //boolean

var num1 = 10;
var num2 = 20;



//other datatype
//objects
var person = {
    name : "Sudha",
    age: 30
}

person.name;

var z;
//function definition
function sum(n1, n2){
    //n1 and n2 are called as function parameters
   var res = n1 + n2;
   //return res;
}

//function calling
res = sum(10,20); //here 10 and 20 are called as arguments
res = sum(30,44);

console.log(res);

//dynamic typing
var x = 10;
console.log(x);
x = "Hello";
x = true;
console.log(x);


//operators:
//1. Arithmetic Operators : + , -, / *
//n1 + n2;
//n1 - n2;
//n1 / n2;
//n1 * n2;
//n1 % n2;
//n1++ //increment by 1
//n1--; //decrement by 1

//2. Assignment Operators

//x = x + 1;  //=> x += 1;
//x = x + y;
//x += y;

//x-=y;

//3. Comparision Operator
 //x = 11;
 //y = 10;

 //x <= y;

 //x >= 11;

 //x != 11;

 //4. Logical operators
 // && - Logical AND
 // || - Logical OR
 // ! - NOT



//conditional statements
// if - is used to specify a block of code. that will be executed if the condition is true {}
x = 11;
y = 10;
if(x == 11 && y == 1){
    console.log('x is equal to 11');
}
else if(x < 11) {
    console.log('x is less than 11')
}
else{
    console.log('else');
    console.log("next else")
}

//loops
//for

for(var i=0; i < 5; i++){
    console.log(i);
}
//next statement

//arrays
var student1 = 80;
var student2 = 90;
var student3 = 87;

var marks = [80,90,87,68];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);

//length property of array - return the number of elements in an array
console.log(marks.length);

for(var i=0; i< marks.length; i++){
    //console.log(marks[i])
}

//for of
for(var x of marks){
    console.log(x);
}











