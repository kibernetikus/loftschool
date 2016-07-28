
var getCity = require ('./getCity.js');
var searchCity = require ('./searchCity.js');
document.addEventListener("DOMContentLoaded", ready);




function ready(){
var parent = document.querySelector('.container');
var search = document.querySelector('#search');
var elems = [];
var elements = [];

search.addEventListener('keydown', () => {
  searchCity().then(result => {
    parent.innerHTML='';
    
    for (var city of elems){
      searchtext = search.value;
      searchtext = searchtext.toLowerCase();
      city = city.toLowerCase();
     
      if(city.includes(searchtext)){
        let paragraph = document.createElement('p');
        paragraph.innerText = city;
        parent.appendChild(paragraph);
      }
      
    }
    
    
    
  })
  
});
	
}






