function flyBy(lamps, drone){
  let n = drone.length
  return lamps.split("").map((e,i) => i < n ? "o" : "x").join("")
}
// .split() return string as an array to map
// .map() check if index is below drone, turn on if, else off
// .join() return string from array
