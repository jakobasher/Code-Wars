function getMixedNum(fraction) {
  let [numerator, denominator] = fraction.split("/").map(Number)
  return `${Math.floor(numerator/denominator)} ${numerator%denominator}/${denominator}`
}
