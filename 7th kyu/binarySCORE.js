function score(n){
  return n == 0 
    ? 0 
    : 2 ** n.toString(2).length - 1
}
// If n !==0 then proceed 2 raised to the length of n
