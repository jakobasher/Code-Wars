function boredom(staff){
  let department = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  }
  let num = Object.values(staff).reduce((a,c) => a+department[c], 0)
  return num <= 80
    ?  "kill me now"
    : num < 100 
      ? "i can handle this"
      : "party time!!"
}
// Create object for department
// Object.values() return values as array
// .reduce() add elements in array by taking department value 
