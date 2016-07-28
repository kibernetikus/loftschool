(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){

var getCity = require ('./getCity.js');
var searchCity = require ('./searchCity.js');
document.addEventListener("DOMContentLoaded", ready);




function ready(){
var parent = document.querySelector('.container');
var search = document.querySelector('#search');
var elems = [];
var elements = [];

search.addEventListener('keydown', () => {
  searchCity().then(result => {
    parent.innerHTML='';
    
    for (var city of elems){
      searchtext = search.value;
      searchtext = searchtext.toLowerCase();
      city = city.toLowerCase();
     
      if(city.includes(searchtext)){
        let paragraph = document.createElement('p');
        paragraph.innerText = city;
        parent.appendChild(paragraph);
      }
      
    }
    
    
    
  })
  
});
	
}







},{"./getCity.js":1,"./searchCity.js":3}],3:[function(require,module,exports){

function searchCity(){
return new Promise((resolve, rejected) => {
    setTimeout(() =>{
     resolve();
}, 1000);
 });
};

 module.exports = searchCity;
},{}]},{},[2]);
