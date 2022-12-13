function findMaxProduct(arr){
  let array = []
  for (let i = 0; i<arr.length; i++) {
    let num = arr
      .filter((e,idx) => (idx+1)%(i+1) == 0)
      .reduce((a,c) => a*c, 1)
    array.push(num)
  }
  return Math.max(...array)
}
// i can be adjusted in this case
// .filter() filters array based on index divsion
// .reduce() mutliply all elements together
// Math.max() returns max value
