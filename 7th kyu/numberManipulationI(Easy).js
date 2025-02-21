function manipulate(num) { 
  let numStr = num.toString()
  let half = Math.floor(numStr.length/2)
  
  return +numStr.split("").map((e, i) => i<half ? e : 0).join("")
} 
