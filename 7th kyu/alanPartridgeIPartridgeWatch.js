function part(x){
  let arr = ["Partridge","PearTree","Chat","Dan","Toblerone","Lynn","AlphaPapa","Nomad"]
  let num = x.filter(e => arr.includes(e)).length
  return num > 0
    ? "Mine\'s a Pint" + "!".repeat(num)
    : "Lynn, I've pierced my foot on a spike!!"
}
// .filter() returns copy of array
// .includes() returns t/f
// .repeat() returns copy of string repeated
