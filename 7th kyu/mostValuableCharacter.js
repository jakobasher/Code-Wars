function solve(st) {
  let count = {};
  for (let key of st) {
    count[key] = (count[key] || 0) + 1;
  }

  let max = Math.max(...Object.values(count))
  let arr = []

  for (let key in count) {
    if (count[key] == max) {
      arr.push(key)
    }
  }
  return arr.sort()[0]
}
// Not 7
