function bloodAlcoholContent(drinks, weight, sex, time){
  let r = sex == 'male' ? 0.73 : 0.66
  let A = drinks.ounces * drinks.abv
  let bac = A * 5.14 / weight * r - 0.015 * time
  return +bac.toFixed(4)
}
