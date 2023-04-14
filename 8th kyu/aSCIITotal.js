function uniTotal (string) {
  return string.split("").map(e=>e.charCodeAt()).reduce((a,c)=>a+c,0)
}
// .split() return array from string
// .map() mutates elements in array with
// .charCodeAt() return as 
// .reduce() adds elements, in this case
