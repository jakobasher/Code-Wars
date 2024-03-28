function calculateSpeed(distance, time) {
  let distanceInMetres = distance.endsWith("km")
    ? parseFloat(distance) * 1000
    : parseFloat(distance)
  let timeInSeconds = time.endsWith("min") 
    ? parseFloat(time) * 60
    : parseFloat(time)
  let mph = distanceInMetres / timeInSeconds * 2.23694
  return Math.round(mph) + "mph"
}
