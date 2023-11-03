String.prototype.toAlternatingCase = function () {
  return this
    .split("")
    .map(e => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase())
    .join("")
}
// .split() returns array
// .map() Fn
// .join() returns string
