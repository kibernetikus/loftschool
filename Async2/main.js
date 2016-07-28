
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
