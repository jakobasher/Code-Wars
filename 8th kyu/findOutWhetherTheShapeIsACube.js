var cubeChecker = function(volume, side){
  if (side < 1) return false
  return Math.pow(side, 3) == volume
};
// Math.pow() base raised to an exponent
// Some edge cases in question
