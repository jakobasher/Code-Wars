function transposeTwoStrings (array) {
  let word1 = array[0]
  let word2 = array[1]
  let transpose = ""
	let maxLength = Math.max(array[0].length, array[1].length)
  for (let i=0; i<maxLength; i++) {
    let letter1 = word1[i] == undefined ? " " : word1[i]
    let letter2 = word2[i] == undefined ? " " : word2[i]

    transpose += letter1+" "+letter2+"\n"
  } 
  return transpose.slice(0,-1)
}
// Math.max() returns high value element
// .slice() returns copy of array, -1 cuts at end, doesn't count the "\" ??
