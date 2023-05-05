function getAverage(marks){
  let average = marks.reduce((a,c)=>a+c,0) / marks.length
  return Math.floor (average)
}
// .reduce() adds all elements, in this case
// Math.floor() round down
