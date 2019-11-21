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

var cherryStreet = new Restaurant('Cherry Street Coffee', './images/Cherry Street Coffee.png', './images-render/cherry-street-cafe.png');
restaurantArray.push(cherryStreet);
var starbucks = new Restaurant('Starbucks', './images/starbucks.png', './images-render/starbucks-tile.png');
restaurantArray.push(starbucks);

function cherryStreetRender(placeholderTile) {
  var placeholderTile = document.getElementById('restaurant-tile');
  document.getElementById('restaurants-display').innerHTML = '';
  document.getElementById('restaurant-tile').style.visibility = 'visible';
  placeholderTile.src = cherryStreet.tile;
  document.getElementById('address').innerHTML = 'Directions to 700 1st Ave, Seattle, WA 98104';
  document.getElementById('address').href = 'https://www.google.com/maps/dir/Code+Fellows,+3rd+Avenue,+Seattle,+WA/Cherry+Street+Coffee+House,+1st+Avenue,+Seattle,+WA/@47.6078461,-122.3770165,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5490153758c88a61:0xe3d3fd29c55db518!2m2!1d-122.3518713!2d47.6182477!1m5!1m1!1s0x54906ab00bbf2803:0xe7b4ebaaf86b18ac!2m2!1d-122.3342122!2d47.6027518';
  document.getElementById('menu').innerHTML = 'Full Cherry Street Menu';
  document.getElementById('menu').href = 'https://www.cherryst.com/';
}
function starbucksRender(placeholderTile) {
  var placeholderTile = document.getElementById('restaurant-tile');
  document.getElementById('restaurants-display').innerHTML = '';
  document.getElementById('restaurant-tile').style.visibility = 'visible';
  placeholderTile.src = starbucks.tile;
  document.getElementById('address').innerHTML = 'Directions to 1912 Pike Pl, Seattle, WA 98101';
  document.getElementById('address').href = 'https://www.google.com/maps/dir/Code+Fellows,+3rd+Avenue,+Seattle,+WA/Starbucks,+Pike+Place,+Seattle,+WA/@47.6141377,-122.3552113,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x5490153758c88a61:0xe3d3fd29c55db518!2m2!1d-122.3518713!2d47.6182477!1m5!1m1!1s0x54906ab2c538c70b:0x11ebfd9ae22719cf!2m2!1d-122.342583!2d47.610021';
  document.getElementById('menu').innerHTML = 'Full Starbucks Menu';
  document.getElementById('menu').href = 'https://www.starbucks.com/menu?&utm_term=starbucks&gclid=CjwKCAiAws7uBRAkEiwAMlbZjrZRr0YkpDQkQHiK4EE2rk5XfXqKcxlBqOZRgSpTK-BVeIEhytZ-8RoCyIoQAvD_BwE&utm_campaign=BR+-+Brand+-+Starbucks+-+Desktop+-+Exact&utm_medium=cpc&utm_source=google';
}


var placeholder0 = document.getElementById('restaurant0');
placeholderRefArray.push(placeholder0);
placeholder0.addEventListener('click', cherryStreetRender);
var placeholder1 = document.getElementById('restaurant1');
placeholder1.addEventListener('click', starbucksRender);
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
