String.prototype.toJadenCase = function () {
  let str = ""
  this.split(" ").forEach(function(s) { 
      str = str + " " + s.slice(0,1).toUpperCase() + s.slice(1).toLowerCase()
  });
  return str.slice(1)
}
