function consecutiveOnes(nums) {
   let max = 0, curr = 0
   for (let i=0; i<nums.length; i++) {
     if (nums[i]==1) {
       curr++
     } else {
       max = Math.max(max,curr)
       curr=0
     }
   }
  return Math.max(max,curr)
};
// When 1 occurs, count every consecutive occurance, else break and record max
