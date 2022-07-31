function findUniq(arr) {
  
  let count = {}
  
  for (let key of arr){
    count[key] = (count[key] || 0) + 1
  }
  
  for (let val in count) {
    if (count[val] == 1) 
      return Number(val)    
  }
     

}

// for in loop
// for of loop
