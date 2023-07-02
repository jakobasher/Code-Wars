function howMuchILoveYou(nbPetals) {
  let num = nbPetals % 6
  if (num == 1) return "I love you"
  if (num == 2) return "a little"
  if (num == 3) return "a lot"
  if (num == 4) return "passionately"
  if (num == 5) return "madly"
  if (num == 0) return "not at all"
}
// Can try using array and by index
