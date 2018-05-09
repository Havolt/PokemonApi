let request = new XMLHttpRequest();
let requestURL;


function creEl(obj){
    let el1 = document.createElement(obj.type);
    if(obj.inHL){el1.innerHTML = obj.inHL};
    if(typeof(obj.className) == 'string'){el1.classList.add(obj.className)}
    else if(typeof(obj.className) == 'object'){
        obj.className.forEach(el => {
            el1.classList.add(el);
        });
    }
    if(obj.src){el1.src}
    if(obj.val){el1.value = obj.val}
    if(obj.href){el1.href = obj.href}
    
    document.querySelector(obj.apnd).appendChild(el1);
}


function getData(e){
    
}

(function initApp(){
    creEl({type: 'input', apnd: '.app', className: 'pokeInput'});
    creEl({type: 'button', apnd: '.app', className: 'pokeButton', inHL: 'Click me'})
})()