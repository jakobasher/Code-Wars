function maxProduct(a) {
  let first = 0
  let second = 0
  for (let num of a) {
    if (num > first) {
      second = first
      first = num
    } else if (num > second) {
      second = num
    }
  }
  return first * second
}
// if bigger then first then moves down list, else if second then just second moves down
