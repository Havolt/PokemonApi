
let req = new XMLHttpRequest();
let reqUrl;
let scr;


function wikiCall(){


    /*
    reqUrl = 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2';
    req.open('GET', reqUrl);
    req.responseType = 'json';
    req.send();
    */
}

function myCallback(data){
    console.log(data);
}



(function initApp(){
    wikiCall();
})()