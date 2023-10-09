function time(distance,boatSpeed,stream){
  let arr = stream.split(" ")
  if (arr[0] == "Downstream") {
    boatSpeed += arr[1] *1
  }
  if (arr[0] == "Upstream") {
    boatSpeed -= arr[1] *1
  }
  return (distance/boatSpeed).toFixed(2) *1
}
// .split() return as array
// *1 return and integer
// .toFixed() return to decimal 
