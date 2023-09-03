function specialNumber(n){
  let num1 = n.toString().split("")
  let num2 = num1.filter(e=> e>=0 && e<=5).length
  return num1.length == num2 ? "Special!!" : "NOT!!"
}
// .toString() return string
// .split() return array from string
// .filter() returns copy of string
