var addLayer = require ('./addLayer.js');

document.addEventListener("DOMContentLoaded", ready);

function ready(){
var button = document.querySelector('#btn');
button.addEventListener("click",addLayer);
}
