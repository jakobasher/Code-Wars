function recaman(n) {
  let seq = [0]
  for (let i=1; i<=n; i++) {
    let next = seq[seq.length-1] - i
    if (next<0 || seq.includes(next)) {
      next = seq[seq.length-1] + i
    }
    seq.push(next)
  }
  return seq[seq.length-1]
}
