function nonsense(str) {
  let str2 = str
    .replaceAll("0","a")
    .replaceAll("1","e")
    .replaceAll("2","i")
    .replaceAll("3","o")
    .replaceAll("4","u")    
    .toLowerCase()
    .replaceAll(" i ", " I ")
    .replaceAll("trex","")
    .replaceAll("raptor", "")
  return str2[0].toUpperCase() + str2.slice(1) + (str2.endsWith(".") ? "" : ".")
}
