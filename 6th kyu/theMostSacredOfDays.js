function blackFriday(year) {
  let day = 23
  while (new Date(year, 10, day).getDay() !== 5) {
    day++
  }
  return day
}
// Black Friday is from Nov 23-29, iterate through each day until Friday is found.
// Day, Day 5 == Friday then break loop
