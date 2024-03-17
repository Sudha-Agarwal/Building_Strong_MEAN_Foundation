//Generic class

class Box<T extends string | number>{
    private value:T;

    constructor(value:T){
        this.value = value;
    }

    getValue<T1>():T{
        return this.value;
    }
}

let numberBox = new Box<number>(10);
console.log(numberBox.getValue<number>());

function print<T extends number | string>(arg:T){

}

print<number>(42);

interface List<T>{
    add(item:T):void;
    get():T;
}
class ArrayList<T> implements List<T>{
    items: T[] = [];
    add(item:T):void{

    }

    get():T{
        return this.items[0];

    }
}