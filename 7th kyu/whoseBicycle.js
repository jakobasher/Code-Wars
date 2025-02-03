function whoseBicycle(diary1, diary2, diary3) {
  let first = Object.values(diary1).reduce((a, c) => a+c, 0);
  let second = Object.values(diary2).reduce((a, c) => a+c, 0);
  let third = Object.values(diary3).reduce((a, c) => a+c, 0);
  let smartest = ""

  if (first >= second && first >= third) smartest = "first"
  if (second >= first && second >= third) smartest = "second"
  if (third >= first && third >= second) smartest = "third"

  return `I need to buy a bicycle for my ${smartest} son.`
}
