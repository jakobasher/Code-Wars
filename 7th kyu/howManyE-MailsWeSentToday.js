function getPercentage(sent, limit){
  limit ? limit : limit = 1000
  if (sent == 0) return "No e-mails sent"
  if (sent >= limit) return "Daily limit is reached"
  return Math.floor(sent/limit*100) + "%"
}
// Math.floor() round down
