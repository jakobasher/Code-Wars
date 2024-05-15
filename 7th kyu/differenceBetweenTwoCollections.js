function diff(a, b){
  let c = []
  for (let i=0; i<a.length; i++) {
    if (!b.includes(a[i]) && !c.includes(a[i])) c.push(a[i])
  }
  for (let i=0; i<b.length; i++) {
    if (!a.includes(b[i]) && !c.includes(b[i])) c.push(b[i])
  }
  return c.sort()
}
