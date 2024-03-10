function getPromise(URL){
    let promise = new Promise(function(resolve,reject){
        let req = new XMLHttpRequest(); //ajax request

        req.open('GET', URL);
        req.send();

        req.onreadystatechange = function(){
            if(req.readyState === 4){
                if(req.status === 200){

                    console.log('success');
                    resolve(req.response);
                }
                else{
                    console.log('rejected');
                    reject(req.response)
                }
            }
        }
    });
    return promise;
}

const ALL_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

let promise = getPromise(ALL_POKEMON_URL);

const consumer = () => {
    promise.then(function(result) {
        document.getElementById("demo").innerHTML = result;
    })
    .catch(function(error){
        document.getElementById("demo").innerHTML = error;
    })
}

consumer();
