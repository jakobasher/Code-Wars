function daysUntilChristmas(date) {
  let passed = date.getMonth() == 11 && date.getDate() > 25
  let next = new Date(date.getFullYear() + +is_passed, 11, 25)
  return (next - date) / 86400000
}
