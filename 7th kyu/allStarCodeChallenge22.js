function toTime(seconds) {
  let hour = Math.floor(seconds/60/60)
  let minute = Math.floor(seconds/60%60)
  return `${hour} hour(s) and ${minute} minute(s)`
}
// Math.floor() round down
// `` ${} template literals
