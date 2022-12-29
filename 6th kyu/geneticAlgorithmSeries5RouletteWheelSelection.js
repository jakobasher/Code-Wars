const select = (population, fitnesses) => {
  let arr = fitnesses.map((e, i, arr) =>
    arr.slice(0, i+1).reduce((a, c) => a+c, 0)
  )
  for (let i=0; i < population.length; i++) {
    if (arr[i] >= Math.random()) return population[i]
  }          
}
// part 1 set up
// part 2 return
