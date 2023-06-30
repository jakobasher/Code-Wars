function meeting(x, need){
  if (need == 0) return "Game On"
  let arr = []
  for (let i=0; i<x.length; i++){
    if (x[i][1] > x[i][0].length) {
      arr.push (x[i][1] - x[i][0].length)
    } else
      arr.push(0)
  }
  for (let i=0; i<arr.length; i++) {
    let num = arr.slice(0,i+1).reduce((a,c)=>a+c,0)
    if (num >= need) {
      arr = arr.slice(0,i+1)
      break
    }
  }
  if (arr.reduce((a, b) => a + b, 0) < need) return "Not enough!";
  while (arr.reduce((a, c) => a+c, 0) > need) {
    arr[arr.length-1]--
  }
  return arr
}
// First check if you even need a chair
// Then check if there is enough chairs available
// Then check how much you will need in the last room
