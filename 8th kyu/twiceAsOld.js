function twiceAsOld(dadYearsOld, sonYearsOld) {
  let num = dadYearsOld - sonYearsOld * 2
  return num == 0 ? 0
    : num > 0 ? num
    : -num
}
// Could be as short as, Math.abs(dadYearsOld - 2 * sonYearsOld)
