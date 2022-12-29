const mapPopulationFit = (population, fitness) => {
  return population.map(c => {
    return {chromosome: c, fitness: fitness(c)}
  })
};
// .map() returns chromosome as from element, fitness() function(element)
