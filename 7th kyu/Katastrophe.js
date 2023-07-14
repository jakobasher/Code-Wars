function strongEnough(earthquake, age) {
  let num = earthquake.map(e=>e.reduce((a,c)=>a+c)).reduce((a,c)=>a*c,1)
  let strength = 1000 * Math.pow(0.99, age);
  return num < strength ? "Safe!" : "Needs Reinforcement!"
}
// .reduce() once to add, then to multiply
// Math.pow() base raised to exponent
