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

var mcdonalds = new Restaurant('CJs', './images/CJ\'s eatery.png', './images-render/cjs-tile.png');
restaurantArray.push(mcdonalds);
var subway = new Restaurant('5 Point', './images/5 Point Cafe.png', './images-render/5-point-cafe-tile.png');
restaurantArray.push(subway);

function mcdonaldsRender(placeholderTile) {
  var placeholderTile = document.getElementById('restaurant-tile');
  document.getElementById('restaurants-display').innerHTML = '';
  document.getElementById('restaurant-tile').style.visibility = 'visible';
  placeholderTile.src = mcdonalds.tile;
  document.getElementById('address').innerHTML = 'Directions to CJ\'s Eatery, 2619 1st Ave, Seattle, WA 98121';
  document.getElementById('address').href = 'https://www.google.com/maps/dir/Code+Fellows,+3rd+Avenue,+Seattle,+WA/CJ\'s+Eatery,+2619+1st+Ave,+Seattle,+WA+98121/@47.6169708,-122.3529213,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5490153758c88a61:0xe3d3fd29c55db518!2m2!1d-122.3518713!2d47.6182477!1m5!1m1!1s0x5490154e39ac27b5:0xccfe1e91c51a72fd!2m2!1d-122.350655!2d47.6155748';
  document.getElementById('menu').innerHTML = 'Full CJ\'s Menu';
  document.getElementById('menu').href = 'http://www.cjseateryseattle.com/menu/';
  console.log('mcdonalds clicked');
}
function subwayRender(placeholderTile) {
  var placeholderTile = document.getElementById('restaurant-tile');
  document.getElementById('restaurants-display').innerHTML = '';
  document.getElementById('restaurant-tile').style.visibility = 'visible';
  placeholderTile.src = subway.tile;
  document.getElementById('address').innerHTML = 'Directions to 5 Point Cafe, 415 Cedar St, Seattle, WA 98119';
  document.getElementById('address').href = 'https://www.google.com/maps/dir/Code+Fellows,+3rd+Avenue,+Seattle,+WA/The+5+Point+Cafe+(Diner+Dive+Bar),+415+Cedar+St,+Seattle,+WA+98119/@47.6178652,-122.354028,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5490153758c88a61:0xe3d3fd29c55db518!2m2!1d-122.3518713!2d47.6182477!1m5!1m1!1s0x5490154f30f8b589:0xe497f55de9f590ca!2m2!1d-122.3474514!2d47.6181058';
  document.getElementById('menu').innerHTML = 'Full 5 Point Menu';
  document.getElementById('menu').href = 'https://www.the5pointcafe.com/main-menu';
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
