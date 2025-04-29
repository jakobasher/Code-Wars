function datingRange(age){
  if (age<15) return `${Math.floor((age-0.1*age))}-${Math.floor(age+0.1*age)}`
  let minAge = Math.floor((age/2+7))
  let maxAge = Math.floor(2*(age-7))
  return `${minAge}-${maxAge}`
}
