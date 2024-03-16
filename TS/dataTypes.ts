let isBoolean:boolean = true;

//Number
let decimal:number = 10;

//arrays
let list:number[] = [1,2,3];

//tuple
let x:[string, number];
x = ['string',10];

//enum
enum color {Red, Green, Blue};
let c:color = color.Green;

//any
let y:any = 10;
y = '10';

//unknown
let value:unknown;
value=10;

let str:string;

if(typeof value === 'string'){
     str = value;
}
let x1;
console.log(x1);
console.log(str)

function add(n1:number, n2:number):number{
    return "n1 + n2";
}

function print():void{
   var x = 10;
   
}

function throwNewError():never{
    var x = 10;
    //throw new Error('error');

    while(true){

    }
   
}

//union type
let result: number | string | undefined;
result = 10;
result = 'string';

let x2:undefined = undefined;
x2 = 10;

function add(a:number | string, b:number | string) : number | string | void {

}

