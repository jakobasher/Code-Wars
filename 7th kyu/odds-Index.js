function oddBall(arr){
  let idx = arr.findIndex(i => i == "odd")
  return arr.includes(idx)
}
// .findIndex() returns value of first true
// .includes() returns t/f if array contains search
