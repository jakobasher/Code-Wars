function whatListAmIOn(actions){
  let naughty = 0
  let nice = 0
  for (let i=0; i<actions.length; i++) {
    if (actions[i][0] == "b") naughty++
    if (actions[i][0] == "f") naughty++
    if (actions[i][0] == "k") naughty++
    if (actions[i][0] == "g") nice++
    if (actions[i][0] == "s") nice++
    if (actions[i][0] == "n") nice++
  }
  return naughty >= nice ? "naughty" : "nice"
}
