function consonantCount(str) {
  let arr = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
  let count = 0

  for (let i=0; i<str.length; i++) {
    let letter = str[i].toLowerCase()
    if (arr.includes(letter)) 
      count++
  }
  return count
}
// .toLowerCase() returns element as lower case
// .includes() returns true/false if array includes search element
