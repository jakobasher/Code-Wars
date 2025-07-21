function squarePi(digits){
  let pi = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679"
  let array = pi.replace(".", "").slice(0, digits).split("").map(Number)
  let num = Math.sqrt(array.reduce((a,c)=> a + c*c, 0))
  return Math.ceil(num)
}
