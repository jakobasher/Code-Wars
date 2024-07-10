function threePowers(n) {
  if (n <= 2n){
    return false
  }
  let count = 0
  while (n > 0n){
    let rem = n % 2n
    if (rem === 1n) {
      count++
    }
    n = n / 2n
  }
  return count <= 3
}
