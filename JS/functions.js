//function statement
function sum(num1, num2){
    var res = num1 + num2;
    return res;
}

 var x = 10;
x = 'string';

var obj = {id:1};
//obj = 2;

var output = sum(2,3);

function print(obj){
    console.log(obj.id);
    return obj;
}

print(obj);

//sqr(5);//not allowed
//assigning function to a variable(Function expression)
var sqr = function(num1){
    console.log(num1)
    console.log('function sqr called')

}
//function calling
sqr(5);

//var newFunction = sqr;
//newFunction(10);

//sqr1(); //hoisting
//normal function
function sqr1(){
    console.log('normal')

}


//passing function as an argument
function one(x){
    console.log('one');
    x();//calling the function two
}

function two(){
    console.log('two')
}

one(two);

//second way of writing
one(function two(){
    console.log('two')
});

//anonymous functions
one(function(){
    console.log('two')
});


//function returning function
function outerFunction(){
    var message = 'Hello';
    function innerFunction(){
        console.log(message);
        console.log('inner function')
    }
    return innerFunction;
}

var msg = outerFunction();
//console.log(msg);

msg();






