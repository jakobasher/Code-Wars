function evenOrOdd(str) {
  let arr = str.split("").map(Number)
  let odd = arr.filter((e,i)=>e%2!==0).reduce((a,c)=>a+c,0)
  let even = arr.filter((e,i)=>e%2==0).reduce((a,c)=>a+c,0)
  return odd > even ? 'Odd is greater than Even' 
    : even > odd ? 'Even is greater than Odd'
    : 'Even and Odd are the same'
}
// .split() return as array
// .map() Fn to each number
// .filter() returns filtered copy of array
// .reduce() adds all elements, in this case
