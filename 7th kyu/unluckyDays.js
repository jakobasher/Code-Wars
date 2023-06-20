function unluckyDays(year){
  let count = 0
  for (let month = 0; month<12; month++) {
    var date = new Date(year, month, 13)
    if (date.getDay() == 5)
      count++
    }
  return count
}
// Checks the 13th of each month, if lands on Friday count++
