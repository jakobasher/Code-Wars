function digitsAverage(input) {
  if (input < 10) return input
  
  let array = input.toString().split("").map(Number)
  let array2 = []
  for (let i=0; i<array.length-1; i++) {
    let n = (array[i] + array[i+1]) / 2
    array2.push(Math.ceil(n))
  }
  return array2.length == 1? array2[0] : digitsAverage(array2.join(""))
}
