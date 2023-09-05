function automorphic(n){
  return (n*n+"").endsWith(n) ? "Automorphic" : "Not!!"
}
// .endWith() returns t/f, checks if string ends with 
