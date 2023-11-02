function nextHappyYear(year){
  while (true) {
    year++
    let digits = String(year).split('')
    let uniqueDigits = new Set(digits)
    if (uniqueDigits.size == 4) {
      return year
    }
  }
}
// while() while true, continue
// String() return as string
// split() return as array
// new Set() return unique values from array
