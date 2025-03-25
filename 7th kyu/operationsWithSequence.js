var calc = function(a) {
  return a.map((e, i) => {
      if (e>0) {
        e = e*e
      }
      if ((i+1) % 3 == 0) {
        e = e*3
      }
      if ((i+1) % 5 == 0) {
        e = e * -1
      }
      return e
    })
    .reduce((a, c) => a+c, 0)
  }
