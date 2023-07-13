function insurance(age, size, numofdays){
  let num1 = age < 25 ? 10 : 0
  let num2 = size == "economy" ? 0 : size == "medium" ? 10 : 15
  return numofdays < 0 ? 0 : (50+num1+num2) * numofdays
}
