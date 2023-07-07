function convertCF(num, scale){
  if (scale == "f") return num*9/5+32 
  if (scale == "c" || scale == undefined) return 5/9*(num-32) 
  throw new Error()
}
// throw new Error() a catch / break
