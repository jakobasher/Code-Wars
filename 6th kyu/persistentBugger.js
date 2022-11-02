function persistence(num) {
  let count = 0
  while (num > 9) {
    num = num.toString().split("").map(Number).reduce((a,c)=>a*c,1)
    count++
  }
  return count
}

// while() while loop repeats unit () not true
// .toString() Number to string
// .split() string to array
// .map(Number) Fn each element to number
// .reduce() multiplier
