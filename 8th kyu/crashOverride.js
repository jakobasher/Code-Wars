function aliasGen(){
  let fName = firstName[arguments[0][0].toUpperCase()]
  let sName = surname[arguments[1][0].toUpperCase()]
  return fName && sName 
    ? `${fName} ${sName}` 
    : `Your name must start with a letter from A - Z.`  
}
