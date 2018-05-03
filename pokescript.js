
let request = new XMLHttpRequest();
let requestURL;

document.querySelector('.pokeSubmit').onclick = function(){
    pokeGet(document.querySelector('.pokeInput').value);
    document.querySelector('.pokeInput').value = '';
}


function pokeGet(val){
    requestURL = 'http://pokeapi.salestock.net/api/v2/pokemon/'+val;
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    pokeWait();
}

function pokeWait(){
    if(request.response){
        pokeInit();
    }else{
        setTimeout(function(){
            pokeWait()
        }, 50)
    }
}

function pokeInit(){
    console.log(request.response)

    let sprite = document.createElement('img');
    sprite.src = request.response.sprites.front_default;
    document.body.appendChild(sprite);
}