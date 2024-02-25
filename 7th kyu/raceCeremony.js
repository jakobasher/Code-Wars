function racePodium(blocks) {
  if (blocks == 7) return [2,4,1]
  let second = blocks/3 + 2/3 | 0
  let first = second + 1
  let third = blocks - first - second
  return [second, first, third]
}
// | 0 
