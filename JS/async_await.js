let promise = new Promise(function(resolve, reject){

    setTimeout(function(){
        reject('promise rejected')
    }, 2000);
})

async function asyncFunction(){
    try{
        let result = await promise;
        console.log(result);
    }
    catch(error){
        console.log(error)
    }   
}

asyncFunction();