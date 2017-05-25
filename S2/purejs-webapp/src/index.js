var css = require('./index.styl');
var Selectize = require('./Selectize');
var options = require('./options');

var container = document.createElement('div');
document.getElementById("app").appendChild(container);
container.classList.add(css.container);

var s1 = new Selectize(container, options);