function isHappy(n) {
  for (let i = 0; i<10; i++) {
    n = n.toString().split("").map(Number).reduce((a,c)=>a+c*c,0)
  }
  return n == 1
}
// .toString returns string
// .toSplit() returns array from string
// .map(Number) returns every element as integer
// .reduce() adds all elements squared
// repeats 10 times, returns true if n=1
