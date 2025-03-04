function tram(stops, descending, onboarding){
  let count = 0;
  let maxPassengers = 0;
    
  for (let i = 0; i < stops; i++) {
    count -= descending[i]
    count += onboarding[i]
    maxPassengers = Math.max(maxPassengers, count)
    }
    
    return maxPassengers
}
