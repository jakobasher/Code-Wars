function iccanobif(n) {
  let array = [0,1]
  let num = 1
  for (let i=1; i<n; i++) {
    array.push(array[i-1]+array[i])
  }
  return array.reverse().slice(0,-1)
}
