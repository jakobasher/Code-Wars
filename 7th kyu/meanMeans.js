function geo_mean(nums, arith_mean) {
  let n = arith_mean * (nums.length+1) - nums.reduce((a,c)=>a+c,0)
  nums.push(n)
  let n2 = nums.reduce((a,c)=>a*c,1)
  return Math.pow(n2,(1 / nums.length))
}
// .reduce() adds/multiplys all elements
// .push() add element to end of array
// Math.pow() base raised to exponent
