function addTwoNum1(num1,num2){
    return num1 + num2;
}


const addTwoNum = (num1,num2) =>  {
    var res = num1 + num2;
    return res;
};

var res = addTwoNum(2,3);
console.log(res);

const sqr = num =>  num * num;

console.log(sqr(5));

const print = ()=> "Hello World";

console.log(print());


const person={
    name:'ABC',
    test(){
        console.log(this.name);
        setTimeout(()=>{
            console.log(this.name);
            console.log(this)
        },1000)
    }
}

person.test();

