function getDrinkByProfession(param){
  let obj = {
    "Jabroni": "Patron Tequila",
    "School Counselor": "Anything with Alcohol",
    "Programmer": "Hipster Craft Beer",
    "Bike Gang Member": "Moonshine",
    "Politician": "Your tax dollars",
    "Rapper": "Cristal"
  }
  let str = param
    .split(" ").map(e => e[0].toUpperCase() + e.slice(1).toLowerCase())
    .join(" ")
  return obj[str] ? obj[str] : "Beer"
}
