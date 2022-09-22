function wave(str){
  let array = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      let letter = str[i].toUpperCase()
      let start = str.slice(0,i)
      let end = str.slice(i+1)
      array.push(start+letter+end)
      }
  }
  return array
}

// .toUpperCase() returns capital letter
// .slice(start,end) returns portion of array
// .push() add element to end of array
