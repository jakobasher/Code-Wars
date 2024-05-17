function convertBase20ToDecimal(init){
  let val = parseInt(init, 20)
  return isNaN(val) ? -1 : val
}
