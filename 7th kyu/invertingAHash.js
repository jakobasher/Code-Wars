function invertHash(hash) {
  let map = {}
  for (let key in hash) {
    map[hash[key]] = key
  }
  return map
}
