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

document.addEventListener("DOMContentLoaded", ready);




function ready(){
var getCities = document.querySelector('#getCities');
var parent = document.querySelector('.container');

getCities.addEventListener('click', () => {
getCity('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json').then(response => {
response = response.sort();
console.log('go');
var elems = [];
for({name} of response){
    elems.push(name);
    
  }
  
  elems.sort();
    console.log(elems);

  for(var el of elems){

    let paragraph = document.createElement('p');
    paragraph.innerText = el;
    parent.appendChild(paragraph);
  }
});
});
}

},{"./getCity.js":1}]},{},[2]);
