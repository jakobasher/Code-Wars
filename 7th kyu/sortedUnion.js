function uniteUnique() {
  let data = [...arguments].flat()
  return [...new Set(data)]
}
// arguments 
// .flat() opens array to nth degree
// new Set() returns unique values
// ... spread syntax
