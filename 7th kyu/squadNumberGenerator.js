function generateNumber(squad, n){
  
  if (!squad.includes(n)) return n
  
  let results = []
  for (let i = 1; i <= 9; i++) {
    let j = n - i;
    if (j >= 1 && j <= 9) {
      results.push(+`${i}${j}`);
    }
  }
  for (let i=0; i<results.length; i++) {
    if (!squad.includes(results[i])) return results[i]
  }
  return null
}

