function incrementer(nums) { 
  return nums.map((e,i) => (e+i+1) % 10)
}

// .map() Fn to each element
// % return remainder
