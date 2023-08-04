function elapsedSeconds(startDate, endDate){
  let n1 = startDate.getTime()/1000
  let n2 = endDate.getTime()/1000
  return n2-n1
}
// .getTime() returns ms from date
