function isDivisible(...args){
  let array = [...args]
  let num = array[0]
  for (let i=1; i<array.length; i++) {
    if (num%array[i] !== 0) return false
  }
  return true
}
// ... Spread syntax, list->array
