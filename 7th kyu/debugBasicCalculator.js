var calculate = function calculate(a, o, b) {
  var result = null
 
  if(o == "+") return a + b;
  if(o == "-") return a - b;
  if(o == "/" && b !== 0) return a / b;
  if(o == "*") return a * b;
  return result;
}
