function well(x){
  let n = x.filter(e => e=="good").length
  if (n>2) return "I smell a series!"
  if (n>0) return "Publish!"
  return "Fail!"
}
// .filter() returns filtered array of true(s)
