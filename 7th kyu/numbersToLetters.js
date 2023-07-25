function switcher(x){
  let str = "abcdefghijklmnopqrstuvwxyz"
  let rev = str.split("").reverse().join("")
  return x.map(e => e<27 ? rev[e-1] : e == 27 ? "!" : e == 28 ? "?" : " " ).join("")
}
// First set up reverse string instead of typing it out
// .map() to use the reverse string index of the letter
