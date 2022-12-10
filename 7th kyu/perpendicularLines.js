function maxBisectors(n) {

//   if (n<2) {
//     return 0
//   }
//   if (n%2 == 0) {
//     return Math.pow(n/2, 2)
//   }
//   if (n%2 !== 0) {
//     return Math.pow((n-1)/2, 2) + (n-1)/2
//   }
  
return n%2 == 0
      ? Math.pow(n/2, 2)
      : Math.pow((n-1)/2, 2) + (n-1)/2 
}

// Math.pow() returns base raised to an exponent
// THOUGHT PROCESS: Draw out the lines, every even number is half n squared, figured out the relationship for the odd numbers after
