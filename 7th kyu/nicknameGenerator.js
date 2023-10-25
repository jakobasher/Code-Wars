function nicknameGenerator(name){
  if (name.length <= 3) return "Error: Name too short"
  return "aeiou".includes(name[2]) ? name.slice(0,4) : name.slice(0,3)
}
// .includes() returns t/f
// .slice() returns portion of string
