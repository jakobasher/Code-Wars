function colorOf(r,g,b){
  let hexR = r.toString(16).padStart(2, "0")
  let hexG = g.toString(16).padStart(2, "0")
  let hexB = b.toString(16).padStart(2, "0")
  return `#${hexR}${hexG}${hexB}`
}
// .toString(16) returns hexadecimal value
// .padStart() adds padding if length
