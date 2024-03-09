function outer(){
    var counter = 0;
    console.log('outer function code')
    function increment(){
        counter++;
        console.log(counter);
    } 
    function decrement(){
        counter--;
        console.log(counter);
    }
    return {
        id:1,
        incrementFun:increment,
        decrementFun:decrement
    }
}

counter++;
var innerFunc = outer();
innerFunc.incrementFun();
innerFunc.incrementFun();
innerFunc.decrementFun();



