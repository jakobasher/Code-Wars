function solve(s){
  return s.split(/[^aeiou]/i).sort((a,b)=>b.length-a.length)[0].length
}
