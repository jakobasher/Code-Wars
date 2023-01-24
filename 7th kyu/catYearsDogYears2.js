var ownedCatAndDog = function(catYears, dogYears) {
  let cat = catYears < 15 ? 0 : catYears < 24 ? 1 : (catYears-15-9)/4+2
  let dog = dogYears < 15 ? 0 : dogYears < 24 ? 1 : (dogYears-15-9)/5+2
  let ownedCat = Math.floor(cat)
  let ownedDog = Math.floor(dog)
  return [ownedCat, ownedDog];
}
// Ternary if elses
// Math.floor() returns round down
