function hasSurvived(attackers, defenders){
  let atk = 0
  let def = 0
  let length = Math.min(attackers.length, defenders.length)
  
  for (let i=0; i<length; i++) {
    if (attackers[i] > defenders[i]) {
      atk++
    } 
// NO ELSE INCASE EQUALS THEY BOTH PERISH
    if (attackers[i] < defenders[i]) {
      def++
    }
  }
  
  if (atk == def) {
    let a = attackers.reduce((a,c)=>a+c,0)
    let d = defenders.reduce((a,c)=>a+c,0)
    return a <= d
  }
  
  return atk < def 
}

// Math.min() returns lowest value of iterible object
// .reduce() adds elements in array
