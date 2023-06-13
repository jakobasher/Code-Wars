function reduce(fraction) {
  let gcd = Math.min(...fraction)
  while (fraction[0] % gcd !== 0 || fraction[1] % gcd !== 0) {
    gcd--
  }
  return fraction.map(e=>e/gcd)
}
// Math.min() returns min value of iterible list
// while loop, while true loops else false breaks
// .map() Fn to each element in array
