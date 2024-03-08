var paintLetterboxes = function(start, end) {
  let arr = Array(10).fill(0)
  
  for (let i=start; i<=end; i++) {
    let numStr = i.toString()
    for (let digitChar of numStr) {
      let digit = parseInt(digitChar);
      arr[digit]++
    }
  }
  return arr
} 
