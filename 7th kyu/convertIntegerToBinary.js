function toBinary(n){
  return n >= 0 
    ? n.toString(2)
    : (Math.pow(2,32)+n).toString(2)
}
// .toString() convert to string
// .Math.pow() base raised to exponent, twos compliment 32 bit in this case
