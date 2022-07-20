function toWeirdCase(string){
  let arr = string.split(" ")
  let newString = ""

  for (let i = 0; i<arr.length; i++) {
    newString += 
      arr[i]
      .split("")
      .map((e, i) => i%2 == 0 ? e.toUpperCase() : e.toLowerCase())
      .join("")
      + " "
  }
  
  
  return newString.slice(0,-1)
  
  
}

// .split("") string to array
// .map("") replace elements based on function
// .join("")
