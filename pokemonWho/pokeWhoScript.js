let request = new XMLHttpRequest();
let requestURL;

let siteData = {apiLoading: false}


function creEl(obj){
    let el1 = document.createElement(obj.type);
    if(obj.inHL){el1.innerHTML = obj.inHL};
    if(typeof(obj.className) == 'string'){el1.classList.add(obj.className)}
    else if(typeof(obj.className) == 'object'){
        obj.className.forEach(el => {
            el1.classList.add(el);
        });
    }
    if(obj.src){el1.src = obj.src};
    if(obj.val){el1.value = obj.val}
    if(obj.href){el1.href = obj.href}
    if(obj.evnt){el1.addEventListener(obj.evnt.type, obj.evnt.func)}
    
    document.querySelector(obj.apnd).appendChild(el1);
}

function getData(e){
    if(e.type == 'click' || e.keyCode == 13){
        document.querySelector('.badCallDiv').classList.add('hidden');
        requestURL = 'http://pokeapi.salestock.net/api/v2/pokemon/';
        let inputData = '';
        inputData = document.querySelector('.pokeInput').value;
        document.querySelector('.pokeInput').value = '';
        requestURL +=  inputData;
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        setTimeout(dataReady, 50);
    }    
}

function dataReady(){
    if(!siteData.apiLoading){
        document.querySelector('.loadDiv').classList.remove('hidden');
        siteData.apiLoading = true;
    }
    if(!request.response){
        setTimeout(dataReady, 50)
    }
    else if(request.response.detail == 'Not found.'){
        siteData.apiLoading = true;
        document.querySelector('.loadDiv').classList.add('hidden');
        document.querySelector('.badCallDiv').classList.remove('hidden');
    }
    else{
        siteData.apiLoading = true;
        document.querySelector('.loadDiv').classList.add('hidden');
        console.log(request.response);
    }
}

(function initApp(){
    //creating input section
    creEl({type: 'input', apnd: '.app', className: 'pokeInput',  evnt: { type: 'keydown', func: getData}});
    creEl({type: 'button', apnd: '.app', className: 'pokeButton', inHL: 'Click me', evnt: { type: 'click', func: getData}})

    //creating loading icon
    creEl({type: 'div', apnd: '.app', className: ['loadDiv', 'hidden']});
    creEl({type: 'img', apnd: '.loadDiv', className: 'loadIcon', src: 'imgs/loading.gif'});

    //creating bad input warning
    creEl({type: 'div', apnd: '.app', className: ['badCallDiv', 'hidden'], inHL: 'Nothing found.'})
})()