function alphabet(ns) {
  ns.sort((a, b) => a - b)
  console.log(ns)
  return ns[7] / ns[ns[0] * ns[1] == ns[2] ? 3 : 2]
}
