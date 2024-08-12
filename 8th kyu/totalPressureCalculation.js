solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  let moles1 = givenMass1 / molarMass1
  let moles2 = givenMass2 / molarMass2
  return (moles1+moles2) * 0.082 * (temp + 273.15) / volume 
}
