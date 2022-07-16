function spinWords(string){
  let arr = string.split(" ")
  let newString = ""
  
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].length > 4) {
      newString += arr[i].split("").reverse().join("")+" "
    } else 
      newString += arr[i]+" "
  }
  
  return newString.slice(0,-1)  
  
}

// .slice(start, end) 0 for start, -1 for 1 off end
// Try .map()
