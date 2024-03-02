function naughtyOrNice(data) {
  let niceCount = 0
  let naughtyCount = 0

  for (let month in data) {
    for (let day in data[month]) {
      if (data[month][day] == 'Naughty') {
        naughtyCount++
      }
      if (data[month][day] == 'Nice') {
        niceCount++
      }
    }
  }
  return niceCount >= naughtyCount ? "Nice!" : "Naughty!"
}
