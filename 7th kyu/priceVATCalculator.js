function Calculator(vatRate){ 
  this.getNet = function(grossPrice){
    return +(100*grossPrice/(100+vatRate)).toFixed(2)
  }
  this.getVat = function(grossPrice){
    return +(grossPrice - 100*grossPrice/(100+vatRate)).toFixed(2)
  }
}
// .toFixed() return to decimal place
// +var return as integer
