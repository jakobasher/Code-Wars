function order(words){
  return words.split(" ").sort((a,b) => num(a) - num(b)).join(" ")
}

function num(word) {
  return word.match(/\d/)[0]
}
  
// .split() string to array
// .sort() a-b for ascending
// .join() array to string
// .match() retrieve through regexp
