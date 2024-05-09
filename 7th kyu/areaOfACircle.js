var circleArea = function(radius) {
  if (radius <= 0) {
    throw new Error("Radius must be a positive number");
  }
  let area = Math.PI*radius*radius
  return Math.round(area*100)/100
};
