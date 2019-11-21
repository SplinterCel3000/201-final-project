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

var mcdonalds = new Restaurant('Al Basha', './images/Al Basha.png', './images-render/mcdonalds-tile.png');
restaurantArray.push(mcdonalds);
var subway = new Restaurant('Subway', './images/logo-subway.png', './images-render/subway-tile.png');
restaurantArray.push(subway);

function mcdonaldsRender(placeholderTile) {
  var placeholderTile = document.getElementById('restaurant-tile');
  document.getElementById('restaurants-display').innerHTML = '';
  document.getElementById('restaurant-tile').style.visibility = 'visible';
  placeholderTile.src = mcdonalds.tile;
  document.getElementById('address').innerHTML = 'Directions to 222 5th Ave N, Seattle, WA 98109';
  document.getElementById('address').href = 'https://www.google.com/maps/dir/Code+Fellows,+3rd+Avenue,+Seattle,+WA/McDonald\'s,+222+5th+Avenue+North,+Seattle,+WA/@47.6195541,-122.3538344,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5490153758c88a61:0xe3d3fd29c55db518!2m2!1d-122.3518713!2d47.6182477!1m5!1m1!1s0x549015461f31627d:0x84e4668893bf8eea!2m2!1d-122.3471369!2d47.6204944';
  document.getElementById('menu').innerHTML = 'Full Mcdonalds Menu';
  document.getElementById('menu').href = 'https://www.mcdonalds.com/us/en-us/full-menu.html?cid=PS:GCM_Ret::Google::Sitelink:See_Our_Full_Menu&gclsrc=aw.ds';
  console.log('mcdonalds clicked');
}
function subwayRender(placeholderTile) {
  var placeholderTile = document.getElementById('restaurant-tile');
  document.getElementById('restaurants-display').innerHTML = '';
  document.getElementById('restaurant-tile').style.visibility = 'visible';
  placeholderTile.src = subway.tile;
  document.getElementById('address').innerHTML = 'Directions to 97 Denny Way, Seattle, WA 98109';
  document.getElementById('address').href = 'https://www.google.com/maps/dir/Code+Fellows,+3rd+Avenue,+Seattle,+WA/subway+near+me/@47.6184019,-122.3558642,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5490153758c88a61:0xe3d3fd29c55db518!2m2!1d-122.3518713!2d47.6182477!1m5!1m1!1s0x549015454ebf4987:0xe1f2c5afbd11bb4f!2m2!1d-122.3554832!2d47.6184421';
  document.getElementById('menu').innerHTML = 'Full Subway Menu';
  document.getElementById('menu').href = 'https://www.subway.com/en-US/MenuNutrition/Menu';
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
