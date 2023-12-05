function realNumbers(n){
  let result = n -
    Math.floor(n / 2) -
    Math.floor(n / 3) -
    Math.floor(n / 5) +
    Math.floor(n / (2 * 3)) +
    Math.floor(n / (2 * 5)) +
    Math.floor(n / (3 * 5)) -
    Math.floor(n / (2 * 3 * 5))
  return result
}
