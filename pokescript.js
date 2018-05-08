
let request = new XMLHttpRequest();
let requestURL;



document.querySelector('.pokeSubmit').onclick = function(){
    pokeGet(document.querySelector('.pokeInput').value);
    document.querySelector('.pokeInput').value = '';
}

document.querySelector('.pokeInput').onkeydown = function(e){
    if(e.keyCode == 13){
        pokeGet(document.querySelector('.pokeInput').value);
        document.querySelector('.pokeInput').value = '';
    }
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

    document.querySelector('.pokeMain').innerHTML = '';


    let pokedex = document.createElement('div');
    pokedex.classList.add('pokedex');

    pokedex.style.borderColor = 'blue';
    document.querySelector('.pokeMain').appendChild(pokedex);

    let sprite = document.createElement('img');
    sprite.src = request.response.sprites.front_default;
    pokedex.appendChild(sprite);

    let pokeName = document.createElement('div');
    pokeName.innerHTML = request.response.name.toUpperCase();
    pokeName.classList.add('pokeName');
    pokedex.appendChild(pokeName);
}