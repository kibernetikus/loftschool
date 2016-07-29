var addLayer = require ('./addLayer.js');

document.addEventListener("DOMContentLoaded", ready);

function ready(){
var button = document.querySelector('#btn');
var zone = document.querySelector('.wrapper');

button.addEventListener("click",addLayer);
}
