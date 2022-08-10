function arrAdder(arr) {
  let string = ""
  
  for (let i = 0; i<arr[0].length;i++) {
    for (let j = 0; j<arr.length; j++) {
        string += arr[j][i]
    }
    string += " "
  } 

  return string.slice(0,-1)
  
  
}

// .slice() returns portion of array
// .trim() removes white spaces at beginning and end
