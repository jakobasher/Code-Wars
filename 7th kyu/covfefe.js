function covfefe(str){
  return str.includes("coverage") 
    ? str.replace(/coverage/g,"covfefe") 
    : str + " covfefe"
}
// .includes() returns t/f
// .replace() //g replaces all instances
