function fuelPrice(litres, pricePerLitre) {
  let cost = litres < 2 ? litres * pricePerLitre 
  : litres < 4 ? litres * (pricePerLitre - 0.05) 
  : litres < 6 ? litres * (pricePerLitre - 0.10)
  : litres < 8 ? litres * (pricePerLitre - 0.15)
  : litres < 10 ? litres * (pricePerLitre - 0.20)
  : litres * (pricePerLitre - 0.25)
  return +cost.toFixed(2)
}
// .toFixed() returns to decimal point
