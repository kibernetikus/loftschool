(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    function scanDom(parent, i) {



        if (parent.childNodes[i].tagName) {

            var current = parent.childNodes[i].tagName;
            current = current.toLowerCase();
            if (current in tags) {
                tags[current]++;
            } else {
                tags[current] = 1;
            }
        }


        if (parent.childNodes[i].className) {

            var current = parent.childNodes[i].className;
            current = current.toLowerCase();


            if (current in classes) {
                classes[current]++;


            } else {
                classes[current] = 1;
            }
        }


        i++;

        if (i < parent.childNodes.length) {
            scanDom(container, i);
        } else {
            for (var tag in tags) {
                console.log(tag);
                console.log(tags[tag]);

            }
            for (var clas in classes) {
                console.log(clas);
                console.log(classes[clas]);

            }
        }
    }

module.exports = scanDom;


},{}],2:[function(require,module,exports){
var scanDom = require ('./ScanDom.js');

document.addEventListener("DOMContentLoaded", ready);

var tags = {};
var classes = {};
var textNodes = 0;
function ready(){
var container = document.querySelector('#container');
scanDom(container,0);
}

},{"./ScanDom.js":1}]},{},[2]);
