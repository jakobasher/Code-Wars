function reverseInvert(array) {
  return array
    .filter(e => Number.isInteger(e))
    .map(e => -Math.sign(e) * parseInt(String(e).split("").reverse().join(""), 10))
}
