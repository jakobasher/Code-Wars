function calculateTime(battery,charger){
  let t1 = battery * 0.85 / charger
  let t2 = battery * 0.1 / charger/0.5
  let t3 = battery * 0.05 / charger/0.2
  
  let totalTime = t1 + t2 + t3;
  return Math.round(totalTime * 100) / 100
}
