var deleteTextNodes = require ('./deleteTextNodes.js');

document.addEventListener("DOMContentLoaded", ready);

function ready(){
var container = document.querySelector('#container');
deleteTextNodes(container);
}
