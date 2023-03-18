function numberToPower(number, power){
  let num = 1
  for (let i=1; i<=power;i++) {
    num*=number
  }
  return num
}
// Can't use Math.pow(), **, resort to loops
