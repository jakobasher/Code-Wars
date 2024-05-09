function lottery(str){
  let arr = str.match(/\d/g)
  if (!arr) return "One more run!"
  return [...new Set(arr)].join("")
}
