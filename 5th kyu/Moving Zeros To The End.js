function moveZeros(arr) {
  
  let zero = []
  for (let i =0; i<arr.length; i++) {
    if(arr[i]===0) {
      arr.splice(i, 1)
      i--
      zero.push(0)
    }    
  } 
    return arr.concat(zero)
  
}

//double filter then concat would be simpler
