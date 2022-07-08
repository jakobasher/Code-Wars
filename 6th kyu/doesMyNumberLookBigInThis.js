function narcissistic(value) {
  let x = value.toString().length
  let num = value.toString().split("").map(e=>Number(e)).map(e=>Math.pow(e,x)).reduce((a,c)=>a+c,0)
   
  return num == value 
  
  
}

// .toString() array to string
// .split() string to substrings in array
// .map() new array based on 
// .reduce()

// double map??
