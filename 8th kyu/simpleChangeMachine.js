function changeMe(moneyIn){
  if (moneyIn == "£1") return "20p ".repeat(5).trim()
  if (moneyIn == "£5") return "20p ".repeat(25).trim()  
  if (moneyIn == "£2") return "20p ".repeat(10).trim()
  if (moneyIn == "50p") return "20p 20p 10p"
  if (moneyIn == "20p") return "10p 10p"
  return moneyIn
}
// .repeat() repeats string n times
// .trim() trims white space at beginning and end
// A mix of methods and brute
