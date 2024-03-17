function myClassDecorator(constructor:Function){
    constructor.prototype.newProperty = 'This is a new property'
}

@myClassDecorator
class MyClass{
    newProperty:any;
}

@myClassDecorator
class MyClass1{

}

const myinstance = new MyClass();
console.log(myinstance.newProperty)
