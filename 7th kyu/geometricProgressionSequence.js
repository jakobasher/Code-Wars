function geometricSequenceElements(a, r, n){
  let str = a
  let num = a
  for (let i=0; i<n-1; i++) {
    num *= r
    str += ", "+num
  }
	return str;
}
// *= Multiplication Assignment operator multiplies a variable by the value of the right operand 
// += Addition Assignment operator adds the value of the right operand to a variable
