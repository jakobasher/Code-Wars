function to24hourtime(hour, minute, period) {
  if (period == "pm" && hour !== 12) {
    hour += 12
  } else if (period == "am" && hour == 12) {
    hour = 0
  }
  return hour.toString().padStart(2, "0") + minute.toString().padStart(2, "0")
}
// .toString() return as string
// .padStart() adjust string to certain index by padding
