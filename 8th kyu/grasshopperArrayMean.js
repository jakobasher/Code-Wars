var findAverage = function (nums) {
  return nums.reduce((a,c)=>a+c,0) / nums.length
}
// .reduce() adds all elements in this case
