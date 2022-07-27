function duplicateCount(text){
  let count = {}
  let array = text.toLowerCase().split("")
  let num = 0
  
  for (var key of array) {
    count[key] = (count[key] || 0) + 1   
  }
  
  for (var val in count) {
    if (count[val] > 1) {
      num++
    }
  }
  
  
  return num
  
}

// for (var key of const) in loop
// (count[key] || 0)+1 if exist value++ else 0+1
