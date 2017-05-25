
console.log("aleik required!");
module.exports = class Aleik {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  showAdd() {
    console.log(this.a * this.b);
  }
}