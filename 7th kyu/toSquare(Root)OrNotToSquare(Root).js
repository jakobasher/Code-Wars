function squareOrSquareRoot(array) {
  return array.map(e => Math.pow(e,0.5)%1==0 
         ? Math.pow(e,0.5) 
         : Math.pow(e,2))
}
// .map() check if integer, in this case, yes return squar root, else return squared
