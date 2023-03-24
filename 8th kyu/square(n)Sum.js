function squareSum(numbers){
  return numbers.reduce((a,c) => a+c*c, 0)
}
// .reduce() adds element in array
// Instead of using map, c*c
