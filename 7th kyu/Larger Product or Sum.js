function sumOrProduct(array, n) {
  array.sort((a,b)=>a-b)
  let prod = 1
  let sum = 0
  
  for (let i = 0; i<n; i++) {
    prod = prod*array[i]
  }
  
  for (let i = (array.length-n); i<array.length; i++){
    sum = sum + array[i]
  }
  
  if (sum > prod) return "sum"
  if (sum < prod) return "product"
  if (sum == prod) return "same"
}
