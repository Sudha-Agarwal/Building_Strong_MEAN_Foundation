let isBoolean = true;
//Number
let decimal = 10;
//arrays
let list = [1, 2, 3];
//tuple
let x;
x = ['string', 10];
//enum
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
let c = color.Green;
//any
let y = 10;
y = '10';
//unknown
let value;
value = 10;
let str;
if (typeof value === 'string') {
    str = value;
}
let x1;
console.log(x1);
console.log(str);
function add(n1, n2) {
    return "n1 + n2";
}
function print() {
    var x = 10;
}
function throwNewError() {
    var x = 10;
    //throw new Error('error');
    while (true) {
    }
}
//union type
let result;
result = 10;
result = 'string';
let x2 = undefined;
x2 = 10;
function add(a, b) {
}
