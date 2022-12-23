const factorial = n => {
  return n > 1 ? n*factorial(n-1) : 1
};
// factorial(n) * factorial(n-1) * factorial((n-1)-1) * and so on...
