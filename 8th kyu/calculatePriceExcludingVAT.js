function excludingVatPrice(price){
  return price !== null ? +(price/1.15).toFixed(2) : -1
}
// +var return as integer
// .toFixed() round to decimal place
