function howManyGifts(maxBudget, gifts){
  gifts.sort((a,b)=>a-b)
  let count = 0
  let budget = 0
  
  for (let i=0; i<gifts.length; i++) {
    if (budget+gifts[i] <= maxBudget) {
      budget += gifts[i]
      count++
    }
  }
  return count
}

// .sort() a-b ascending mutates array
