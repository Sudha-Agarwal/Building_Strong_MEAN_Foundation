//producing code
function myAsyncFunction(name){
    const myPromise = new Promise(function(resolve,reject){
        //var name = 'Sudha';
    
        if(name === 'Sudha'){
            resolve('Promise resolved')//success
        }
        else{
            reject('Promise rejected'); //failure
        }
    });
    return myPromise;
}

//consuming code
myAsyncFunction('Sudha1').then(function(result){
    console.log('resolve callback')
    console.log(result);
}).catch(function(error){
    console.log('reject callback')
    console.log(error)
})



const resolve = then(function(data){

})

const reject = catch(function(error){

});
resolve(req.response);

reject('error from server')
