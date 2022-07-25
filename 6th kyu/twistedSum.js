function twistedSum(n) {
  let count = 0
  
  for (let i = 0; i < n+1; i++) {    
    count += i.toString().split("").map(e=>Number(e)).reduce((a,c)=>a+c,0)
  }
  
  return count

}

// .toString() returns string
// .split() return array 
// .map() function
// Number() integer-string to integer
// .reduce() sum array

