function gettingMad(array) {
  let min = Infinity
  for (let i=0; i<array.length; i++) {
    for (let j=i+1; j<array.length; j++) {
      let num = Math.abs(array[i] - array[j])
      if (min > num) min = num
    }
  }
  return min
}
// Math.abs() returns absolute value
