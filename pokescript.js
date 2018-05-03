console.log('poke')

let require = new XMLHttpRequest();

document.querySelector('.pokeSubmit').onclick = function(){
    console.log(document.querySelector('.pokeInput').value);
    document.querySelector('.pokeInput').value = '';
}

