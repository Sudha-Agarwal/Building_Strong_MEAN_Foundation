interface Shape{
    getArea:() => number;
}

interface PrintValue{
    print():void;
}
class Employee implements PrintValue{
    print():void{

    }

}

class Rectangle implements Shape, PrintValue{
    length:number;
    breadth:number;

    constructor(length:number, breadth:number){
        this.breadth = breadth;
        this.length = length;

    }
    getArea():number{
        return this.length * this.breadth;
    }

    change():void{
        this.length++;
    }

    print():void{
    }
}

/*class Circle implements Shape{
    PI=3.14;
    getArea():number{
        const PI1=3.14;
        return this.PI * r * r;
    }
}*/

const rectangle:Rectangle = new Rectangle(10,20);
console.log(rectangle.getArea());

rectangle.change();
console.log(rectangle.length);


export{}
