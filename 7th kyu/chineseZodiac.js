function chineseZodiac(year){
  let array = ["Wood", "Fire", "Earth", "Metal", "Water"]
  let array2 = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]

  let elementIndex = ((year - 1924) % 60) % 10
  let element = array[Math.floor(elementIndex / 2)]

  let animalIndex = (year - 1924) % 12
  let animal = array2[animalIndex]

  return `${element} ${animal}`
}
