function hammingWeight(x){
  if (x == 0) {
    return 0
  }
  let binary = ""
  while (x > 0) {
    let bit = x & 1
    binary = bit + binary
    x >>= 1
  }
  return binary.split("").filter(e=>e=="1").length
}
/// No string operations
