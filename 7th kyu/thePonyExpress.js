function riders(stations) {
  let riders = 1
  let travelled = 0

  for (let i = 0; i < stations.length; i++) {
    if (travelled + stations[i] > 100) {
      riders++
      travelled = stations[i]
    } else {
      travelled += stations[i]
    }
  }
  return riders
}
