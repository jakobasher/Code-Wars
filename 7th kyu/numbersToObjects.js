function numObj(s){
  let array = []
  for(let i = 0; i < s.length; i++){
    let num = s[i]
    let letter = {}
    letter[num] = String.fromCharCode(num)
    array.push(letter)
  }
  return array
}
// .fromCharCode() return character code
// .push() add element to end of array
// Create object, add to element
// Next time try .map() and String.fromCharCode()
