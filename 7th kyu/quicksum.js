function quicksum(packet){
  if (/[^ A-Z]/g.test(packet)) 
    return 0
  return packet
    .split("")
    .map((e,i) => (e == " " ? 0 : (e.charCodeAt()-64) * (i+1)))
    .reduce((a, b) => a+b, 0)
}
// .split() return as array
// .map() Fn to array 
// .charCodeAt() returns UTF16 value
// .reduce() adds all elements, in this case
