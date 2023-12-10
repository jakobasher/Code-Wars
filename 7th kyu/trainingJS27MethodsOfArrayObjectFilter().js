function countGrade(scores){
  let obj = { S:0, A:0, B:0, C:0, D:0, X:0 }
  scores.map(e => {
    return e >= 100 ? obj["S"]++
      : e >= 90 ? obj["A"]++
      : e >= 80 ? obj["B"]++
      : e >= 60 ? obj["C"]++
      : e >= 0 ? obj["D"]++
      : obj["X"]++
  })
  return obj
}
