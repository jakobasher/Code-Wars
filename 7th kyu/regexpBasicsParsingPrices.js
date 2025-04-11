String.prototype.toCents=function(){
  let match = this.match(/^\$(\d+)\.(\d{2})$/)
  if (!match) return null;

  let dollars = parseInt(match[1], 10)
  let cents = parseInt(match[2], 10)
  return dollars*100 + cents
}
