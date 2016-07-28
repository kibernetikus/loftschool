function getCity(url){
    return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.addEventListener('load', ()=>{
        resolve(xhr.response);
    })

  
    xhr.send();
})
};

 module.exports = getCity;