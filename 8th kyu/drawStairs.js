function drawStairs(n) {
  let str = ""
  for (let i=0; i<n; i++) {
    str += " ".repeat(i)+"I\n"
  }
  return str.slice(0,-1)
}
// .repeat() repeat string i times
// \n line break
// .slice() returns portion of string, beginning to last-1 in this case
