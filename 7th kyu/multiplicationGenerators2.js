function* generator(a) {
  for (let b=1; b<11; b++){
    yield `${a} x ${b} = ${a*b}`
  }
}
