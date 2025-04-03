function remove(str, what) {
  let result = str.split('')
  for (let char in what) {
    let count = what[char]
    for (let i=0; i<result.length; i++) {
      if (count > 0 && result[i] == char) {
        result[i] = ''
        count--
      }
    }
  }
  return result.join('');
}
