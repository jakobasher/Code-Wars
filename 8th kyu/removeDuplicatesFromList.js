function distinct(a) {
  let arr = []
  for (let i=0; i<a.length; i++) {
    if (!arr.includes(a[i]))
      arr.push(a[i])
  }
  return arr
}
// new Set() would of worked
