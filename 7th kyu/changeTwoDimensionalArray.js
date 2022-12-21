function matrix(array) {
    for (let i=0; i<array.length; i++) {
      array[i][i] < 0 ? array[i][i] = 0 : array[i][i] = 1
    }
  return array
}
// Ternary ? if true : if false
// could of been simpified to array[i][i] = array[i][i] < 0 ? 0 : 1
