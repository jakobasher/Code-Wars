function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  return "The " + m[birthday.getMonth()] + " " + d[birthday.getDate()%10]
}
// .getMonth() returns month in zero-base
// .getDate() returns the day of the month
