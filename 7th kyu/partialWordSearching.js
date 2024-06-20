function wordSearch(query, seq){
  let array = seq.filter(e => e.toLowerCase().includes(query.toLowerCase()))
  return array.length == 0 ? ["Empty"] : array
}
