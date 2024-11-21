var splitInParts = function(s, partLength){
  let array = []
  for (let i=0; i<s.length; i+=partLength) {
    array.push(s.slice(i,i+partLength))
  }
  return array.join(" ")
}
