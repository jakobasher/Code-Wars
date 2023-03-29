function add(...args) {
  let num = args.reduce((a,c,i) => a+c/(i+1), 0)
  return Math.round(num)
}
// .reduce() add elements, in this case
// Math.round() round num
// Accumulater adds every element at index+1
