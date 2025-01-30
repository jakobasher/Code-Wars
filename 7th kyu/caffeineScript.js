function caffeineBuzz(n){
  let str = ""
  
  if (n%3==0) str = "Java"
  if (n%3==0 && n%4==0) str = "Coffee"
  if (str.length>0 && n%2==0) str = str+"Script"

  if (str == "") return "mocha_missing!"
  return str 
}
