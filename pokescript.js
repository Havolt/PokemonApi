
let request = new XMLHttpRequest();
let requestURL;

let pokeInfo = {
    types: ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'],
    typesColors: ['#8f9d10', '#3E2D23', '#5B4DA0', '#E79305', '#E18FE2', '#6C2F1C', '#C82005', '#5D75D4', '#47468F', '#56734B', '#D2B359', '#6FD5F5', '#AEA495', '#944796', '#DB3166', '#A08744', '#9796A6', '#0C67C2' ],
    test: ''
}



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

    let endColor = '';
    for(let i = 0; i < pokeInfo.types.length; i++){
        if(typeA == pokeInfo.types[i]){
            document.querySelector('.pokedex').style.borderColor = pokeInfo.typesColors[i];
        }else if(typeB == pokeInfo.types[i]){
            endColor = pokeInfo.typesColors[i];
        }
    }
    if(endColor){
        document.querySelector('.pokedex').style.borderRightColor = endColor;
        document.querySelector('.pokedex').style.borderBottomColor = endColor;
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

    let pokeType = document.createElement('div');
    pokeType.classList.add('pokeTypeCont');
    pokedex.appendChild(pokeType);

    let pokeTypeA = document.createElement('div');
    pokeType.innerHTML = 'Type: '
    pokeTypeA.classList.add('pokeType');
    pokeTypeA.innerHTML = request.response.types[0].type.name.slice(0, 1).toUpperCase() +  request.response.types[0].type.name.slice(1);
    for(let i = 0 ; i < pokeInfo.types.length; i++){
        if(request.response.types[0].type.name == pokeInfo.types[i]){
            pokeTypeA.style.background = pokeInfo.typesColors[i];
        }
    }
    pokeType.appendChild(pokeTypeA);

    if(request.response.types[1]){
        let pokeTypeB = document.createElement('div');
        pokeTypeB.classList.add('pokeType');
        pokeTypeB.innerHTML = request.response.types[1].type.name.slice(0, 1).toUpperCase() +  request.response.types[1].type.name.slice(1);
        for(let i = 0 ; i < pokeInfo.types.length; i++){
            if(request.response.types[1].type.name == pokeInfo.types[i]){
                pokeTypeB.style.background = pokeInfo.typesColors[i];
            }
        }
        pokeType.appendChild(pokeTypeB);
    }

    let pokeAbility = document.createElement('div');
    pokeAbility.innerHTML = 'Abilities: ';
    pokeAbility.classList.add('pokeAbility');
    
    for(let i = 0; i < request.response.abilities.length; i++){
        let pokeAbil = document.createElement('div');
        pokeAbil.innerHTML = request.response.abilities[i].ability.name.slice(0,1).toUpperCase() + request.response.abilities[i].ability.name.slice(1);
        if(request.response.abilities[i].is_hidden){
            console.log('come on');
            pokeAbil.style.color = '#919191'
            pokeAbil.innerHTML += ' (Hidden Ability)'
        }
        pokeAbility.appendChild(pokeAbil);
    }
    pokedex.appendChild(pokeAbility);




}