
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

function pokedexBorder(typeA, typeB){

    if(typeA == 'bug'){
        document.querySelector('.pokedex').style.borderColor = '#8f9d10';
    }
    else if(typeA == 'dark'){
        document.querySelector('.pokedex').style.borderColor = '#3E2D23';
    }
    else if(typeA == 'dragon'){
        document.querySelector('.pokedex').style.borderColor = '#5B4DA0';
    }
    else if(typeA == 'electric'){
        document.querySelector('.pokedex').style.borderColor = '#E79305';
    }
    else if(typeA == 'fairy'){
        document.querySelector('.pokedex').style.borderColor = '#E18FE2';
    }
    else if(typeA == 'fighting'){
        document.querySelector('.pokedex').style.borderColor = '#6C2F1C';
    }
    else if(typeA == 'fire'){
        document.querySelector('.pokedex').style.borderColor = '#C82005';
    }
    else if(typeA == 'flying'){
        document.querySelector('.pokedex').style.borderColor = '#5D75D4';
    }
    else if(typeA == 'ghost'){
        document.querySelector('.pokedex').style.borderColor = '#47468F';
    }
    else if(typeA == 'grass'){
        document.querySelector('.pokedex').style.borderColor = '#56734B';
    }
    else if(typeA == 'ground'){
        document.querySelector('.pokedex').style.borderColor = '#D2B359';
    }
    else if(typeA == 'ice'){
        document.querySelector('.pokedex').style.borderColor = '#6FD5F5';
    }
    else if(typeA == 'normal'){
        document.querySelector('.pokedex').style.borderColor = '#AEA495';
    }
    else if(typeA == 'poison'){
        document.querySelector('.pokedex').style.borderColor = '#944796';
    }
    else if(typeA == 'psychic'){
        document.querySelector('.pokedex').style.borderColor = '#DB3166';
    }
    else if(typeA == 'rock'){
        document.querySelector('.pokedex').style.borderColor = '#A08744';
    }
    else if(typeA == 'steel'){
        document.querySelector('.pokedex').style.borderColor = '#9796A6';
    }
    else if(typeA == 'water'){
        document.querySelector('.pokedex').style.borderColor = '#0C67C2';
    }

    if(typeB == 'bug'){
        document.querySelector('.pokedex').style.borderRightColor = '#8f9d10';
        document.querySelector('.pokedex').style.borderBottomColor = '#8f9d10';
    }
    else if(typeB == 'dark'){
        document.querySelector('.pokedex').style.borderRightColor = '#3E2D23';
        document.querySelector('.pokedex').style.borderBottomColor = '#3E2D23';
    }
    else if(typeB == 'dragon'){
        document.querySelector('.pokedex').style.borderRightColor = '#5B4DA0';
        document.querySelector('.pokedex').style.borderBottomColor = '#5B4DA0';
    }
    else if(typeB == 'electric'){
        document.querySelector('.pokedex').style.borderRightColor = '#E79305';
        document.querySelector('.pokedex').style.borderBottomColor = '#E79305';
    }
    else if(typeB == 'fairy'){
        document.querySelector('.pokedex').style.borderRightColor = '#E18FE2';
        document.querySelector('.pokedex').style.borderBottomColor = '#E18FE2';
    }
    else if(typeB == 'fighting'){
        document.querySelector('.pokedex').style.borderRightColor = '#6C2F1C';
        document.querySelector('.pokedex').style.borderBottomColor = '#6C2F1C';
    }
    else if(typeB == 'fire'){
        document.querySelector('.pokedex').style.borderRightColor = '#C82005';
        document.querySelector('.pokedex').style.borderBottomColor = '#C82005';
    }
    else if(typeB == 'flying'){
        document.querySelector('.pokedex').style.borderRightColor = '#5D75D4';
        document.querySelector('.pokedex').style.borderBottomColor = '#5D75D4';
    }
    else if(typeB == 'ghost'){
        document.querySelector('.pokedex').style.borderRightColor = '#47468F';
        document.querySelector('.pokedex').style.borderBottomColor = '#47468F';
    }
    else if(typeB == 'grass'){
        document.querySelector('.pokedex').style.borderRightColor = '#56734B';
        document.querySelector('.pokedex').style.borderBottomColor = '#56734B';
    }
    else if(typeB == 'ground'){
        document.querySelector('.pokedex').style.borderRightColor = '#D2B359';
        document.querySelector('.pokedex').style.borderBottomColor = '#D2B359';
    }
    else if(typeB == 'ice'){
        document.querySelector('.pokedex').style.borderRightColor = '#6FD5F5';
        document.querySelector('.pokedex').style.borderBottomColor = '#6FD5F5';
    }
    else if(typeB == 'normal'){
        document.querySelector('.pokedex').style.borderRightColor = '#AEA495';
        document.querySelector('.pokedex').style.borderBottomColor = '#AEA495';
    }
    else if(typeB == 'poison'){
        document.querySelector('.pokedex').style.borderRightColor = '#944796';
        document.querySelector('.pokedex').style.borderBottomColor = '#944796';
    }
    else if(typeB == 'psychic'){
        document.querySelector('.pokedex').style.borderRightColor = '#DB3166';
        document.querySelector('.pokedex').style.borderBottomColor = '#DB3166';
    }
    else if(typeB == 'rock'){
        document.querySelector('.pokedex').style.borderRightColor = '#A08744';
        document.querySelector('.pokedex').style.borderBottomColor = '#A08744';
    }
    else if(typeB == 'steel'){
        document.querySelector('.pokedex').style.borderRightColor = '#9796A6';
        document.querySelector('.pokedex').style.borderBottomColor = '#9796A6';
    }
    else if(typeB == 'water'){
        document.querySelector('.pokedex').style.borderRightColor = '#0C67C2';
        document.querySelector('.pokedex').style.borderBottomColor = '#0C67C2';
    }
}





function pokeInit(){
    console.log(request.response)

    document.querySelector('.pokeMain').innerHTML = '';


    let pokedex = document.createElement('div');
    pokedex.classList.add('pokedex');

    document.querySelector('.pokeMain').appendChild(pokedex);

    if(request.response.types.length > 1){
        pokedexBorder(request.response.types[0].type.name, request.response.types[1].type.name);
    }else{
        pokedexBorder(request.response.types[0].type.name);
    }

    let sprite = document.createElement('img');
    sprite.src = request.response.sprites.front_default;
    pokedex.appendChild(sprite);

    let pokeName = document.createElement('div');
    pokeName.innerHTML = request.response.name.toUpperCase();
    pokeName.classList.add('pokeName');
    pokedex.appendChild(pokeName);
}