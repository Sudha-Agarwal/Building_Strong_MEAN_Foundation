/*console.log('statement1');
console.log('statement2');
console.log('statement3');
//there is some time consuming code - fetching the data from server(delay of 5 sec)
console.log('statement4');

setTimeout(function(){
    console.log('asynchronous code')
},2000);

console.log('statement5');


function one(callback){
    //simulate some delay
    setTimeout(function(){
        console.log('one');
        callback();
    },1000);
}
function two(){
    console.log('two')
}

function three(){
    console.log('three')
}

//one(three);

one(function two(){
    console.log('two')
})
//two();
*/
function serverRequest(callback){
    var data;
    setTimeout(function(){
        data = {message:'data from server'};     
        callback(data);   
    }, 1000);
   
}

function printData(data){
    console.log(data.message)
}

//serverRequest(printData);
serverRequest(function(data){
    console.log(data.message)
})
//printData(data);