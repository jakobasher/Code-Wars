function fiveLine(s){
  let arr = []
  for (let i=0; i<5; i++) {
    arr.push(s.trim().repeat(i+1))
  }
  return arr.join("\n")
}
// .push() add to end of array
// .trim() removes white space at begin and end
// .join() return as string
