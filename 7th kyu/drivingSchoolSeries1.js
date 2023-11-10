function passed (list) {
  let arr = list.filter(e=> e<=18)
  if (arr.length == 0) return "No pass scores registered."
  return Math.round(arr.reduce((a,c)=>a+c,0) / arr.length)
} 
// .filter() returns array copy
// .reduce() adds array, in this case
