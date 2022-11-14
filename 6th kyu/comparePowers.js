function comparePowers(n1,n2){
  let num1 = Math.log10(n1[0]) * n1[1]
  let num2 = Math.log10(n2[0]) * n2[1]
  return num1 == num2 ? 0 : num1 > num2 ? -1 : 1
}
// Math.log10() returns base log10 of a number
