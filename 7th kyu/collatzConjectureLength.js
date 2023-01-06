function collatz(n) {
  let num = 1
  while (n>1) {
    n%2==0 ? n=n/2 : n=n*3+1
    num++
  }
  return num
}
// while() if true then proceed
