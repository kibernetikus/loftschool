var scanDom = require ('./ScanDom.js');

document.addEventListener("DOMContentLoaded", ready);

var tags = {};
var classes = {};
var textNodes = 0;
function ready(){
var container = document.querySelector('#container');
scanDom(container,0);
}
