function canIPlay(now,start,end) {
  if (end < start) {
    if (now >= start || now < end) {
      return true
    }
  }
  if (now >= start && now < end) {
    return true
  }
  return false
}
