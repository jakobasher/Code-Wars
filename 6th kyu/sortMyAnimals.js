function sortAnimal(animals) {
  return animals
    ? [...animals].sort((a,b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)) 
    : null
}
// ... spread syntax, iterible object to array, in this case
// .sort() a-b for values, a-localeCompare(b) for strings?
