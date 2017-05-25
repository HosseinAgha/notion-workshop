var Fuse = require('fuse.js');
var css = require('./Selectize.styl');

module.exports = class Selectize {
  constructor(parentNode, options) {
    this.parentNode = parentNode;
    var config = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "title",
        "author.firstName"
      ]
    };
    this.fuse = new Fuse(options, config);
    this._initComponents() 
  }

  _initComponents() {
    this.input = document.createElement("input");
    this.parentNode.appendChild(this.input);
    this.input.addEventListener("keyup", this.onChangeInput.bind(this));

    this.container = document.createElement("div");
    this.parentNode.appendChild(this.container);
  }

  onChangeInput(event) {
    this.container.innerHTML = "";
    let results = this.fuse.search(event.target.value);
    results.forEach(this.createOptionElement.bind(this));
  }

  createOptionElement(option) {
    let div = document.createElement("div");
    div.innerHTML = option.title;
    this.container.appendChild(div);
  }
}