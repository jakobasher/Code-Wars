function nextId(ids){
  let smallest = 0
  let array = [...new Set(ids)]
  for (let i=0; i<array.length; i++) {
    if (array.includes(smallest)) {
      smallest++
    }
  }
  return smallest
}
