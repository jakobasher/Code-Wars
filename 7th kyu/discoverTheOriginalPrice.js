function discoverOriginalPrice(discountedPrice, salePercentage){
  let num = discountedPrice / (1 - salePercentage/100)
  return +num.toFixed(2)
}
// +var returns a integer
// .toFixed() returns decimal as string
