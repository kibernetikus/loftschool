



function addLayer(){
var zIndex = 0;
var colors = ['#FF2A68', '#FF5E3A', '#2B2B2B', '#4CD964', '#8E8E93', '#5856D6', '#007AFF', '#FFCC00', '#52EDC7'];
var newLayer = document.createElement('div');
zone.appendChild(newLayer);
var random = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
var color = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
var margin = Math.floor(Math.random() * (200 - 50 + 1)) + 50;

newLayer.style.width=random + 'px';
newLayer.style.height=random  /2 + 'px';
newLayer.style.background=colors[color];
newLayer.style.left = margin + 'px';
newLayer.style.top = margin / 2  + 'px';
newLayer.style.zIndex = zIndex;
zIndex++;

newLayer.className='square';
var squares = document.querySelectorAll('.square');
console.log(squares);
for(var m = 0; m < squares.length; m++){

squares[m].onmousedown = function(e){
var elem = this;
move(elem,e);
function move(d,e){
 elem.style.left = e.pageX - d.offsetWidth / 2 + 'px';
  elem.style.top = e.pageY - d.offsetHeight / 2 + 'px';  
}

document.onmousemove = function(e) {
    move(elem, e);
  }
  
this.onmouseup = function() {
    document.onmousemove = null;
    squares[m].onmouseup = null;
  }

}


}
};

module.exports = addLayer;

