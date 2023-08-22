function lowercaseCount(str){
  return str.split("").filter(e=> e>= "a" && e<= "z").length
}
// .filter() >="a" will return value higher then unicode value
