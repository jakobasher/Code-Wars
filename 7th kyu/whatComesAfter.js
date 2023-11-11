function comes_after(str,l) {
  let array = []
  for (let i=0; i<str.length; i++) {
    if (str[i].toLowerCase() == l) {
      array.push(str[i+1])
    }
  }
  return array.join("").replace(/[\d\s\W_]/g, '')
}
// .toLowerCase() returns as lower case
// .push() add to end of array
// .join() returns string
// .replace() REGEX 
