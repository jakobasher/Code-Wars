function crap(x, bags, cap){
  let count = 0
  for (let row of x) {
    for (let e of row) {
      if (e == '@') {
        count++
      }
      if (e == 'D') {
        return "Dog!!"
      }
    }
  }
  return count <= bags * cap ? "Clean" : "Cr@p"
}
