var addLayer = require ('./addLayer.js');

document.addEventListener("DOMContentLoaded", ready);

function ready(){
var container = document.querySelector('#container');
deleteTextNodes(container, 0);
}
