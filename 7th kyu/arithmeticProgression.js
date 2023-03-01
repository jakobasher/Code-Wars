function arithmeticSequenceElements(a, d, n) {
  let str = a
  let num = a
  for (let i=0; i<n-1; i++) {
    num += d
    str += ", "+num
  }
	return str;
}
// for loop, follow all the rules
