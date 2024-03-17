//Generic class
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
let numberBox = new Box(10);
console.log(numberBox.getValue());
function print(arg) {
}
print(42);
class ArrayList {
    constructor() {
        this.items = [];
    }
    add(item) {
    }
    get() {
        return this.items[0];
    }
}
