function digital_root(n) {
  
  let num = n.toString().split('').map(Number).reduce((a,c)=>a+c,0)
  
  return num < 10 ? num : digital_root(num)  
  
    
}

// .toString() integer to string
// .split() split string into substring in array
// .map() creates new array based on 
// .reduce() returns value
