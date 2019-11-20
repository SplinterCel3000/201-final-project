var restaurantArray = [];
var placeholderRefArray = [];
var placeholderTile = document.getElementById('restaurant-tile');
var restaurantsDisplay = document.getElementById('restaurants-display');



var Restaurant = function (name, picture, tile) {
  this.name = name;
  this.picture = picture;
  this.tile = tile;
  this.render_pic = function (domReference) {
    domReference.src = picture;
  };
  this.render_tile = function (domReference) {
    document.open();
    domReference.src = tile;

  };
};

var mcdonalds = new Restaurant('McDonalds', './images/logo-mcdonalds.png', './images-render/mcdonalds-tile.png');
restaurantArray.push(mcdonalds);
var subway = new Restaurant('Subway', './images/logo-subway.png', './images-render/subway-tile.png');
restaurantArray.push(subway);

function mcdonaldsRender(placeholderTile) {
  var placeholderTile = document.getElementById('restaurant-tile');
  document.getElementById('restaurants-display').innerHTML = '';
  document.getElementById('restaurant-tile').style.visibility = 'visible';
  placeholderTile.src = mcdonalds.tile;
  console.log('mcdonalds clicked');
}
function subwayRender(placeholderTile) {
  var placeholderTile = document.getElementById('restaurant-tile');
  document.getElementById('restaurants-display').innerHTML = '';
  document.getElementById('restaurant-tile').style.visibility = 'visible';
  placeholderTile.src = subway.tile;
  console.log('subway clicked');
}


var placeholder0 = document.getElementById('restaurant0');
placeholderRefArray.push(placeholder0);
placeholder0.addEventListener('click', mcdonaldsRender);
var placeholder1 = document.getElementById('restaurant1');
placeholder1.addEventListener('click', subwayRender);
placeholderRefArray.push(placeholder1);
var placeholder2 = document.getElementById('restaurant2');
placeholderRefArray.push(placeholder2);
var placeholder3 = document.getElementById('restaurant3');
placeholderRefArray.push(placeholder3);
var placeholder4 = document.getElementById('restaurant4');
placeholderRefArray.push(placeholder4);
var placeholder5 = document.getElementById('restaurant5');
placeholderRefArray.push(placeholder5);
var placeholder6 = document.getElementById('restaurant6');
placeholderRefArray.push(placeholder6);
var placeholder7 = document.getElementById('restaurant7');
placeholderRefArray.push(placeholder7);


function renderChoices() {
  for (var i = 0; i < placeholderRefArray.length; i++) {
    restaurantArray[i].render_pic(placeholderRefArray[i]);
  }
}


renderChoices();
