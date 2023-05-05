function vowel2index(str) {
   let vowels = ["a","e","i","o","u"]
   return str
     .split("")
     .map((e,i) => vowels.includes(e.toLowerCase()) ? i+1 : e)
     .join("")
}
// .split() returns array from string
// .map() Fn to each element, if true return index, else returns letter
// .join() returns string from array
