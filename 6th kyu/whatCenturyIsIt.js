function whatCentury(year){

  let century = Math.floor(year/100)
  let centuryCurrent
  let suffix = "th"
  
  if (year%100 !== 0) {
    centuryCurrent = century+1
  } else {
    centuryCurrent = century
  }
  
  if (centuryCurrent.toString().split("")[1] == 1 &&
     centuryCurrent !== 11) {suffix = "st"}
  if (centuryCurrent.toString().split("")[1] == 2 &&
     centuryCurrent !== 12) {suffix = "nd"}
  if (centuryCurrent.toString().split("")[1] == 3 &&
     centuryCurrent !== 13) {suffix = "rd"}
  
  return centuryCurrent+suffix


}
