function makeAdder(a) {
  return function(b) {
      // return a + b;
      console.log(a + b)
  }
}
var x = makeAdder(5);
var y = makeAdder(20);
x(6); // ?
y(7); // ?