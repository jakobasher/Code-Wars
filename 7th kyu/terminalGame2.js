Hero.prototype.move = function(dir) {
  var y = Number(this.position[0])
  var x = Number(this.position[1])
  
  if (dir == "up") y--
  else if (dir == "down") y++
  else if (dir == "left") x--
  else if (dir == "right") x++
  
  if (x < 0 || x > 4 || y < 0 || y > 4) {
    throw new RangeError()
  }
  
  this.position = `${y}${x}`
}
