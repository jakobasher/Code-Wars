function similarity(a, b) {
  let doubles = 0
  let l = Math.max(a.length,b.length)
  for (let i=0; i<l; i++) {
    if (b.includes(a[i])) doubles++
  }
  let uniques = [...new Set(a.concat(b))].length
  return doubles / uniques
}
