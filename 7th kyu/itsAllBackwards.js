function flipper(stringArr){
  return stringArr
    .reverse()
    .map(e => e.length > 1 
         ? e.toLowerCase().slice(0,-1) + e.toUpperCase().slice(-1) 
         : e)
    .join(" ")
}
