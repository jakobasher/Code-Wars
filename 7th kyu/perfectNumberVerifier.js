function isPerfect(n) {
  let array = [6, 28, 496, 8128, 33550336, 8589869056, 137438691328]
  for (let i=0; i<array.length; i++) {
    if (array[i] == n) return true
  }
  return false
}

// A unusual challenge, only 51(?) known numbers?, requires research over all
