function myLanguages(results) {
  let array = Object.entries(results).filter(([language, score]) => score >= 60);  
  array.sort((a, b) => b[1] - a[1])
  return array.map(([language, score]) => language);
}
