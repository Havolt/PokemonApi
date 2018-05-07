
let request = new XMLHttpRequest();
let requestURL;

console.log(1)


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


    let pokedex = document.createElement('div');

    pokedex.style.border = '1px solid blue';
    alert(document.querySelector('.pokeMain'));
    document.querySelector('.pokeMain').appendChild(pokedex);

    let sprite = document.createElement('img');
    sprite.src = request.response.sprites.front_default;
    pokedex.appendChild(sprite);
}