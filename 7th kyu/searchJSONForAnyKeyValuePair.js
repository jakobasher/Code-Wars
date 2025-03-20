function getCharacters(obj, key, val) {
  return obj.characters.filter(e => (e[key] || "").toLowerCase() == val.toLowerCase())
}
