function createDict(keys, values){
  let obj = {}
  for (let i=0; i<keys.length; i++) {
    (i < values.length)
      ? obj[keys[i]] = values[i]
      : obj[keys[i]] = null
  }
  return obj
}
// Create obj, if i smaller then values length, Add key and values of i with
