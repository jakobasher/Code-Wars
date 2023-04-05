function cheapestQuote(newspapers) {
  let bill = 0
  while (newspapers >= 40) {
    bill += 3.85
    newspapers -= 40
  }
  while (newspapers >= 20) {
    bill += 1.93
    newspapers -= 20
  }
  while (newspapers >= 10) {
    bill += 0.97
    newspapers -= 10
  }
  while (newspapers >= 5) {
    bill += 0.49
    newspapers -= 5
  }
  while (newspapers >= 1) {
    bill += 0.10
    newspapers -= 1
  }
  return +bill.toFixed(2)
}
// += adds left equals left+right
// -= minus left equals left-right
// .toFixed() return certain decimal point
