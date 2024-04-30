function numberProperty(n) {
  if (n<2) return [false, n%2==0, n%10==0]

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return [false, n%2==0, n%10==0]
    }
  }
  
  return [true,n%2==0,n%10==0]
}
