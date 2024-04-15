function animals(heads, legs){
  let cows = legs/2 - heads
  let chickens = heads - cows
  return /\.|-/g.test(`${chickens}${cows}`) 
    ? "No solutions"
    : [chickens, cows]
}
