const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1, ...array2];

console.log(array3)
const obj1 = {
    a:1,
    b:2
}

const obj2 = {
    c:3,
    d:4
}

const obj3 = {...obj1, ...obj2, a:5}; 

console.log(obj3);

console.log(Math.max(...array1));