function pattern(n){
  let arr = []
  for (let i=1; i<n+1; i++) {
    arr.push("1" + "*".repeat(i-1) + i)
  }
  return arr.join("\n").replace("1","")
}
// .push() add to end of array
// .repeat() repeat string n times
// .join() returns string from array
// .replace() replace with
