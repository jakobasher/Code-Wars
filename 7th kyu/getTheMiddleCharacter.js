function getMiddle(s){
    
  let length = s.length
  let even = s[length/2-1]+s[length/2]
  let odd = s[Math.ceil(length/2-1)]
    
  return length%2==0 ? even : odd
     
  
}

// Math.ceil() round up
