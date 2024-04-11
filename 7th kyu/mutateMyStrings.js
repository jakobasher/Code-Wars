function mutateMyStrings(stringOne, stringTwo){
  let str = ""
  for (let i=0; i<stringOne.length; i++) {
    if (stringOne[i] !== stringTwo[i]) {
      str += stringTwo.slice(0,i) + stringOne.slice(i,stringOne.length) + "\n"
    }
  }
  return str + stringTwo + "\n"
}
