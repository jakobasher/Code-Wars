function isToday(date) {
  let today = new Date()
  return (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  )
}
// new Date() returns current date
// .getDate() .getMonth() .getFullYear(), if all true returns true
