function bmi(weight, height) {
  let num = weight/height/height
  return num <= 18.5 
    ? "Underweight" 
    : num <= 25.0 
      ? "Normal" 
      : num <= 30.0 
        ? "Overweight" 
        : "Obese" 
}
// Ternary if else
// A bunch of ifs
