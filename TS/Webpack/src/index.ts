import { sayhello } from "./greet";

class Greeter{
    private name: string;

    constructor(name:string){
        this.name = name;
    }
}

console.log(sayhello("Sudha"));