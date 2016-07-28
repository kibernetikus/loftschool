(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var deleteTextNodes = function(parent) {
        console.log(parent.childNodes);
        for (var i = 0; i < parent.childNodes.length; i++) {

            if (parent.childNodes[i].nodeType === 3) {

                parent.removeChild(parent.childNodes[i]);
            }

        }
        console.log(parent.childNodes);
    };

module.exports = deleteTextNodes;


},{}],2:[function(require,module,exports){
var deleteTextNodes = require ('./deleteTextNodes.js');

document.addEventListener("DOMContentLoaded", ready);

function ready(){
var container = document.querySelector('#container');
deleteTextNodes(container);
}

},{"./deleteTextNodes.js":1}]},{},[2]);
