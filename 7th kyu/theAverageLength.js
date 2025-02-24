function averageLength(array) { 
  let average = array.map(e=>e.length).reduce((a,c)=>a+c,0) / array.length
  average = Math.round(average)
  return array.map(e=>e[0].repeat(average))
}
