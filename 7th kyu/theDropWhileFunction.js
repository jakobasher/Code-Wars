function dropWhile(array, predicate) {
  let i = 0
  while (i < array.length && predicate(array[i])) {
    i++
  }
  return array.slice(i)
}
