function capital(capitals){
//   return capitals
  return capitals.map(e => `The capital of ${e.state || e.country} is ${e.capital}`)
}
// .map() Fn to sort object
