var restaurantArray = [];
var placeholderRefArray = [];



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

var alBasha = new Restaurant('Al Basha', './images/Al Basha.png', './images-render/mcdonalds-tile.png');
restaurantArray.push(alBasha);
var uptownChina = new Restaurant('Uptown China', './images/Uptown China.png', './images-render/subway-tile.png');
restaurantArray.push(uptownChina);

function alBashaRender(placeholderTile) {
  var placeholderTile = document.getElementById('restaurant-tile');
  document.getElementById('restaurants-display').innerHTML = '';
  document.getElementById('restaurant-tile').style.visibility = 'visible';
  placeholderTile.src = alBasha.tile;
  document.getElementById('address').innerHTML = 'Directions to 2300 1st Ave, Seattle, WA 98121';
  document.getElementById('address').href = 'https://www.google.com/maps/dir/Code+Fellows,+3rd+Avenue,+Seattle,+WA/Al+Basha+Mediterranean+Grill,+1st+Avenue,+Seattle,+WA/@47.6161273,-122.3526215,16z/data=!4m14!4m13!1m5!1m1!1s0x5490153758c88a61:0xe3d3fd29c55db518!2m2!1d-122.3518713!2d47.6182477!1m5!1m1!1s0x5490154dc7b40f6d:0xc8ceb9d5a6d7a6c6!2m2!1d-122.3466513!2d47.6136473!5i2';
  document.getElementById('menu').innerHTML = 'Full Al Basha Menu';
  document.getElementById('menu').href = 'http://albashaseattle.com/store/';
}
function uptownChinaRender(placeholderTile) {
  var placeholderTile = document.getElementById('restaurant-tile');
  document.getElementById('restaurants-display').innerHTML = '';
  document.getElementById('restaurant-tile').style.visibility = 'visible';
  placeholderTile.src = uptownChina.tile;
  document.getElementById('address').innerHTML = 'Directions to 200 Queen Anne Ave N, Seattle, WA 98109';
  document.getElementById('address').href = 'https://www.google.com/maps/dir/Code+Fellows,+3rd+Avenue,+Seattle,+WA/Uptown+China+Restaurant,+200+Queen+Anne+Ave+N,+Seattle,+WA+98109/@47.6190917,-122.3564728,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5490153758c88a61:0xe3d3fd29c55db518!2m2!1d-122.3518713!2d47.6182477!1m5!1m1!1s0x54901544d88280e9:0x7adfe4223e64e9d!2m2!1d-122.3565412!2d47.6199276';
  document.getElementById('menu').innerHTML = 'Full Uptown China Menu';
  document.getElementById('menu').href = 'https://www.uptown-china.com/';
}


var placeholder0 = document.getElementById('restaurant0');
placeholderRefArray.push(placeholder0);
placeholder0.addEventListener('click', alBashaRender);
var placeholder1 = document.getElementById('restaurant1');
placeholder1.addEventListener('click', uptownChinaRender);
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
