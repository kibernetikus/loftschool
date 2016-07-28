var prepend = require ('./prepend.js');

document.addEventListener("DOMContentLoaded", ready);

function ready(){
var parent = document.querySelector('#container');
    var element = document.createElement('p');
    element.innerText = '0';

    prepend(parent, element);
}
