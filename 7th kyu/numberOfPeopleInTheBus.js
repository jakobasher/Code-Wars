var number = function(busStops){
  let num = 0
  for (let i=0; i<busStops.length; i++) {
    num += busStops[i][0] - busStops[i][1]
  }
  return num
}
// an array within an array stacks
