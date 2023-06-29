function meeting(x){
  let room = x.indexOf("O")
  return room > -1 ? room : "None available!"
}
// .indexOf() returns first index from array of search term, -1 else
