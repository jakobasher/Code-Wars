const generate = length => {
  let bits = ""
  for (let i=0; i<length; i++) {
    let num = Math.random()
    bits += Math.round(num)
  }
  return bits
};
// bits = "" to return a string so it does not add up
// Math.random() random number between 0 and 1
// Math.round() round to nearest whole number
