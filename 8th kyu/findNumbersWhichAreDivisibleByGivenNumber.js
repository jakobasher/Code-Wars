function divisibleBy(numbers, divisor){
  return numbers.filter(e=>e%divisor==0)
}
// First try
// .filter() return copy of array
