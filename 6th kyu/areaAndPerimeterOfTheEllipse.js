function elipse(a,b){
  let area = Math.PI*a*b
  let perimeter = Math.PI * (3/2 * (a + b) - Math.sqrt(a * b))
  return `Area: ${area.toFixed(1)}, perimeter: ${perimeter.toFixed(1)}`
}
