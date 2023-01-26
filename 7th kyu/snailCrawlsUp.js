function snail(column, day, night) {
  let num = 0
  let numberOfDays = 1
  for (let num=day; num<column; num+=day){
    numberOfDays++
    num = num-night
  }
  return numberOfDays
}
// Starts at Day 1, if not at the top, another day
